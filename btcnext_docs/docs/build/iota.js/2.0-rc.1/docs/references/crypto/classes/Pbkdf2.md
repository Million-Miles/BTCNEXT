---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: Pbkdf2

Implementation of the password based key derivation function 2.

## Table of contents

### Methods

- [sha256](Pbkdf2.md#sha256)
- [sha512](Pbkdf2.md#sha512)

### Constructors

- [constructor](Pbkdf2.md#constructor)

## Methods

### sha256

▸ `Static` **sha256**(`password`, `salt`, `iterations`, `keyLength`): `Uint8Array`

Derive a key from the parameters using Sha256.

#### Parameters

| Name         | Type         | Description                          |
| :----------- | :----------- | :----------------------------------- |
| `password`   | `Uint8Array` | The password to derive the key from. |
| `salt`       | `Uint8Array` | The _salt_ for the derivation.         |
| `iterations` | `number`     | Numer of iterations to perform.      |
| `keyLength`  | `number`     | The length of the key to derive.     |

#### Returns

`Uint8Array`

The derived key.

---

### sha512

▸ `Static` **sha512**(`password`, `salt`, `iterations`, `keyLength`): `Uint8Array`

Derive a key from the parameters using Sha512.

#### Parameters

| Name         | Type         | Description                          |
| :----------- | :----------- | :----------------------------------- |
| `password`   | `Uint8Array` | The password to derive the key from. |
| `salt`       | `Uint8Array` | The salt for the derivation.         |
| `iterations` | `number`     | Numer of iterations to perform.      |
| `keyLength`  | `number`     | The length of the key to derive.     |

#### Returns

`Uint8Array`

The derived key.

## Constructors

### constructor

• **new Pbkdf2**()
