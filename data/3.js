HTTP/1.1 200 OK
Date: Tue, 25 Apr 2023 07:39:04 GMT
Content-Type: text/html; charset=utf-8
Connection: close
Cache-Control: private
vary: Accept-Encoding
x-aspnetmvc-version: 5.2
x-aspnet-version: 4.0.30319
x-powered-by: ASP.NET
CF-Cache-Status: DYNAMIC
Report-To:
{"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=KDpnls21zLaD6kmi2scPBm19Z%2F2SyFwrOXh78q4FzCDGh6oH5hi%2FlavsOk%2Bi6Em%2B2Iz6p2twY5pUGMJfPk7%2Fa1p%2B2G1nyYJu6Nlfr4eOzwnMu5uTB6RInAYm07f3TYc%2FxSkJbY1fMGsbrg%3D%3D"}],"group":"cf-nel","max_age":604800}
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Server: cloudflare
CF-RAY: 7bd4ee17fc744062-SIN
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
Content-Length: 31664

<!DOCTYPE html>
<html lang="zh">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>代理账号管理</title>
    <link href="/style/stylecss?v=FgtxhRcNx4VePzlWJcGDR-DA-4infB4I-gBoz4LmQto1" rel="stylesheet" />
    <link href="/style/admin/css?v=LmhkICRSeF1Zx3MGauOQ5Ow7aDYVMWtwBqicTWvwk741" rel="stylesheet" />

    <script src="/bundles/jquery?v=84jPVsElpshPhhnrazGalF6xofB2x-MCYt7a9MMsgHM1"></script>

    <script src="/bundles/jqueryval?v=7Sn5xO-3GWkjaclB7i_E6tXwHCz8kw0k_xfuwp9pBlc1"></script>


</head>

