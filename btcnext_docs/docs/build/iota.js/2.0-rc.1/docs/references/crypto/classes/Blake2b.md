---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: Blake2b

Class to help with Blake2B Signature scheme.
TypeScript conversion from https://github.com/dcposch/blakejs.

## Table of contents

### Properties

- [SIZE_160](Blake2b.md#size_160)
- [SIZE_256](Blake2b.md#size_256)
- [SIZE_512](Blake2b.md#size_512)

### Constructors

- [constructor](Blake2b.md#constructor)

### Methods

- [sum160](Blake2b.md#sum160)
- [sum256](Blake2b.md#sum256)
- [sum512](Blake2b.md#sum512)
- [update](Blake2b.md#update)
- [final](Blake2b.md#final)

## Properties

### SIZE_160

▪ `Static` **SIZE_160**: `number` = `20`

Blake2b 160.

---

### SIZE_256

▪ `Static` **SIZE_256**: `number` = `32`

Blake2b 256.

---

### SIZE_512

▪ `Static` **SIZE_512**: `number` = `64`

Blake2b 512.

## Constructors

### constructor

• **new Blake2b**(`outlen`, `key?`)

Create a new instance of Blake2b.

#### Parameters

| Name     | Type         | Description                           |
| :------- | :----------- | :------------------------------------ |
| `outlen` | `number`     | Output length between 1 and 64 bytes. |
| `key?`   | `Uint8Array` | Optional key.                         |

## Methods

### sum160

▸ `Static` **sum160**(`data`, `key?`): `Uint8Array`

Perform Sum 160 on the data.

#### Parameters

| Name   | Type         | Description                |
| :----- | :----------- | :------------------------- |
| `data` | `Uint8Array` | The data to operate on.    |
| `key?` | `Uint8Array` | Optional key for the hash. |

#### Returns

`Uint8Array`

The sum 160 of the data.

---

### sum256

▸ `Static` **sum256**(`data`, `key?`): `Uint8Array`

Perform Sum 256 on the data.

#### Parameters

| Name   | Type         | Description                |
| :----- | :----------- | :------------------------- |
| `data` | `Uint8Array` | The data to operate on.    |
| `key?` | `Uint8Array` | Optional key for the hash. |

#### Returns

`Uint8Array`

The sum 256 of the data.

---

### sum512

▸ `Static` **sum512**(`data`, `key?`): `Uint8Array`

Perform Sum 512 on the data.

#### Parameters

| Name   | Type         | Description                |
| :----- | :----------- | :------------------------- |
| `data` | `Uint8Array` | The data to operate on.    |
| `key?` | `Uint8Array` | Optional key for the hash. |

#### Returns

`Uint8Array`

The sum 512 of the data.

---

### update

▸ **update**(`input`): `void`

Updates a BLAKE2b streaming hash.

#### Parameters

| Name    | Type         | Description       |
| :------ | :----------- | :---------------- |
| `input` | `Uint8Array` | The data to hash. |

#### Returns

`void`

---

### final

▸ **final**(): `Uint8Array`

Completes a BLAKE2b streaming hash.

#### Returns

`Uint8Array`

The final data.
