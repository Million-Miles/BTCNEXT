---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: Bech32

Class to help with Bech32 encoding/decoding.
Based on reference implementation https://github.com/sipa/bech32/blob/master/ref/javascript/bech32.js.

## Table of contents

### Methods

- [encode](Bech32.md#encode)
- [encode5BitArray](Bech32.md#encode5bitarray)
- [decode](Bech32.md#decode)
- [decodeTo5BitArray](Bech32.md#decodeto5bitarray)
- [to5Bit](Bech32.md#to5bit)
- [from5Bit](Bech32.md#from5bit)
- [matches](Bech32.md#matches)

### Constructors

- [constructor](Bech32.md#constructor)

## Methods

### encode

▸ `Static` **encode**(`humanReadablePart`, `data`): `string`

Encode the buffer.

#### Parameters

| Name                | Type         | Description         |
| :------------------ | :----------- | :------------------ |
| `humanReadablePart` | `string`     | The header.         |
| `data`              | `Uint8Array` | The data to encode. |

#### Returns

`string`

The encoded data.

---

### encode5BitArray

▸ `Static` **encode5BitArray**(`humanReadablePart`, `data5Bit`): `string`

Encode the 5 bit data buffer.

#### Parameters

| Name                | Type         | Description         |
| :------------------ | :----------- | :------------------ |
| `humanReadablePart` | `string`     | The header.         |
| `data5Bit`          | `Uint8Array` | The data to encode. |

#### Returns

`string`

The encoded data.

---

### decode

▸ `Static` **decode**(`bech`): `undefined` \| {}

Decode a bech32 string.

#### Parameters

| Name   | Type     | Description         |
| :----- | :------- | :------------------ |
| `bech` | `string` | The text to decode. |

#### Returns

`undefined` \| {}

The decoded data or undefined if it could not be decoded.

---

### decodeTo5BitArray

▸ `Static` **decodeTo5BitArray**(`bech`): `undefined` \| {}

Decode a bech32 string to 5 bit array.

#### Parameters

| Name   | Type     | Description         |
| :----- | :------- | :------------------ |
| `bech` | `string` | The text to decode. |

#### Returns

`undefined` \| {}

The decoded data or undefined if it could not be decoded.

---

### to5Bit

▸ `Static` **to5Bit**(`bytes`): `Uint8Array`

Convert the input bytes into 5 bit data.

#### Parameters

| Name    | Type         | Description           |
| :------ | :----------- | :-------------------- |
| `bytes` | `Uint8Array` | The bytes to convert. |

#### Returns

`Uint8Array`

The data in 5 bit form.

---

### from5Bit

▸ `Static` **from5Bit**(`fiveBit`): `Uint8Array`

Convert the 5 bit data to 8 bit.

#### Parameters

| Name      | Type         | Description                |
| :-------- | :----------- | :------------------------- |
| `fiveBit` | `Uint8Array` | The 5 bit data to convert. |

#### Returns

`Uint8Array`

The 5 bit data converted to 8 bit.

---

### matches

▸ `Static` **matches**(`humanReadablePart`, `bech32Text?`): `boolean`

Does the given string match the bech32 pattern.

#### Parameters

| Name                | Type     | Description              |
| :------------------ | :------- | :----------------------- |
| `humanReadablePart` | `string` | The human readable part. |
| `bech32Text?`       | `string` | The text to test.        |

#### Returns

`boolean`

True if this is potentially a match.

## Constructors

### constructor

• **new Bech32**()
