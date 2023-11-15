<a id="iota_client"></a>

# iota_client

<a id="iota_client._utils"></a>

# iota_client.\_utils

<a id="iota_client._utils.Utils"></a>

## Utils Objects

```python
class Utils(BaseAPI)
```

<a id="iota_client._utils.Utils.bech32_to_hex"></a>

#### bech32_to_hex

```python
def bech32_to_hex(bech32)
```

Transforms bech32 to hex.

<a id="iota_client._utils.Utils.hex_to_bech32"></a>

#### hex_to_bech32

```python
def hex_to_bech32(hex, bech32_hrp)
```

Transforms a hex encoded address to a bech32 encoded address.

<a id="iota_client._utils.Utils.alias_id_to_bech32"></a>

#### alias_id_to_bech32

```python
def alias_id_to_bech32(alias_id, bech32_hrp)
```

Transforms an alias id to a bech32 encoded address.

<a id="iota_client._utils.Utils.nft_id_to_bech32"></a>

#### nft_id_to_bech32

```python
def nft_id_to_bech32(nft_id, bech32_hrp)
```

Transforms an nft id to a bech32 encoded address.

<a id="iota_client._utils.Utils.hex_public_key_to_bech32_address"></a>

#### hex_public_key_to_bech32_address

```python
def hex_public_key_to_bech32_address(hex, bech32_hrp=None)
```

Transforms a hex encoded public key to a bech32 encoded address.

<a id="iota_client._utils.Utils.parse_bech32_address"></a>

#### parse_bech32_address

```python
def parse_bech32_address(address)
```

Returns a valid Address parsed from a String.

<a id="iota_client._utils.Utils.is_address_valid"></a>

#### is_address_valid

```python
def is_address_valid(address)
```

Checks if a String is a valid bech32 encoded address.

<a id="iota_client._utils.Utils.generate_mnemonic"></a>

#### generate_mnemonic

```python
def generate_mnemonic()
```

Generates a new mnemonic.

<a id="iota_client._utils.Utils.mnemonic_to_hex_seed"></a>

#### mnemonic_to_hex_seed

```python
def mnemonic_to_hex_seed(mnemonic)
```

Returns a hex encoded seed for a mnemonic.

<a id="iota_client._utils.Utils.compute_alias_id"></a>

#### compute_alias_id

```python
def compute_alias_id(output_id)
```

Computes the alias id for the given alias output id.

<a id="iota_client._utils.Utils.compute_nft_id"></a>

#### compute_nft_id

```python
def compute_nft_id(output_id)
```

Computes the NFT id for the given NFT output id.

<a id="iota_client._utils.Utils.compute_foundry_id"></a>

#### compute_foundry_id

```python
def compute_foundry_id(alias_address, serial_number, token_scheme_kind)
```

Computes the foundry id.

<a id="iota_client._utils.Utils.block_id"></a>

#### block_id

```python
def block_id(block)
```

Returns a block ID (Blake2b256 hash of block bytes) from a block.

<a id="iota_client.secret_manager"></a>

# iota_client.secret_manager

<a id="iota_client.secret_manager.LedgerNanoSecretManager"></a>

## LedgerNanoSecretManager Objects

```python
class LedgerNanoSecretManager(dict)
```

Secret manager that uses a Ledger Nano hardware wallet or Speculos simulator.

<a id="iota_client.secret_manager.LedgerNanoSecretManager.__init__"></a>

#### \_\_init\_\_

```python
def __init__(is_simulator)
```

Initialize a ledger nano secret manager.

<a id="iota_client.secret_manager.MnemonicSecretManager"></a>

## MnemonicSecretManager Objects

```python
class MnemonicSecretManager(dict)
```

Secret manager that uses a mnemonic in plain memory. It's not recommended for production use. Use LedgerNano or Stronghold instead.

<a id="iota_client.secret_manager.MnemonicSecretManager.__init__"></a>

#### \_\_init\_\_

```python
def __init__(mnemonic)
```

Initialize a mnemonic secret manager.

<a id="iota_client.secret_manager.StrongholdSecretManager"></a>

## StrongholdSecretManager Objects

```python
class StrongholdSecretManager(dict)
```

Secret manager that uses Stronghold.

<a id="iota_client.secret_manager.StrongholdSecretManager.__init__"></a>

#### \_\_init\_\_

```python
def __init__(snapshot_path, password)
```

Initialize a stronghold secret manager.

<a id="iota_client.client"></a>

# iota_client.client

<a id="iota_client.client.IotaClient"></a>

## IotaClient Objects

```python
class IotaClient(NodeCoreAPI, NodeIndexerAPI, HighLevelAPI, Utils)
```

