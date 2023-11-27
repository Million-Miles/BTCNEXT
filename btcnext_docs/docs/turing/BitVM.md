---
id: BitVM
title: BitVM
sidebar_label: BitVM
slug: /turing/BitVM
---

- 介绍

	- 它是“比特币虚拟机 Bitcoin Virtual Machine ”的缩写。在允许开发者模拟程序行为的同时,无需对实际的比特币网络施加任何负载或更改。

	- [BitVM是一种新的optimistic rollup + fraud proof + Taproot Leaf + Bitcoin Script计算范式。](https://twitter.com/robin_linus)

		- Optimistic Rollup 是以太坊的一个第二层扩容解决方案,旨在增加其交易吞吐量。它通过将多个链下交易“卷积”或批量处理成单一交易然后提交到以太坊主网来实现这一目标。

		- Fraud Proofs 在各种区块链扩容解决方案中使用,例如Optimistic Rollups,以确保交易的完整性。它们是一种加密证明形式,允许任何人挑战交易的有效性。如果交易是欺诈的,用户可以向网络提交欺诈证明。

		- Taproot 是比特币网络最近的一个升级,它提高了隐私性和效率。Taproot Leaf 与Merkelized Abstract Syntax Trees（MAST,默克尔抽象语法树）的概念有关,这是Taproot升级的一部分

		- Bitcoin Script 是比特币区块链使用的脚本语言。它是一种简单的基于堆栈的语言,用于定义比特币可以在什么条件下被花费。

	- [由ZeroSync的Robin Linus设计；白皮书地址](https://bitvm.org/bitvm.pdf)

- 发布日期：10月9日


- 图灵机是由阿兰·图灵在1936年提出的抽象计算模型,用以定义什么是可计算的

- 图灵完备性（Turing Completeness）是一个与计算理论相关的概念。一个计算系统如果是图灵完备的,意味着它能够模拟任何图灵机的计算过程。换句话说,这样的系统能执行包括条件分支和循环等操作的任何算法,只要有足够的时间和存储空间。

- 比特币区块链本身并不是图灵完备的。可以防止在比特币网络上运行恶意代码或造成无限循环,可能会威胁网络的安全和稳定性。

