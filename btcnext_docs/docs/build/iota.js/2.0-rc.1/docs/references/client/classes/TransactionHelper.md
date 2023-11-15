---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Class: TransactionHelper

Helper methods for Transactions.

## Table of contents

### Properties

- [CONFIRMED_MILESTONE_INDEX_LENGTH](TransactionHelper.md#confirmed_milestone_index_length)
- [CONFIRMED_UINIX_TIMESTAMP_LENGTH](TransactionHelper.md#confirmed_uinix_timestamp_length)
- [OUTPUT_ID_LENGTH](TransactionHelper.md#output_id_length)

### Methods

- [calculateBlockId](TransactionHelper.md#calculateblockid)
- [outputIdFromTransactionData](TransactionHelper.md#outputidfromtransactiondata)
- [getTransactionEssenceHash](TransactionHelper.md#gettransactionessencehash)
- [getTransactionPayloadHash](TransactionHelper.md#gettransactionpayloadhash)
- [inputFromOutputId](TransactionHelper.md#inputfromoutputid)
- [getInputsCommitment](TransactionHelper.md#getinputscommitment)
- [getStorageDeposit](TransactionHelper.md#getstoragedeposit)
- [resolveIdFromOutputId](TransactionHelper.md#resolveidfromoutputid)
- [constructTokenId](TransactionHelper.md#constructtokenid)
- [networkIdFromNetworkName](TransactionHelper.md#networkidfromnetworkname)

### Constructors

- [constructor](TransactionHelper.md#constructor)

## Properties

### CONFIRMED_MILESTONE_INDEX_LENGTH

▪ `Static` **CONFIRMED_MILESTONE_INDEX_LENGTH**: `number` = `4`

The confirmed milestone index length.

---

### CONFIRMED_UINIX_TIMESTAMP_LENGTH

▪ `Static` **CONFIRMED_UINIX_TIMESTAMP_LENGTH**: `number` = `4`

The confirmed unix timestamp length.

---

### OUTPUT_ID_LENGTH

▪ `Static` **OUTPUT_ID_LENGTH**: `number` = `34`

The output Id length.

## Methods

### calculateBlockId

▸ `Static` **calculateBlockId**(`block`): `string`

Calculate blockId from a block.

#### Parameters

| Name    | Type                                | Description |
| :------ | :---------------------------------- | :---------- |
| `block` | [`IBlock`](../interfaces/IBlock.md) | The block.  |

#### Returns

`string`

The blockId.

---

### outputIdFromTransactionData

▸ `Static` **outputIdFromTransactionData**(`transactionId`, `outputIndex`): `string`

Returns the outputId from transation id and output index.

#### Parameters

| Name            | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `transactionId` | `string` | The id of the transaction. |
| `outputIndex`   | `number` | The index of the output.   |

#### Returns

`string`

The output id.

---

### getTransactionEssenceHash

▸ `Static` **getTransactionEssenceHash**(`essence`): `Uint8Array`

Calculate the Transaction Essence hash.

#### Parameters

| Name      | Type                                                          | Description              |
| :-------- | :------------------------------------------------------------ | :----------------------- |
| `essence` | [`ITransactionEssence`](../interfaces/ITransactionEssence.md) | The transaction essence. |

#### Returns

`Uint8Array`

The transaction essence hash.

---

### getTransactionPayloadHash

▸ `Static` **getTransactionPayloadHash**(`transactionPayload`): `Uint8Array`

Calculate the Transaction hash.

#### Parameters

| Name                 | Type                                                          | Description                     |
| :------------------- | :------------------------------------------------------------ | :------------------------------ |
| `transactionPayload` | [`ITransactionPayload`](../interfaces/ITransactionPayload.md) | The payload of the transaction. |

#### Returns

`Uint8Array`

The transaction hash.

---

### inputFromOutputId

▸ `Static` **inputFromOutputId**(`outputId`): [`IUTXOInput`](../interfaces/IUTXOInput.md)

Calculate the UTXO input from an output Id.

#### Parameters

| Name       | Type     | Description           |
| :--------- | :------- | :-------------------- |
| `outputId` | `string` | The id of the output. |

#### Returns

[`IUTXOInput`](../interfaces/IUTXOInput.md)

The UTXO Input.

---

### getInputsCommitment

▸ `Static` **getInputsCommitment**(`inputs`): `string`

Calculate the inputCommitment from the output objects that are used as inputs to fund the transaction.

#### Parameters

| Name     | Type                                         | Description                                            |
| :------- | :------------------------------------------- | :----------------------------------------------------- |
| `inputs` | [`OutputTypes`](../api_ref.md#outputtypes)[] | The output objects used as inputs for the transaction. |

#### Returns

`string`

The inputs commitment.

---

### getStorageDeposit

▸ `Static` **getStorageDeposit**(`output`, `rentStructure`): `number`

Calculates the required storage deposit of an output.

#### Parameters

| Name            | Type                                       | Description                                     |
| :-------------- | :----------------------------------------- | :---------------------------------------------- |
| `output`        | [`OutputTypes`](../api_ref.md#outputtypes) | The output.                                     |
| `rentStructure` | [`IRent`](../interfaces/IRent.md)          | Rent cost of objects which take node resources. |

#### Returns

`number`

The required storage deposit.

---

### resolveIdFromOutputId

▸ `Static` **resolveIdFromOutputId**(`outputId`): `string`

Returns the nftId/aliasId from an outputId.
NftId/aliasId is Blake2b-256 hash of the outputId that created it.

#### Parameters

| Name       | Type     | Description           |
| :--------- | :------- | :-------------------- |
| `outputId` | `string` | The id of the output. |

#### Returns

`string`

The resolved Nft id or Alias id.

---

### constructTokenId

▸ `Static` **constructTokenId**(`aliasId`, `serialNumber`, `tokenSchemeType`): `string`

Constructs a tokenId from the aliasId, serial number and token scheme type.

#### Parameters

| Name              | Type     | Description                                          |
| :---------------- | :------- | :--------------------------------------------------- |
| `aliasId`         | `string` | The alias Id of the alias that controls the foundry. |
| `serialNumber`    | `number` | The serial number of the foundry.                    |
| `tokenSchemeType` | `number` | The tokenSchemeType of the foundry.                  |

#### Returns

`string`

The tokenId.

---

### networkIdFromNetworkName

▸ `Static` **networkIdFromNetworkName**(`networkName`): `string`

Calculates the networkId value from the network name.

#### Parameters

| Name          | Type     | Description              |
| :------------ | :------- | :----------------------- |
| `networkName` | `string` | The name of the network. |

#### Returns

`string`

The networkId.

## Constructors

### constructor

• **new TransactionHelper**()
