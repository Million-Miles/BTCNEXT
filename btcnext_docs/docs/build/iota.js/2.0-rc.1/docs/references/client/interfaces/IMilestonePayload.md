---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Interface: IMilestonePayload

Milestone payload.

## Hierarchy

- [`ITypeBase`](ITypeBase.md)<`7`\>

  ↳ **`IMilestonePayload`**

## Table of contents

### Properties

- [type](IMilestonePayload.md#type)
- [index](IMilestonePayload.md#index)
- [timestamp](IMilestonePayload.md#timestamp)
- [protocolVersion](IMilestonePayload.md#protocolversion)
- [previousMilestoneId](IMilestonePayload.md#previousmilestoneid)
- [parents](IMilestonePayload.md#parents)
- [inclusionMerkleRoot](IMilestonePayload.md#inclusionmerkleroot)
- [appliedMerkleRoot](IMilestonePayload.md#appliedmerkleroot)
- [metadata](IMilestonePayload.md#metadata)
- [options](IMilestonePayload.md#options)
- [signatures](IMilestonePayload.md#signatures)

## Properties

### type

• **type**: `7`

The type of the object.

#### Inherited from

[ITypeBase](ITypeBase.md).[type](ITypeBase.md#type)

---

### index

• **index**: `number`

The index name.

---

### timestamp

• **timestamp**: `number`

The timestamp of the milestone.

---

### protocolVersion

• **protocolVersion**: `number`

The protocol version.

---

### previousMilestoneId

• **previousMilestoneId**: `string`

The id of the previous milestone.

---

### parents

• **parents**: `string`[]

The parents where this milestone attaches to.

---

### inclusionMerkleRoot

• **inclusionMerkleRoot**: `string`

The Merkle tree hash of all blocks confirmed by this milestone.

---

### appliedMerkleRoot

• **appliedMerkleRoot**: `string`

The Merkle tree hash of all blocks applied by this milestone.

---

### metadata

• `Optional` **metadata**: `string`

The metadata.

---

### options

• `Optional` **options**: [`MilestoneOptionTypes`](../api_ref.md#milestoneoptiontypes)[]

The milestone options.

---

### signatures

• **signatures**: [`IEd25519Signature`](IEd25519Signature.md)[]

The signatures.
