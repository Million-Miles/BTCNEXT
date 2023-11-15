:::warning Unlock Conditions

Outputs may have multiple [UnlockConditions](/tips/tips/TIP-0018#unlock-conditions), which may require [returning some or all of the transferred amount](/tips/tips/TIP-0018#storage-deposit-return-unlock-condition). The outputs could also [expire if not claimed in time](/tips/tips/TIP-0018#expiration-unlock-condition), or may not be [unlockable for a predefined period](/tips/tips/TIP-0018#timelock-unlock-condition).

To get outputs with only the [`AddressUnlockCondition`](/tips/tips/TIP-0018#address-unlock-condition), you should synchronize with the option `syncOnlyMostBasicOutputs: true`.

If you are synchronizing outputs with other unlock conditions, you should check the unlock conditions carefully before crediting users any balance.

You can find an example illustrating how to check whether an output has only the address unlock condition and whether this address belongs to the account in the [Check Unlock Conditions how-to guide](../how_tos/outputs_and_transactions/06_check_unlock_conditions.mdx).

:::