<body id="body">



    <link href="/Content/layui/css/layui.css?v=hJJ31SnPfrN7XUtgj3bXSEMW8Ii42MtWfOQMKj5zBcc1" rel="stylesheet" />

    <script src="/Scripts/layer/layer.js"></script>
    <script src="/Content/layui/layui.js"></script>
    <script src="/Scripts/Common.js"></script>
    <div id="con_wrap">
        <div class="con_menu" style="width:100% ; padding-top:-7px;">
            <form action="/user/AgentList" method="post">
                <input type="hidden" id="Level" name="Level" value="1" />
                <div class="input_002">代理账号管理</div>
                <b>状态：</b>
                <select id="Ustatus" name="Ustatus">
                    <option selected="selected" value="34FCAD41F5FD0065">全部</option>
                    <option value="49ECD275F3FD5963">启用</option>
                    <option value="F903A38235C1ADBB">暂停</option>
                    <option value="50A7B7609F8C4FF7">停用</option>
                </select>

                <b>排序：</b>
                <select id="Order" name="Order">
                    <option selected="selected" value="33D99D0DC1CBB13C8AA51C0C46BB2B9E">新增日期</option>
                    <option value="8EBF9A097DF19909CF145547F60FFE53">登录日期</option>
                </select>
                <select id="isdec" name="isdec">
                    <option selected="selected" value="8DB6AFAF0C2CAA59">降幂（由大到小）</option>
                    <option value="91FC8A16D3D5F9B9">升幂（由小到大）</option>
                </select>
                <label>账号：</label>
                <input type="text" id="UserName" name="UserName" style="width: 100px" />
                <label>代理名称：</label>
                <input type="text" id="OtherName" name="OtherName" style="width: 100px" />
                <input type="submit" class="za_button" name="append" value="搜索" />
                <input type="button" class="za_button" name="append" value="新增"
                    onclick="document.location = '/User/GeneralAgentAdd'" />
            </form>

        </div>
    </div>
    <div class="content">
        <table cellspacing="0" cellpadding="0" style="background-color: #0E75B0" class="m_tab" id="table">
            <tr class="m_title_over_co" style="background-color: #429CCD">
                <td class="td">#</td>
                <td class="td">状态</td>
                <td class="company">代理名称</td>
                <td>登入账号</td>
                <td>会员数</td>
                <td>新增日期</td>
                <td>上次登录时间</td>
                <td class="caozuo" style="width:102px;display:none">操作</td>
                <td>账号状态</td>
                <td>功能</td>
            </tr>

            <tr class="m_cen">
                <td>1</td>
                <td>
                    <a title="登陸時間:2023/4/6 12:19:24 登陸IP:" href="#" id="7B431824403A37EC"
                        onclick="return OffOnLine('7B431824403A37EC','dx187122');">在线</a>
                </td>
                <td class="company">徐伟聪</td>
                <td>
                    dx187122 </td>
                <td style="color:red">
                    1
                </td>

                <td>2023/2/19 5:31:18</td>
                <td>2023/4/6 12:19:24</td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=7B431824403A37EC&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=7B431824403A37EC&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=7B431824403A37EC&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=dx187122&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>2</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">刘海飞</td>
                <td>
                    jerome584 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/17 0:12:49</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <a href="/user/CutStatus?id=F6A28537E987F0B6&status=0&ac=AgentList"><img
                            src="/images/control/q0.png" title="启用" /></a>
                    <img src="/images/control/us1.png" title="当前状态:暂停" />
                    <a href="/user/CutStatus?id=F6A28537E987F0B6&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=F6A28537E987F0B6&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=jerome584&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>3</td>
                <td>
                    <a title="登陸時間:2023/3/22 21:58:36 登陸IP:" href="#" id="F6A7F98276887094"
                        onclick="return OffOnLine('F6A7F98276887094','jia6666');">在线</a>
                </td>
                <td class="company">贾东</td>
                <td>
                    jia6666 </td>
                <td style="color:red">
                    93
                </td>

                <td>2023/2/16 7:17:36</td>
                <td>2023/3/22 21:58:36</td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=F6A7F98276887094&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=F6A7F98276887094&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=F6A7F98276887094&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=jia6666&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>4</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">王飞</td>
                <td>
                    gjt19980 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/16 1:57:57</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=69093B15E2909BEC&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=69093B15E2909BEC&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=69093B15E2909BEC&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=gjt19980&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>5</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">董桂龙</td>
                <td>
                    dong3683168 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/16 1:57:55</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=BF36A91FE890DB9E&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=BF36A91FE890DB9E&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=BF36A91FE890DB9E&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=dong3683168&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>6</td>
                <td>
                    <a title="登陸時間:2023/4/17 11:49:20 登陸IP:" href="#" id="C90A7C24F47B4FD6"
                        onclick="return OffOnLine('C90A7C24F47B4FD6','wpc168');">在线</a>
                </td>
                <td class="company">王培超</td>
                <td>
                    wpc168 </td>
                <td style="color:red">
                    3
                </td>

                <td>2023/2/16 1:57:53</td>
                <td>2023/4/17 11:49:20</td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=C90A7C24F47B4FD6&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=C90A7C24F47B4FD6&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=C90A7C24F47B4FD6&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=wpc168&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>7</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">朱鹏翔</td>
                <td>
                    zpx159357 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/15 0:58:50</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=3CF7EA22FB693920&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=3CF7EA22FB693920&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=3CF7EA22FB693920&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=zpx159357&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>8</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">黄子厅</td>
                <td>
                    uo8811 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/14 8:13:54</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=CAE23DA358631BBA&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=CAE23DA358631BBA&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=CAE23DA358631BBA&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=uo8811&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>9</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">邓锋</td>
                <td>
                    Dfeng82 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/14 8:13:51</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=5F549E39FF959938&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=5F549E39FF959938&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=5F549E39FF959938&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=Dfeng82&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>10</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">王子洋</td>
                <td>
                    wang01056 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/14 8:13:45</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=0EE7DD5BEF1A3169&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=0EE7DD5BEF1A3169&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=0EE7DD5BEF1A3169&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=wang01056&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>11</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">安思源</td>
                <td>
                    du521666888 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/14 8:13:42</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=992FE4D879E2CCC1&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=992FE4D879E2CCC1&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=992FE4D879E2CCC1&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=du521666888&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>12</td>
                <td>
                    <a title="登陸時間:2023/2/14 22:04:05 登陸IP:" href="#" id="209BBEBC2B64919F"
                        onclick="return OffOnLine('209BBEBC2B64919F','ABC105220');">在线</a>
                </td>
                <td class="company">岳焕奇</td>
                <td>
                    ABC105220 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/14 8:13:39</td>
                <td>2023/2/14 22:04:05</td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=209BBEBC2B64919F&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=209BBEBC2B64919F&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=209BBEBC2B64919F&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=ABC105220&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>13</td>
                <td>
                    <a title="登陸時間:2023/2/12 5:42:09 登陸IP:" href="#" id="69FC3E57CE1ADB86"
                        onclick="return OffOnLine('69FC3E57CE1ADB86','aa911569837');">在线</a>
                </td>
                <td class="company">刘风光</td>
                <td>
                    aa911569837 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/12 5:40:47</td>
                <td>2023/2/12 5:42:09</td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=69FC3E57CE1ADB86&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=69FC3E57CE1ADB86&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=69FC3E57CE1ADB86&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=aa911569837&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>14</td>
                <td>
                    <a title="登陸時間:2023/2/11 10:11:50 登陸IP:" href="#" id="67F49A8698094DF0"
                        onclick="return OffOnLine('67F49A8698094DF0','a12346578');">在线</a>
                </td>
                <td class="company">王晓东</td>
                <td>
                    a12346578 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/11 9:53:22</td>
                <td>2023/2/11 10:11:50</td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=67F49A8698094DF0&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=67F49A8698094DF0&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=67F49A8698094DF0&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=a12346578&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>15</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">2023短信</td>
                <td>
                    dx0050 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/11 6:19:23</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=1D98E8AB697BA9E9&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=1D98E8AB697BA9E9&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=1D98E8AB697BA9E9&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=dx0050&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>16</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">2023短信</td>
                <td>
                    dx0049 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/11 6:19:14</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=064D343FEB434B42&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=064D343FEB434B42&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=064D343FEB434B42&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=dx0049&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>17</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">2023短信</td>
                <td>
                    dx0048 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/11 6:19:04</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=A76F381AD7B39FD8&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=A76F381AD7B39FD8&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=A76F381AD7B39FD8&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=dx0048&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>18</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">2023短信</td>
                <td>
                    dx0047 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/11 6:18:55</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=274598534D90B656&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=274598534D90B656&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=274598534D90B656&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=dx0047&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>19</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">2023短信</td>
                <td>
                    dx0046 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/11 6:18:45</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=9E11973BA9F0C349&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=9E11973BA9F0C349&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=9E11973BA9F0C349&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=dx0046&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
            <tr class="m_cen">
                <td>20</td>
                <td>
                    <a title="登陸時間: 登陸IP:" href="#" style="color:#837d7d">離線</a>
                </td>
                <td class="company">2023短信</td>
                <td>
                    dx0045 </td>
                <td style="color:red">
                    0
                </td>

                <td>2023/2/11 6:18:37</td>
                <td></td>
                <td class="caozuo" style="display:none">
                </td>
                <td>
                    <img src="/images/control/us0.png" title="当前状态:启用" />
                    <a href="/user/CutStatus?id=3AEFB1D7906C7A87&status=1&ac=AgentList"><img
                            src="/images/control/q1.png" title="暂停" /></a>
                    <a href="/user/CutStatus?id=3AEFB1D7906C7A87&status=2&ac=AgentList"><img
                            src="/images/control/q2.png" title="停止" /></a>
                </td>
                <td align="center">
                    <a href="/user/modify?id=3AEFB1D7906C7A87&ac=Agentlist"> 修改 </a>
                    <b>/</b><a href="Modify_Agent_Application?UserName=dx0045&Company=wacenproiox">资料</a><b>/</b>
                </td>
            </tr>
        </table>
    </div>
    <div style="display:block;height:38px;float: left;width: 100%;">&nbsp;</div>
    <div id="page1" class="bottomNav" style="margin-top:5px; text-align:center;"></div>
    <script src="/Scripts/laypage-v1.2/laypage/laypage.js"></script>
    <script src="/Scripts/js/offline.js"></script>
    <script type="text/javascript">
        $(function () {

            $("#Company").change(function () {
                var a = $("#Company  option:selected").val();
                $.ajax({
                    url: "/User/GetGeneralAgentlist?company=" + a,
                    dataType: "json",
                    cache: false,
                    data: null,
                    type: "GET",
                    success: function (data) {
                        $("#GeneralAgentSearch").empty();
                        $("#GeneralAgentSearch").append(data);
                    }

                })
            })

            var company = '1'

            var caozuo = '0'

            if (caozuo == "1" || company == "0") {
                $(".caozuo").show();
            }

            laypage({
                cont: 'page1',
                pages: '66', //可以叫服务端把总页数放在某一个隐藏域，再获取。假设我们获取到的是18
                skip: true,
                skin: '#AF0000',
                curr: function () { //通过url获取当前页，也可以同上（pages）方式获取
                    var page = location.search.match(/Page=(\d+)/);
                    return page ? page[1] : 1;
                }(),
                jump: function (e, first) { //触发分页后的回调
                    if (!first) { //一定要加此判断，否则初始时会无限刷新
                        location.href = '?Page=' + e.curr + '&type=1';
                    }
                }
            });
        })

        var index;
        function PerGroup(Id) {
            layer.close(index);
            index = layer.open({
                offset: ['20%', '200px'],
                type: 2,
                title: '修改权限群组',
                shadeClose: true,
                shade: false,
                area: ['600px', '320px'],
                content: ['/Permission/EditAgentPerGroup?Id=' + Id], //iframe的url
                end: function () {
                }
            });
        }
    </script>



    <script src="/bundles/jqueryval?v=7Sn5xO-3GWkjaclB7i_E6tXwHCz8kw0k_xfuwp9pBlc1"></script>


</body>

</html>