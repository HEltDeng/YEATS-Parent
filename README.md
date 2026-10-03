# YEATS-Parent｜叶芝英语家长端

唯一微信开发者工具导入目录：本仓库根目录。保留已认可界面，不重新设计。

源自 HEltDeng/YEATS 的 apps/parent-miniprogram；来源提交 `a5a7105ead1084a96d4ece9cbeba32a8d009dc88`。Git 历史由 subtree 提取。

安装与检查：`npm.cmd ci`、`npm.cmd run build`、`npm.cmd test`。

本地 API：`http://127.0.0.1:8930`，唯一后端由 YEATS-Platform 提供。本仓库不依赖其他仓库的 node_modules。
`project.config.template.json` 是模板；真实 AppID 的 `project.config.json` 仅存本机。AppSecret 不进入前端。

启动后端：在相邻 `01_Source-当前源码`（YEATS-Platform）执行 `./scripts/local.ps1 start -WithTestIdentities`。
开发登录只适用于受控本机。体验/生产构建必须关闭 config.ts developmentLogin，后端同时禁用开发登录；尚未授权上传微信。
当前为开发自测候选，待用户阶段验收。

## 体验/生产包隔离

设置 `YEATS_PARENT_API_BASE` 为已授权的 HTTPS 后端地址，运行 `npm.cmd run package:acceptance` 或 `package:production`，输出独立 `dist/acceptance` 或 `dist/production` 导入目录；不改本地开发配置、不上传。
该构建移除开发登录控件和处理方法，打包后扫描开发接口残留。后端必须同步禁用开发登录/测试会话，不能只隐藏按钮。正式微信、手机号、外部服务及用户验收门槛仍需单独通过。

开发工具需要Node>=20。`tools/file-type-buffer-compat`仅将Jimp的旧异步fromBuffer调用适配到已修复的file-type 21.3.4，官方automator/Jimp接口保持不变；不修改第三方源码。`npm test`验证合成二维码解码、PNG/JPEG及畸形ASF的有界处理。工具目录与依赖不进入小程序体验/生产包。
