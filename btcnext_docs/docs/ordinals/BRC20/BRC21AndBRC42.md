---
id: BRC21
title: BRC21
sidebar_label: BRC21
slug: /ordinals/BRC20/BRC21
---

## 🤠 BRC21 & BRC42
- 介绍

	- BRC-20 的跨链版本，跨链项目 Interlay 的创始人 Alexei Zamyatin 提出的 BRC-20 代币的跨链解决方案。

	- 以完全去中心化的方式将 BRC-20 代币连接到以太坊、Solana、Polkadot、Interlay 等外部智能合约链，从而解锁 BRC-20 代币的 DeFi 使用场景。

	- BRC-21 是将外部区块链的资产部署到比特币网络上。

	- BRC-42 则是将 BRC-20 代币部署到其他链上。

	- 日期：5月7日

	- [创始人 Alexei Zamyatin ；](https://twitter.com/alexeiZamyatin)

- 技术特点

	- 起始链智能合约：负责处理起始链上的铸币和赎回操作。

	- 自定义索引器（Custom indexer）：负责验证比特币网络上的 BRC-21 铸币、转移、赎回等操作，以及起始链上的智能合同状态。

	- 比特币中继器（BTC-Relay）：作为比特币网络上的轻客户端来实现智能合约的效果，需要验证比特币网络上的交易包含情况并进行解析。

- 用例：Interlay Labs 的看法是，虽然 BRC-21 标准理论上可以将 ETH、DOT、SOL 等各种各样的其他链资产引入比特币网络，但该标准真正的用武之地实际上在于引入去中心化稳定币，并将其部署至闪电网络或其他支付协议之上。

