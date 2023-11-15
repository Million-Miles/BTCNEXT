---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Interface: IPeer

Peer details.

## Table of contents

### Properties

- [id](IPeer.md#id)
- [multiAddresses](IPeer.md#multiaddresses)
- [alias](IPeer.md#alias)
- [relation](IPeer.md#relation)
- [connected](IPeer.md#connected)
- [gossip](IPeer.md#gossip)

## Properties

### id

• **id**: `string`

The id of the peer.

---

### multiAddresses

• **multiAddresses**: `string`[]

The addresses of the peer.

---

### alias

• `Optional` **alias**: `string`

The alias of the peer.

---

### relation

• **relation**: `string`

The relation of the peer.

---

### connected

• **connected**: `boolean`

Is it connected.

---

### gossip

• `Optional` **gossip**: `Object`

Gossip metrics for the peer.

#### Type declaration

| Name        | Type                                      | Description         |
| :---------- | :---------------------------------------- | :------------------ |
| `heartbeat` | [`IGossipHeartbeat`](IGossipHeartbeat.md) | The peer heartbeat. |
| `metrics`   | [`IGossipMetrics`](IGossipMetrics.md)     | The peer metrics.   |
