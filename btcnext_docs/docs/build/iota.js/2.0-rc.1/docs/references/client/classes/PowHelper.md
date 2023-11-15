---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: PowHelper

Helper methods for POW.

## Table of contents

### Properties

- [LN3](PowHelper.md#ln3)

### Methods

- [score](PowHelper.md#score)
- [calculateTargetZeros](PowHelper.md#calculatetargetzeros)
- [trailingZeros](PowHelper.md#trailingzeros)
- [trinaryTrailingZeros](PowHelper.md#trinarytrailingzeros)
- [performPow](PowHelper.md#performpow)

## Properties

### LN3

▪ `Static` `Readonly` **LN3**: `number` = `1.0986122886681098`

LN3 Const see https://oeis.org/A002391.
1.098612288668109691395245236922525704647490557822749451734694333 .

## Methods

### score

▸ `Static` **score**(`block`): `number`

Perform the score calculation.

#### Parameters

| Name    | Type         | Description                       |
| :------ | :----------- | :-------------------------------- |
| `block` | `Uint8Array` | The data to perform the score on. |

#### Returns

`number`

The score for the data.

---

### calculateTargetZeros

▸ `Static` **calculateTargetZeros**(`block`, `targetScore`): `number`

Calculate the number of zeros required to get target score.

#### Parameters

| Name          | Type         | Description           |
| :------------ | :----------- | :-------------------- |
| `block`       | `Uint8Array` | The block to process. |
| `targetScore` | `number`     | The target score.     |

#### Returns

`number`

The number of zeros to find.

---

### trailingZeros

▸ `Static` **trailingZeros**(`powDigest`, `nonce`): `number`

Calculate the trailing zeros.

#### Parameters

| Name        | Type         | Description     |
| :---------- | :----------- | :-------------- |
| `powDigest` | `Uint8Array` | The pow digest. |
| `nonce`     | `BigInteger` | The nonce.      |

#### Returns

`number`

The trailing zeros.

---

### trinaryTrailingZeros

▸ `Static` **trinaryTrailingZeros**(`trits`, `endPos?`): `number`

Find the number of trailing zeros.

#### Parameters

| Name     | Type        | Default value  | Description                                  |
| :------- | :---------- | :------------- | :------------------------------------------- |
| `trits`  | `Int8Array` | `undefined`    | The trits to look for zeros.                 |
| `endPos` | `number`    | `trits.length` | The end position to start looking for zeros. |

#### Returns

`number`

The number of trailing zeros.

---

### performPow

▸ `Static` **performPow**(`powDigest`, `targetZeros`, `startIndex`): `string`

Perform the hash on the data until we reach target number of zeros.

#### Parameters

| Name          | Type         | Description                      |
| :------------ | :----------- | :------------------------------- |
| `powDigest`   | `Uint8Array` | The pow digest.                  |
| `targetZeros` | `number`     | The target number of zeros.      |
| `startIndex`  | `string`     | The index to start looking from. |

#### Returns

`string`

The nonce.
