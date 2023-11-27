---
id: TaprootAssets
title: TaprootAssets
sidebar_label: TaprootAssets
slug: /ligtning/TaprootAssets
---

### [TaprootAssets(Taro)](https://terminal.lightning.engineering/assets/)

#### 介绍

特点

一种新的 Taproot 支持的协议，它允许用户在比特币区块链上创建资产，然后通过闪电网络发送，以最小的成本进行快速，大量的交易。
它既可以用来发行同质化的资产（比如稳定币），也可以发行非同质化的、独一无二的代币（比如 NFT，或者说收藏品）

通过 Taproot Assets 协议发行的资产（根据 BSD-2-Clause 许可证发布）保存在比特币 UTXOs（未花费的交易输出）中，并作为常规比特币交易的一部分进行转移。并且还可以随时销毁资产。

Taproot Assets 不利用 Bitcoin 作为数据有效性的层 。这与 Ordinals、BRC-20、Runes、PIPE 等不同。用户默认存储自己的数据，或者您可以通过链外数据存储（称为 Universe）添加额外的信任假设。

拓展性：它能与 Bitcoin 原生技术（如 RGB、Lightning 和 DLC 等）很好地集成。

边缘流动性：只要双方就汇率达成一致，Taproot 资产通道的某些闪电网络节点可能愿意将其价值交换为 BTC 并返回。从而允许您使用您的 Taproot 资产来支付任何闪电网络发票或接收任何资产通过开具标准闪电发票。

发布时间:10 月 19 日

#### 不足

一是必须依赖第三方的存储索引器，离开了存储索引器这些 Token 即将永远地丢失，因此用户要么自己运行一个 BTC 的全节点和 Taproot Assets 客户端，要么完全依赖一个中心化的服务器交易 Taproot Assets Token，这可能是目前 BTC Token 协议中最中心化的方案。

二是用户不能直接在 BTC 主网中发送交易自助地铸造 Token，而是有一个项目方地址一次性发行(或者叫注册)所有的 Token，然后再由项目方转入闪电网络进行分发。依赖机构背书和发行运维，项目创建者控制整个资产发行过程。

[官方文档介绍](https://docs.lightning.engineering/the-lightning-network/taproot-assets/faq)

#### 资产

	NFT
	Taproot Dragons 1
    3563个
    Universe同步量：15,900,034
	创建时间：Oct 20, 2023 5:24 AM

	cyberpunk
	3,061个
	Universe同步量：19,168,133
    Oct 20, 2023 1:26 AM

	Lightning Goose
    7,009个
    Universe同步量：21,448,274
    创建时间：Oct 26, 2023 11:53 AM

    token
	TAPROOT
	2,100,000,000,000（2.1万亿）
    Universe同步量：349
    创建时间：Oct 19, 2023 2:18 AM

[查询网站：mempool（原始资产在比特币网络）](https://mempool.space/address/bc1qzjpyv8e22e4tl6yh37t3p55rrkngs2f22deczp)

## Nostr

介绍

Nostr（Notes and Other Stuff Transmitted by Relays）是一款简洁、开源的去中心化社交协议。

Nostr由两个组件构成：客户端和中继器。每个用户运行一个客户端。任何人都可以运行中继器。

用户通过公钥识别。每则信息都会被签名。验证签名由每一个客户端来完成。

客户端通过所连接的中继器来读取或者发送信息。中继器之间并不通信，他们只和客户端通信。
[重要相关人：Jack Dorsey，推特创始人，投资14个比特币](https://twitter.com/jack)

[核心开发者（Core）：William Casarin](https://twitter.com/jb55)

### NostrAssets 

NostrAssets 是一个开源的去中心化协议，旨在将 Taproot Assets 资产和比特币无缝整合到 Nostr 生态系统中。

通过 NostrAsset 网页客户端或其他 Nostr 上的去中心化社交消息应用传输 Taproot Assets：无 Gas 费

通过【不给糖就捣蛋】活动空投TRICK or TREAT 资产。由 NostrAssets 创建。

发布测试代币时间：2023年万圣节期间

[官网](https://mainnet.nostrassets.com/#/account)

[推特](https://twitter.com/nostrassets)

Nostr即将发布的token mint功能

  - 代币部署：类似eth上部署合约代币一样，设置代币名字，symbol，总量，进度，还有头像，以及其他社交信息 。

  - 开启mint：这一步有点像eth上的组池子，需要设置多少的币放在这个mint池里（意味着部署者可以自己留一部分用来砸盘），设置share张数（用投入的币量除以share数应该就是每张多少币），然后设置单地址能打多少share，然后设置用户mint的时候需要向部署者支付多少费用（这其实和买币就没区别了）

  - 用户参与mint：这里可以看见能选择要打多少share（张数）,然后可以看见总共能mint多少币，上限是多少share以及需要支付的费用。