<a id="iota_client.client.IotaClient.__init__"></a>

#### \_\_init\_\_

```python
def __init__(client_config=None)
```

Initialize the IOTA Client.

<a id="iota_client.client.IotaClient.build_alias_output"></a>

#### build_alias_output

```python
def build_alias_output(alias_id,
                       unlock_conditions,
                       amount=None,
                       native_tokens=None,
                       state_index=None,
                       state_metadata=None,
                       foundry_counter=None,
                       features=None,
                       immutable_features=None)
```

Build an AliasOutput.

<a id="iota_client.client.IotaClient.build_basic_output"></a>

#### build_basic_output

```python
def build_basic_output(unlock_conditions,
                       amount=None,
                       native_tokens=None,
                       features=None)
```

Build a BasicOutput.

<a id="iota_client.client.IotaClient.build_foundry_output"></a>

#### build_foundry_output

```python
def build_foundry_output(serial_number,
                         token_scheme,
                         unlock_conditions,
                         amount=None,
                         native_tokens=None,
                         features=None,
                         immutable_features=None)
```

Build a FoundryOutput.

<a id="iota_client.client.IotaClient.build_nft_output"></a>

#### build_nft_output

```python
def build_nft_output(nft_id,
                     unlock_conditions,
                     amount=None,
                     native_tokens=None,
                     features=None,
                     immutable_features=None)
```

Build an NftOutput.

<a id="iota_client.client.IotaClient.generate_addresses"></a>

#### generate_addresses

```python
def generate_addresses(secret_manager, options)
```

Generate addresses.

<a id="iota_client.client.IotaClient.build_and_post_block"></a>

#### build_and_post_block

```python
def build_and_post_block(secret_manager=None, options=None)
```

Build and post a block.

<a id="iota_client.client.IotaClient.get_node"></a>

#### get_node

```python
def get_node()
```

Get a node candidate from the healthy node pool.

<a id="iota_client.client.IotaClient.get_network_info"></a>

#### get_network_info

```python
def get_network_info()
```

Gets the network related information such as network_id and min_pow_score.

<a id="iota_client.client.IotaClient.get_network_id"></a>

#### get_network_id

```python
def get_network_id()
```

Gets the network id of the node we're connecting to.

<a id="iota_client.client.IotaClient.get_bech32_hrp"></a>

#### get_bech32_hrp

```python
def get_bech32_hrp()
```

Returns the bech32_hrp.

<a id="iota_client.client.IotaClient.get_min_pow_score"></a>

#### get_min_pow_score

```python
def get_min_pow_score()
```

Returns the min pow score.

<a id="iota_client.client.IotaClient.get_tips_interval"></a>

#### get_tips_interval

```python
def get_tips_interval()
```

Returns the tips interval.

<a id="iota_client.client.IotaClient.get_local_pow"></a>

#### get_local_pow

```python
def get_local_pow()
```

Returns if local pow should be used or not.

<a id="iota_client.client.IotaClient.get_fall_back_to_local_pow"></a>

#### get_fall_back_to_local_pow

```python
def get_fall_back_to_local_pow()
```

Get fallback to local proof of work timeout.

<a id="iota_client.client.IotaClient.unhealthy_nodes"></a>

#### unhealthy_nodes

```python
def unhealthy_nodes()
```

Returns the unhealthy nodes.

<a id="iota_client.client.IotaClient.get_ledger_nano_status"></a>

#### get_ledger_nano_status

```python
def get_ledger_nano_status(is_simulator)
```

Returns the Ledger Status.

<a id="iota_client.client.IotaClient.prepare_transaction"></a>

#### prepare_transaction

```python
def prepare_transaction(secret_manager=None, options=None)
```

Prepare a transaction for signing.

<a id="iota_client.client.IotaClient.sign_transaction"></a>

#### sign_transaction

```python
def sign_transaction(secret_manager, prepared_transaction_data)
```

Sign a transaction.

<a id="iota_client.client.IotaClient.store_mnemonic"></a>

#### store_mnemonic

```python
def store_mnemonic(secret_manager, mnemonic)
```

Store a mnemonic in the Stronghold vault.

<a id="iota_client.client.IotaClient.submit_payload"></a>

#### submit_payload

```python
def submit_payload(payload_dto)
```

Submit a payload in a block.

<a id="iota_client._high_level_api"></a>

# iota_client.\_high_level_api

<a id="iota_client._high_level_api.HighLevelAPI"></a>

## HighLevelAPI Objects

```python
class HighLevelAPI(BaseAPI)
```

<a id="iota_client._high_level_api.HighLevelAPI.get_outputs"></a>

#### get_outputs

```python
def get_outputs(output_ids)
```

