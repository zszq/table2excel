// const path = require("path");
const fs = require("fs");
const cheerio = require("cheerio");
const xlsx = require("node-xlsx");

// 配置
const sourceDirPath = "./data/";
const targetDirPath = "./result";

table2excel();

function table2excel() {
  let files = fs.readdirSync(sourceDirPath);
  // fs.readdir(sourceDirPath, "utf-8", function (err, files) {
  //   if (err) {
  //     return console.log(err);
  //   }

  // 清空结果目录并新重新创建
  const isExistDir = fs.existsSync(targetDirPath);
  if (isExistDir) {
    try {
      fs.rmSync(targetDirPath, { recursive: true });
    } catch (error) {
      console.log(
        "\x1b[31m%s\x1b[0m",
        `删除result文件夹失败，确认其中是否有文件被打开 - ${error}`
      );
    }
  }
  fs.mkdirSync(targetDirPath);

  // 处理
  start(files);
  // });
}

function start(files) {
  let promises = [];
  files.forEach((val, index) => {
    let fPath = sourceDirPath + val;
    let stats = fs.statSync(fPath);

    if (stats.isFile()) {
      promises.push(parseData(fPath));
    } else {
      console.log("\x1b[31m%s\x1b[0m", `传入的部分内容非文件！`);
    }
  });

  Promise.allSettled(promises).then((results) => {
    let success = []; // success: [[[],[]], [[],[]]]
    let failure = [];
    results.forEach((item) => {
      if (item.status == "fulfilled") {
        success.push(item.value);
      } else {
        failure.push(item.reason);
      }
    });

    let thead = success[0][0]; // 提取表头
    success.forEach((item) => item.shift()); // 删除每一个文件的表头
    let data = success.flat();
    data.unshift(thead); // 添加整个表头

    // 修改序号
    if (thead[0] == "序号") {
      let index = 1;
      data.forEach((ele) => {
        ele[0] = index;
        index++;
      });
    }

    // 打印日志
    console.log(`------处理个数：${files.length}个：------`);
    console.log("\x1b[32m%s\x1b[0m", `成功：${success.length}个`);
    console.log(
      "\x1b[31m%s\x1b[0m",
      `失败：${failure.length}个(不包含非文件) 👇`
    );
    console.dir(failure, { depth: null });

    // 写入数据并生存excel
    generateExcel("data", data);
  });
}

function parseData(path) {
  return new Promise(function (resolve, reject) {
    // 判断后缀
    const fileName = path.split("/").slice(-1)[0];
    const suffix = fileName.split(".").slice(-1)[0];
    if (suffix != "html") {
      return reject({
        fileName: fileName,
        error: `(${fileName})后缀不是html文件！`,
      });
    }
    // 读取文件
    fs.readFile(path, "utf8", function (err, data) {
      if (err) {
        return reject({
          fileName: fileName,
          error: `读取 ${fileName} 文件错误：${err}`,
        });
      }

      const $ = cheerio.load(data);
      // 未找到table
      if ($("table#table").length == 0) {
        return reject({
          fileName: fileName,
          error:
            "文件中未找到table，如果存在，可能因为文件格式变化，需要开发人员重新分析定位到正确的table位置！",
        });
      }
      const trs = $("table#table").find("tbody").find("tr");
      const trLen = trs.length;
      const list = [];

      if (trLen > 0) {
        trs.each((i, tr) => {
          let row = [];
          let trDom = $(tr); // 缓存
          let tds = trDom.find("td");
          const tdLen = tds.length;

          if (tdLen) {
            tds.each((i, td) => {
              let tdDom = $(td);
              // 账号状态项-当前状态
              if (tdDom.find("img").attr("title")?.includes("当前状态")) {
                row.push(tdDom.find("img").attr("title").trim());
                return;
              }
              row.push(tdDom.text().trim());
            });
          }
          list.push(row);
        });

        // return list;
        console.log(`${fileName}-解析成功！`);
        resolve(list);
      }
    });
  });
}

function generateExcel(fileName, data) {
  // 通过 xlsx 模块将数据转化成 buffer 对象
  var buf = xlsx.build([{ name: "sheetName", data }]);

  // 将 buffer 写入到 **.xlsx 中（导出）
  fs.writeFile(`${targetDirPath}/${fileName}.xlsx`, buf, (err) => {
    if (err) return console.log(`导出失败: ${err}`);
    console.log("\x1b[36m%s\x1b[0m", `解析成功的数据已导出！`);
  });
}
