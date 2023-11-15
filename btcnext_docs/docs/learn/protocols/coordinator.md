---
description: The Coordinator - IOTA's PoA finality gadget.
image: /img/iota-wiki.png
keywords:
  - explanation
  - shimmer
---

# The Coordinator - PoA Consensus

:::note
The Coordinator is a temporary feature running under the Chrysalis and Stardust protocol versions
and will be removed with the upcoming IOTA 2.0 update.
:::

The Coordinator is a node controlled by the IOTA Foundation that sends signed blocks called milestones that nodes trust
and use to confirm blocks and reach _consensus_. Blocks which are directly or indirectly referenced by a milestone block
are automatically deemed confirmed, though whether they mutate the ledger depends on the [White-Flag consensus](/learn/protocols/chrysalis/core-concepts/white-flag-consensus)
approach. Before the [White-Flag consensus](/learn/protocols/chrysalis/core-concepts/white-flag-consensus) was introduced, nodes would instead compute mutations via cumulative weight
calculations.

:::note
Even though the Coordinator acts as a centralized _confirmation_ device or finality gadget, it is not able to move or
alter the ledger in any other way than given by the user issued transactions in the _DAG_. Therefore, the Coordinator
can only censor transactions (which would be more visible than in traditional blockchains) but not actively mint or
remove tokens from the ledger.
:::

Nodes within an IOTA network running under PoA via the Coordinator have its public keys saved in the configuration and
hence validate whether milestones are really issued by the Coordinator. Milestone are regularly issued by the
Coordinator and determine the confirmation latency of the network. One can think of as milestones as the equivalent of
_block header_ s in more traditional blockchains, although in the case of IOTA, the _block header_  confirms a subgraph within
the DAG.

![An artist's depiction of Coordinator.](/img/learn/milestones.gif 'Click to see the full-sized image.')

_The Coordinator_