Fetch OutputResponse from provided OutputIds (requests are sent in parallel).

<a id="iota_client._high_level_api.HighLevelAPI.try_get_outputs"></a>

#### try_get_outputs

```python
def try_get_outputs(output_ids)
```

Try to get OutputResponse from provided OutputIds.
Requests are sent in parallel and errors are ignored, can be useful for spent outputs.

<a id="iota_client._high_level_api.HighLevelAPI.find_blocks"></a>

#### find_blocks

```python
def find_blocks(block_ids)
```

Find all blocks by provided block IDs.

<a id="iota_client._high_level_api.HighLevelAPI.retry"></a>

#### retry

```python
def retry(block_id)
```

Retries (promotes or reattaches) a block for provided block id. Block should only be
retried only if they are valid and haven't been confirmed for a while.

<a id="iota_client._high_level_api.HighLevelAPI.retry_until_included"></a>

#### retry_until_included

```python
def retry_until_included(block_id, interval=None, max_attempts=None)
```

Retries (promotes or reattaches) a block for provided block id until it's included (referenced by a
milestone). Default interval is 5 seconds and max attempts is 40. Returns the included block at first
position and additional reattached blocks.

<a id="iota_client._high_level_api.HighLevelAPI.consolidate_funds"></a>

#### consolidate_funds

```python
def consolidate_funds(secret_manager, generate_addresses_options)
```

Function to consolidate all funds from a range of addresses to the address with the lowest index in that range
Returns the address to which the funds got consolidated, if any were available.

<a id="iota_client._high_level_api.HighLevelAPI.find_inputs"></a>

#### find_inputs

```python
def find_inputs(addresses, amount)
```

Function to find inputs from addresses for a provided amount (useful for offline signing)

<a id="iota_client._high_level_api.HighLevelAPI.find_outputs"></a>

#### find_outputs

```python
def find_outputs(output_ids, addresses)
```

Find all outputs based on the requests criteria. This method will try to query multiple nodes if
the request amount exceeds individual node limit.

<a id="iota_client._high_level_api.HighLevelAPI.reattach"></a>

#### reattach

```python
def reattach(block_id)
```

Reattaches blocks for provided block id. Blocks can be reattached only if they are valid and haven't been
confirmed for a while.

<a id="iota_client._high_level_api.HighLevelAPI.reattach_unchecked"></a>

#### reattach_unchecked

```python
def reattach_unchecked(block_id)
```

Reattach a block without checking if it should be reattached.

<a id="iota_client._high_level_api.HighLevelAPI.promote"></a>

#### promote

```python
def promote(block_id)
```

Promotes a block. The method should validate if a promotion is necessary through get_block. If not, the
method should error out and should not allow unnecessary promotions.

<a id="iota_client._high_level_api.HighLevelAPI.promote_unchecked"></a>

#### promote_unchecked

```python
def promote_unchecked(block_id)
```

Promote a block without checking if it should be promoted.

<a id="iota_client._node_indexer_api"></a>

# iota_client.\_node_indexer_api

<a id="iota_client._node_indexer_api.NodeIndexerAPI"></a>

## NodeIndexerAPI Objects

```python
class NodeIndexerAPI(BaseAPI)
```

<a id="iota_client._node_indexer_api.NodeIndexerAPI.basic_output_ids"></a>

#### basic_output_ids

```python
def basic_output_ids(query_parameters)
```

Fetch basic output IDs.

<a id="iota_client._node_indexer_api.NodeIndexerAPI.alias_output_ids"></a>

#### alias_output_ids

```python
def alias_output_ids(query_parameters)
```

Fetch alias output IDs.

<a id="iota_client._node_indexer_api.NodeIndexerAPI.alias_output_id"></a>

#### alias_output_id

```python
def alias_output_id(alias_id)
```

Fetch alias output ID.

<a id="iota_client._node_indexer_api.NodeIndexerAPI.nft_output_ids"></a>

#### nft_output_ids

```python
def nft_output_ids(query_parameters)
```

Fetch NFT output IDs.

<a id="iota_client._node_indexer_api.NodeIndexerAPI.nft_output_id"></a>

#### nft_output_id

```python
def nft_output_id(nft_id)
```

Fetch NFT output ID.

<a id="iota_client._node_indexer_api.NodeIndexerAPI.foundry_output_ids"></a>

#### foundry_output_ids

```python
def foundry_output_ids(query_parameters)
```

Fetch foundry Output IDs.

<a id="iota_client._node_indexer_api.NodeIndexerAPI.foundry_output_id"></a>

#### foundry_output_id

```python
def foundry_output_id(foundry_id)
```

Fetch foundry Output ID.

