---
id: BRC20
title: 介绍
sidebar_label: 介绍
slug: /ordinals/BRC20/BRC20
---

### BRC-20

- [介绍](https://www.infoq.cn/article/by8li3cbb1vmqzo6kbvg)

	- BRC-20 是比特币网络上一个同质化代币的发行标准，规定了代币的名称、发行、转账等一系列功能

	- BRC20 整个建立在基于区块交易排序的 “先到先得” 原则上，原理是在比特币交易的见证数据（witness）中写入任意文件。然而这个过程节点是能够修剪或消除见证数据的，而且并非所有节点都必须保留或传播见证数据

	- BRC20 的输出脚本中只存储了数据，无法真的运行 Token 的功能如转账、铸造，因此我们必须借助第三方排序器，在 BTC 链下记录账本，并为脚本刻入新的状态数据。

	- 第三方排序器就变成了系统的薄弱点，BRC20 的转账不在 BTC 主链上执行，必须被拆成两步 BTC 交易执行(即在排序器中先归集再进行转账)，额外的复杂度让它产生了大量垃圾交易，结果就是 UTXO 集的膨胀。

	- [作者 domodata](https://twitter.com/domodata)

- 工具网站

	- [交易所Unisat](https://unisat.io/brc20)

		- [Ordinals wallet](https://ordinalswallet.com/)

		- [Ordinal Inscriptions浏览器](https://www.ord.io/)

	- [BRC-20的数据统计平台](https://ordspace.org/)

		- [BRC-20 领域的CoinMarketCap平台](https://www.brc-20.io/)

	-  NFT 的买卖和铸造

		- [Magic Eden](https://magiceden.io/)

		- [Ordinals Market](https://ordinals.market/)

	- [搜索比特币sats、查看Inscriptions及Collections:Ordiscan](https://ordiscan.com/)

