---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: Base32

Class to help with base32 Encoding/Decoding using RFC4648.

## Table of contents

### Methods

- [decode](Base32.md#decode)
- [encode](Base32.md#encode)

### Constructors

- [constructor](Base32.md#constructor)

## Methods

### decode

▸ `Static` **decode**(`base32`): `Uint8Array`

Convert the base 32 string to a byte array.

**`throws`** If the input string contains a character not in the Base32 alphabet.

#### Parameters

| Name     | Type     | Description                   |
| :------- | :------- | :---------------------------- |
| `base32` | `string` | The base32 string to convert. |

#### Returns

`Uint8Array`

The byte array.

---

### encode

▸ `Static` **encode**(`bytes`): `string`

Convert a byte array to base 32.

#### Parameters

| Name    | Type         | Description                |
| :------ | :----------- | :------------------------- |
| `bytes` | `Uint8Array` | The byte array to convert. |

#### Returns

`string`

The data as base32 string.

## Constructors

### constructor

• **new Base32**()
