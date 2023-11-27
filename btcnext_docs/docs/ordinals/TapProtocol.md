---
id: TapProtocol
title: TapProtocol
sidebar_label: TapProtocol
slug: /ordinals/TapProtocol
---

## 🤠 - 介绍

- TAP 是比特币 Ordinals 的尖端多资产元协议，可直接在比特币区块链上实现更复杂的金融操作，由 Ordinals 生态系统提供支持并从中受益。它的设计比其他代币元协议更加灵活和用户友好，无需辅助层或复杂的机制即可实现代币质押、交换和流动性池等功能。

- 目的：为比特币金融活动（通常称为 OrdFi）打造了一个强大的生态系统.

- 创作者：原ordinals 的索引团队trac.

	- [Trac生态系统介绍](https://medium.com/trac-systems/trac-ecosystem-ff99787585d4)

- 2023年8月

	- [官方github](https://github.com/BennyTheDev/tap-protocol-specs)

	- [官网](https://trac.network/tap.html)

- TAP由外部和内部两部分组成。外部部分的作用与 BRC-20 完全相同。

	- 外部：为了连接到 TAP，市场/钱包克隆其现有的 BRC-20 基础设施。然后必须实现 TAP 的内部功能（见下文），或者必须使用实现这些功能的端点来验证所有余额（余额、可用、可转让）。从那时起，TAP 代币可以像常规 BRC-20 代币一样在其平台上进行交易。索引器进行一些小的修改。

	- 内部，存在一个名为“令牌发送”的新功能，它可以将不同的令牌批量转移给许多接收者。

		- 兑换令牌由当局签署和发放。每个人都可以铭刻铭文代码，何时以及如何发行兑换券完全由管理机构决定。通常情况下，当局会在所有条件都满足时签署并发行兑换。（摘自官方github）

- 资产

	- TAP

		- [治理代币](https://twitter.com/tap_protocol/status/1720936700929536082)

			- 空投资格：需要持有TRAC代币，可前往Unisat获取

			- [该代币将有多个用例，这些用例将在未来几周内公布。其中一些用例位于位图生态系统中。@bitmap](https://twitter.com/blockamoto)

				- [bitmap.land](https://bitmap.land/)

		- [11月8日消息（即将发布）链接](https://twitter.com/tap_protocol/status/1722086871864320036)
