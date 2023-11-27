---
id: Softchains
title: Softchains
sidebar_label: Softchains
slug: /chainsl2/Softchains
---

### [Softchains](https://www.btcstudy.org/2022/07/28/softchains-use-cases-and-security-costs/)

- [是 Ruben Somsen 提出了另一种侧链机制](https://twitter.com/SomsenRuben)

- 日期：2021年1月

- [github](https://gist.github.com/RubenSomsen/7ecf7f13dc2496aa7eed8815a02f13d1)

- Softchain 这个想法基于 Somsen 更早提出的一个叫做 “PoW 欺诈证明” 的提议，这个机制本意是为钱包提升简易支付验证（SPV）的安全性。

- 主链节点必须下载和验证每一个 softchain 侧链的区块头，在出现了链分裂的时候，则需要下载区块并使用 UTXO 集合承诺来验证相关的区块。这就形成了双向锚定机制的基础。
