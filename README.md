# BTCNEXT

## 欢迎来到`BTCNEXT`!

欢迎来到BTC NEXT！🚀 

在这里[BTCNEXT](https://btcnext.org)，我们将深入探讨比特币的应用生态，涵盖资产协议、闪电网络、拓展图灵完备等方面。🌐🔍 

👉追踪项目时间表
👉探索开发者背景
👉分享实用工具
👉最新交易网站超链接

助你在比特币世界中游刃有余。一起探索比特币的未来吧！💥💥

## 社区合作

`BTCNEXT` 的贡献者包括[LK Venture](https://linekong.com) 工程师，分析员，以及所有BTCNEXT社区的开发者和内容传播者。我们欢迎所有对BTCNEXT感兴趣的开发者加入这个社区，参与对`BTCNEXT`的共同建设。

如感兴趣，请遵循以下流程来贡献跟BTCNEXT相关的内容：

1. fork `main` branch
2. check out a new branch on local machine
3. make changes
4. submit a pull request for merging into `main` branch

## 文档库结构 + 路线图

```bash
├── 新手上路
│   ├── 介绍
│   ├── 如何加入
│   ├── 更多内容....
├── BTC技术演进
│   ├── BTC简介
│   ├── 关键技术
│   ├── 更多内容....
├── Ordinals
│   ├── Ordinals简介
│   ├── Ordinals创始人
│   ├── 更多内容....
├── Atomicals
│   ├── Atomicals简介
│   ├── Atomicals创始人
│   ├── 更多内容....
├── 闪电网络
│   ├── 闪电网络简介
│   ├── 闪电网络创始人
│   ├── 更多内容....
├── RGB
│   ├── RGB简介
│   ├── RGB创始人
│   ├── 更多内容....
```

## 部署工作流

三个角色，代码贡献者，代码审核者，代码管理员，之间如何配合的工作流。

### 代码贡献者

#### 前置条件

- [git 1.8.2 or above](https://git-scm.com/downloads).
- [Node.js 16.10 or above](https://nodejs.org/en/download/).
- [Modern Yarn](https://yarnpkg.com/getting-started/install) enabled by running `corepack enable`.

1. 准备
    - fork `main` branch `new-site`, `git checkout -b new-site` 
    - checkout 到 branch `new-site` 
2. 编辑
    - 在branch `new-site` 里编辑文件
3. 在**btcnext_docs**里build & deploy
    - 进入 `btcnext_docs` 文件夹
    - 运行 `yarn set version 1.22.21` 切换yarn版本
    - 运行 `yarn install` 安装所需的packages
    - 运行 `export NODE_OPTIONS=--openssl-legacy-provider` 命令
    - `yarn start`，来实时查看改动后的网页效果
    - `yarn build`, 产生更新的 `build` 文件夹
    - `npm run serve` to test the build locally at http://localhost:3000/
    - 确保测试网站在localhost上运行无误
4. Git
    - 新的代码测试无误后，往上一级回到根目录
    - 在branch `new-site`里，`git add .`
    - `git commit -m "commit message"`
    - `git push --set-upstream origin new-site`
5. Submit PR
    - 创建一个 [pull request](https://github.com/Million-Miles/btcnext/pulls) 

### 代码审核者

6. 审核
    - `git pull` 来更新本地的仓库
    - `git checkout new-site` 切换到新的branch
    - 在`btcnext_docs`文件夹下，运行 `yarn build`， 测试branch `new-site` 的新代码
    - 在Github repo相应的PR下留言

### 代码管理员

7.  批准
    - 根据审核的情况，如果对代码满意，approve merge request，把 `new-site` merged进入 `main`
    - Github将自动从remote上删掉 `new-site`这个branch

8.  部署
    - 在本地，`git checkout main` 切换回到 `main`
    - `git pull` 更新merged了`new-site` branch的 `main`
    - 在 `btcnext_docs` 目录里，运行 `yarn build`，生成新的output文件
    - 确保测试网站在`localhost:3000` 运行无误
    - 往上一级回到 `dfx` 根目录，确保仍然在`main` branch里
    - 另开一个Terminal窗口，`dfx start`
    - 在原来的窗口，`dfx deploy`，将网站的文件部署在本地的canister上
    - 在浏览器里查看网站的部署是否有错误，http://canister-id-on-local-machine.localhost:4943/ (不同电脑在本地产生的canister id不一样)
    - 确保测试网站在`localhost:4943` 运行无误
    - `dfx deploy --network=ic --no-wallet`, 部署文件到IC上的容器

## 网站架构

为了追求数据的开放透明，我们将[btcnext.org](https://btcnext.org)网站100%部署在ICP区块链上以便永久保存。

`BTCNEXT`采用了[Docusaurus](https://docusaurus.io/docs)的前端架构，来搭建这个以技术文档为主的网站。大部分的内容文章都以Markdown的格式存在于`btcnext_docs/docs/` 文件夹里。


## 网站赞助者

[btcnext.org](https://btcnext.xyz) 是一个100%部署在ICP区块链上的网站，除了域名受到[ICANN](https://www.icann.org/)管控以外，不依赖任何中心化的服务器或者CDN服务。如果你觉得这个网站有帮助，不妨用[Tip Jar](https://tipjar.rocks)这个[Paul](https://github.com/ninegua)开发的开源程序来给 btcnext.org 的容器充值，以确保网站能够正常运行。

## 网站贡献者

**BTCNEXT**这个网站由LK Ventrue工程师和来自BTCNEXT社区的开发者一起协作完成。我们欢迎更多的朋友加入我们的阵营，跟我们一起来扩展这个网站，丰富她的内容。[WTF Academy](https://github.com/WTFAcademy) 已经树立了一个很好的榜样。希望在不久的将来，下面这张图能看到越来越多的开发者头像。

<a href="https://github.com/Million-Miles/btcnext/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Million-Miles/btcnext" />
</a>
