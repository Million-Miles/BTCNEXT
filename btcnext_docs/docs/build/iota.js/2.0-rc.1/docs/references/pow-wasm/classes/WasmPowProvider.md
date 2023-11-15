---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: WasmPowProvider

Wasm POW Provider.

## Implements

- `IPowProvider`

## Table of contents

### Constructors

- [constructor](WasmPowProvider.md#constructor)

### Methods

- [pow](WasmPowProvider.md#pow)

## Constructors

### constructor

• **new WasmPowProvider**(`numCpus?`)

Create a new instance of NodePowProvider.

#### Parameters

| Name       | Type     | Description                               |
| :--------- | :------- | :---------------------------------------- |
| `numCpus?` | `number` | The number of cpus, defaults to max CPUs. |

## Methods

### pow

▸ **pow**(`message`, `targetScore`): `Promise`<`string`\>

Perform pow on the message and return the nonce of at least targetScore.

#### Parameters

| Name          | Type         | Description             |
| :------------ | :----------- | :---------------------- |
| `message`     | `Uint8Array` | The message to process. |
| `targetScore` | `number`     | The target score.       |

#### Returns

`Promise`<`string`\>

The nonce.

#### Implementation of

IPowProvider.pow
