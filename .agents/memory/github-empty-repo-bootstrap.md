---
name: GitHub empty repository bootstrap
description: How to publish an initial tree when GitHub's low-level Git API rejects writes to an empty repository.
---

GitHub's Git Database API can reject blob creation with “Git Repository is empty” until the repository has a first commit.

**Why:** An empty repository has no ref, so low-level blob/tree writes cannot always be attached to a branch yet.

**How to apply:** Create a small first commit through the Contents API, then create the complete tree and a follow-up commit through the Git Database API, updating the existing branch ref afterward.