<a id="iota_client._node_core_api"></a>

# iota_client.\_node_core_api

<a id="iota_client._node_core_api.NodeCoreAPI"></a>

## NodeCoreAPI Objects

```python
class NodeCoreAPI(BaseAPI)
```

<a id="iota_client._node_core_api.NodeCoreAPI.get_node_health"></a>

#### get_node_health

```python
def get_node_health(url)
```

Get node health.

<a id="iota_client._node_core_api.NodeCoreAPI.get_node_info"></a>

#### get_node_info

```python
def get_node_info(url, auth=None)
```

Get node info.

<a id="iota_client._node_core_api.NodeCoreAPI.get_info"></a>

#### get_info

```python
def get_info()
```

Returns the node information together with the url of the used node.

<a id="iota_client._node_core_api.NodeCoreAPI.get_peers"></a>

#### get_peers

```python
def get_peers()
```

Get peers.

<a id="iota_client._node_core_api.NodeCoreAPI.get_tips"></a>

#### get_tips

```python
def get_tips()
```

Get tips.

<a id="iota_client._node_core_api.NodeCoreAPI.post_block"></a>

#### post_block

```python
def post_block(block)
```

Post block.

<a id="iota_client._node_core_api.NodeCoreAPI.get_block_data"></a>

#### get_block_data

```python
def get_block_data(block_id)
```

Post block.

<a id="iota_client._node_core_api.NodeCoreAPI.get_block_metadata"></a>

#### get_block_metadata

```python
def get_block_metadata(block_id)
```

Get block metadata with block_id.

<a id="iota_client._node_core_api.NodeCoreAPI.get_block_raw"></a>

#### get_block_raw

```python
def get_block_raw(block_id)
```

Get block raw.

<a id="iota_client._node_core_api.NodeCoreAPI.get_output"></a>

#### get_output

```python
def get_output(output_id)
```

Get output.

<a id="iota_client._node_core_api.NodeCoreAPI.get_output_metadata"></a>

#### get_output_metadata

```python
def get_output_metadata(output_id)
```

Get output metadata.

<a id="iota_client._node_core_api.NodeCoreAPI.get_milestone_by_id"></a>

#### get_milestone_by_id

```python
def get_milestone_by_id(milestone_id)
```

Get the milestone by the given milestone id.

<a id="iota_client._node_core_api.NodeCoreAPI.get_milestone_by_id_raw"></a>

#### get_milestone_by_id_raw

```python
def get_milestone_by_id_raw(milestone_id)
```

Get the raw milestone by the given milestone id.

<a id="iota_client._node_core_api.NodeCoreAPI.get_milestone_by_index"></a>

#### get_milestone_by_index

```python
def get_milestone_by_index(index)
```

Get the milestone by the given index.

<a id="iota_client._node_core_api.NodeCoreAPI.get_milestone_by_index_raw"></a>

#### get_milestone_by_index_raw

```python
def get_milestone_by_index_raw(index)
```

Get the milestone by the given index.

<a id="iota_client._node_core_api.NodeCoreAPI.get_utxo_changes_by_id"></a>

#### get_utxo_changes_by_id

```python
def get_utxo_changes_by_id(milestone_id)
```

Get the UTXO changes by the given milestone id.

<a id="iota_client._node_core_api.NodeCoreAPI.get_utxo_changes_by_index"></a>

#### get_utxo_changes_by_index

```python
def get_utxo_changes_by_index(index)
```

Get the UTXO changes by the given milestone index.

<a id="iota_client._node_core_api.NodeCoreAPI.get_receipts"></a>

#### get_receipts

```python
def get_receipts()
```

Get all receipts.

<a id="iota_client._node_core_api.NodeCoreAPI.get_receipts_migrated_at"></a>

#### get_receipts_migrated_at

```python
def get_receipts_migrated_at(milestone_index)
```

Get the receipts by the given milestone index.

<a id="iota_client._node_core_api.NodeCoreAPI.get_treasury"></a>

#### get_treasury

```python
def get_treasury()
```

Get the treasury output.

<a id="iota_client._node_core_api.NodeCoreAPI.get_included_block"></a>

#### get_included_block

```python
def get_included_block(transaction_id)
```

Returns the included block of the transaction.

<a id="iota_client.common"></a>

# iota_client.common

<a id="iota_client.common.send_message_routine"></a>

#### send_message_routine

```python
def send_message_routine(func)
```

The routine of dump json string and call send_message()

<a id="iota_client.common.IotaClientError"></a>

## IotaClientError Objects

```python
class IotaClientError(Exception)
```

iota-client error

<a id="iota_client._base_api"></a>

# iota_client.\_base_api
