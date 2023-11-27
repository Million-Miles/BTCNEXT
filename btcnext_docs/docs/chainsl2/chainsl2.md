---
id: chainsl2
title: chainsL2
sidebar_label: 介绍
slug: /chainsl2/chainsl2
---

## 🤠 介绍
比特币的2层网络,也称为第二层（Layer 2）解决方案,是一系列旨在提高比特币网络效率和扩展性的技术。这些技术通过在比特币区块链（第一层）之上创建一个附加层,来实现这一目标。下面是一些比特币2层网络的关键点：

目的：主要目的是解决比特币区块链的可扩展性问题,提高交易速度,降低交易费用,同时保持网络的去中心化和安全性。

闪电网络（Lightning Network）：这是最知名的比特币2层解决方案。它允许用户建立支付通道,实现几乎即时的微支付,而无需每次都在比特币主链上确认交易。这大大减少了主链上的拥堵和费用。

侧链（Sidechains）：侧链是与比特币主链并行运行的独立区块链,允许比特币在两个链之间转移。这样,可以在侧链上进行实验和处理交易,而不影响主链的性能和安全性。

状态通道（State Channels）：与闪电网络类似,状态通道允许两个或更多方在区块链外进行交易,只在开始和结束时向主链提交交易。这也有助于减少主链的拥堵。

批量交易（Batching）：这是一种在单个交易中打包多个输出的技术,以减少区块链上的交易数量。

通过这些技术,比特币的2层网络旨在提高处理能力,同时维持去中心化和安全性。这些解决方案对于比特币的长期可持续性和普及至关重要。

### [Statechains、Drivechains、Ark](https://www.binance.com/zh-CN/feed/post/271477)

- [Statechains](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39)

	- Statechains是一种用于BTC链下转移的扩容技术,它与闪电网络类似,但又不完全相同。在闪电网络中,资产的转移是通过通道的所有权转移的,但在Statechains中资产的转移是通过BTC存款（UTXO）私钥（临时密钥）的所有权转移的。

	- Statechains技术的一个解决方案是通过Commerceblock创建的Mercury钱包实现的。

	- [ 作者：Ruben Somsen ](https://twitter.com/SomsenRuben)

	- 时间：2019年6月4日

- Drivechains

	- Drivechain是一个比特币开放式侧链协议,可以根据不同的需求定制不同的侧链。它的设计来自于两个比特币改进提案,BIP 300“哈希率托管”（Hashrate Escrows）通过“Container UTXOs”将3-6个月的交易数据压缩成32字节,BIP 301“联合盲挖”（Blind Merged Mining）。和RSK一样,网络的安全性也通过联合挖矿的方式,由现有的比特币矿工维护。

	- 2022年12月,Drivechain的开发公司Layer2 Labs才宣布完成300万美元的种子轮融资,目前该项目还未发现有大规模的应用

	- [官方介绍](https://www.drivechain.info/)

- [Ark](https://www.odaily.news/post/5187452)

	- [介绍](https://www.arkpill.me/deep-dive)

		- 协议 Ark,这是一种闪电网络的替代方案,允许用户在不引入流动性限制的情况下发送和接收资金。

		- 与闪电网络的相比,Ark 协议没有引入所谓的闪电通道、出站流动性与入站流动性。

	- [作者：比特币开发者 Burak Keceli ](https://twitter.com/brqgoo)

	- [时间：5月22日](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-May/021694.html)




