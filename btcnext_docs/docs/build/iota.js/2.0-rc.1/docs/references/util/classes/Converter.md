---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: Converter

Convert arrays to and from different formats.

## Table of contents

### Methods

- [bytesToUtf8](Converter.md#bytestoutf8)
- [utf8ToBytes](Converter.md#utf8tobytes)
- [bytesToHex](Converter.md#bytestohex)
- [hexToBytes](Converter.md#hextobytes)
- [utf8ToHex](Converter.md#utf8tohex)
- [hexToUtf8](Converter.md#hextoutf8)
- [isHex](Converter.md#ishex)
- [bytesToBinary](Converter.md#bytestobinary)
- [binaryToBytes](Converter.md#binarytobytes)
- [bytesToBase64](Converter.md#bytestobase64)
- [base64ToBytes](Converter.md#base64tobytes)

### Constructors

- [constructor](Converter.md#constructor)

## Methods

### bytesToUtf8

▸ `Static` **bytesToUtf8**(`array`, `startIndex?`, `length?`): `string`

Encode a raw array to UTF8 string.

#### Parameters

| Name          | Type                   | Description                      |
| :------------ | :--------------------- | :------------------------------- |
| `array`       | `ArrayLike`<`number`\> | The bytes to encode.             |
| `startIndex?` | `number`               | The index to start in the bytes. |
| `length?`     | `number`               | The length of bytes to read.     |

#### Returns

`string`

The array formated as UTF8.

---

### utf8ToBytes

▸ `Static` **utf8ToBytes**(`utf8`): `Uint8Array`

Convert a UTF8 string to raw array.

#### Parameters

| Name   | Type     | Description         |
| :----- | :------- | :------------------ |
| `utf8` | `string` | The text to decode. |

#### Returns

`Uint8Array`

The array.

---

### bytesToHex

▸ `Static` **bytesToHex**(`array`, `includePrefix?`, `startIndex?`, `length?`, `reverse?`): `string`

Encode a raw array to hex string.

#### Parameters

| Name            | Type                   | Default value | Description                                |
| :-------------- | :--------------------- | :------------ | :----------------------------------------- |
| `array`         | `ArrayLike`<`number`\> | `undefined`   | The bytes to encode.                       |
| `includePrefix` | `boolean`              | `false`       | Include the 0x prefix on the returned hex. |
| `startIndex?`   | `number`               | `undefined`   | The index to start in the bytes.           |
| `length?`       | `number`               | `undefined`   | The length of bytes to read.               |
| `reverse?`      | `boolean`              | `undefined`   | Reverse the combine direction.             |

#### Returns

`string`

The array formated as hex.

---

### hexToBytes

▸ `Static` **hexToBytes**(`hex`, `reverse?`): `Uint8Array`

Decode a hex string to raw array.

#### Parameters

| Name       | Type      | Description                      |
| :--------- | :-------- | :------------------------------- |
| `hex`      | `string`  | The hex to decode.               |
| `reverse?` | `boolean` | Store the characters in reverse. |

#### Returns

`Uint8Array`

The array.

---

### utf8ToHex

▸ `Static` **utf8ToHex**(`utf8`, `includePrefix?`): `string`

Convert the UTF8 to hex.

#### Parameters

| Name            | Type      | Default value | Description                                |
| :-------------- | :-------- | :------------ | :----------------------------------------- |
| `utf8`          | `string`  | `undefined`   | The text to convert.                       |
| `includePrefix` | `boolean` | `false`       | Include the 0x prefix on the returned hex. |

#### Returns

`string`

The hex version of the bytes.

---

### hexToUtf8

▸ `Static` **hexToUtf8**(`hex`): `string`

Convert the hex text to text.

#### Parameters

| Name  | Type     | Description         |
| :---- | :------- | :------------------ |
| `hex` | `string` | The hex to convert. |

#### Returns

`string`

The UTF8 version of the bytes.

---

### isHex

▸ `Static` **isHex**(`value`, `allowPrefix?`): `boolean`

Is the data hex format.

#### Parameters

| Name          | Type      | Default value | Description                          |
| :------------ | :-------- | :------------ | :----------------------------------- |
| `value`       | `string`  | `undefined`   | The value to test.                   |
| `allowPrefix` | `boolean` | `false`       | Allow the hex to have the 0x prefix. |

#### Returns

`boolean`

True if the string is hex.

---

### bytesToBinary

▸ `Static` **bytesToBinary**(`bytes`): `string`

Convert bytes to binary string.

#### Parameters

| Name    | Type         | Description           |
| :------ | :----------- | :-------------------- |
| `bytes` | `Uint8Array` | The bytes to convert. |

#### Returns

`string`

A binary string of the bytes.

---

### binaryToBytes

▸ `Static` **binaryToBytes**(`binary`): `Uint8Array`

Convert a binary string to bytes.

#### Parameters

| Name     | Type     | Description        |
| :------- | :------- | :----------------- |
| `binary` | `string` | The binary string. |

#### Returns

`Uint8Array`

The bytes.

---

### bytesToBase64

▸ `Static` **bytesToBase64**(`bytes`): `string`

Convert bytes to base64 string.

#### Parameters

| Name    | Type         | Description           |
| :------ | :----------- | :-------------------- |
| `bytes` | `Uint8Array` | The bytes to convert. |

#### Returns

`string`

A base64 string of the bytes.

---

### base64ToBytes

▸ `Static` **base64ToBytes**(`base64`): `Uint8Array`

Convert a base64 string to bytes.

#### Parameters

| Name     | Type     | Description        |
| :------- | :------- | :----------------- |
| `base64` | `string` | The base64 string. |

#### Returns

`Uint8Array`

The bytes.

## Constructors

### constructor

• **new Converter**()
