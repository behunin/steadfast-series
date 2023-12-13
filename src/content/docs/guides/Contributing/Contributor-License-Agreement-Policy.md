---
title: Contributor License
description: Setup
---

## What is the purpose of the Individual Contributor License Agreement?

When you agree to the yuzu Nintendo Switch Emulator Individual [Contributor License Agreement](https://cla-assistant.io/yuzu-emu/yuzu) (CLA), you are effectively granting a copyright of any contribution that you make to the maintainers of the yuzu project. You still retain an equal copyright over your own work, and are free to use your own work as you please.

## How do I sign the Individual Contributor License Agreement?

- When you open a Pull Request on the [main repository](https://github.com/yuzu-emu/yuzu/), the bot `CLAassistant` will prompt you to agree to the CLA.
- Click the link provided by `CLAassistant`, or browse to https://cla-assistant.io/yuzu-emu/yuzu.
- Login with your GitHub credentials.
- Read the CLA, provide the required information, and click "Accept" once you agree to the terms of the agreement.
- The status of your Pull Request (and future Pull Requests) will be updated to indicate that you have agreed to the terms of the CLA.

## Why does yuzu need a Contributor License Agreement?

As of the time of this document, yuzu has around [200 contributors](https://github.com/yuzu-emu/yuzu/graphs/contributors)! However, the vast majority of these contributors have written only a few lines of code, are inactive in the project, and have not provided the current team with contact information. There is some precedent that unless otherwise agreed upon, every contributor owns the sole copyright to their contribution. The [[Contributor License Agreement]] assigns a shared copyright of each contribution to the set of individuals who actively maintain the project. This is not forfeiting any rights by the contributor, but rather granting rights to yuzu. This enables the project to have ownership of the source code without necessarily tracking down every single person that ever made a contribution. It also is a mechanism for the project to keep a record of all of the present and future contributors and their contact information. There are several reasons why this is important:

- In recent years, emulators have become productized. This has positive and negative effects for end users. On one hand, productizing emulators has meant that emulator developers are getting compensated for their hard work. Compensation means that developers are willing to work on the parts of emulation that aren't necessarily _fun_, such as usability and polish features that are important to end users. Compensation also means that emulator developers can devote more time to the project. All of these mean faster development, a better product, and a better experience for end users.
- However, recent closed source emulators have shown that emulation can be successfully monetized. This has resulted in some of the most successful projects becoming closed source, which overall hurts preservation of the hardware and the games. Open preservation is the core of why most yuzu developers work on the project. The success of closed source emulators has furthermore shown that the damage to coexisting open source emulators and preservation can be significant: Given the complexity of modern systems, it can be incredibly demotivating for an open source project that is trailing behind to try to stay relevant. By design, closed source emulators benefit from the innovation of open source projects, without having to give back. Consequently, such open source projects fail to attract attention and new developers, and can die off leaving the opportunity for preservation lost.
- yuzu is an open source project. The [main repository](https://github.com/yuzu-emu/yuzu/) for the project will always be open source, accessible to new contributors, and purposed with preserving the Nintendo Switch. Furthermore, the main repository will always be a reference implementation for all ancillary releases within the yuzu project. However, in order to compete with modern emulators in 2019 and beyond, yuzu also needs to be a product. We need to find ways to monetize the project and compensate our developers while also staying open source. This will allow us to share the same benefits of other productized projects, such as by enabling our developers to spend more time working on yuzu, or to work on less exciting but necessary features. Unfortunately, this is very difficult without the maintainers of the yuzu project having ownership of the source code.
- While we agree with the spirit of the project's open source license, the GNU General Public License v2.0 (GPL), on its own, the GPL does not provide any legal protection against bad actors. Without any meaningful income stream, an open source project does not have the legal resources to pursue a GPL violation. For example, there have been many instances of GPL emulators being released on the Android Play Store as commercial closed source products without permission from the original authors. The CLA helps protect yuzu against such scenarios by allowing yuzu to: 1) consolidate the copyright owners of the project as a whole to a smaller, more meaningful, and active set of individuals, 2) more easily monetize the project and therefore have resources to potentially take legal action against bad actors as warranted, 3) restrict the access of non-core parts of the yuzu source code that could be used by bad actors to monetize yuzu.

## Who must agree to the CLA?

Any contributor that opens a Pull Request against the [main repository](https://github.com/yuzu-emu/yuzu/) must agree to the CLA before their change can be merged. Similar to how Pull Requests must satisfy build and verification requirements, and must be approved by reviewers, this will be another checkbox within the merge process.

## What should contributors do if they do not own their contribution?

If a contributor does not own their contribution, it is their responsibility to get the original author of the code to agree to the CLA or provide written consent granting them shared ownership of the code change. Proof of this consent should be included within the description of the Pull Request for the change.

## Who are the maintainers of the yuzu project?

The maintainers of the yuzu project are the set of individuals that satisfy the following requirements:

1. **Have made at least one meaningful technical contribution to the core yuzu emulator within the most recent 12 months.** The core yuzu emulator is considered the part of the codebase that is responsible for Nintendo Switch emulation, which includes [core](https://github.com/yuzu-emu/yuzu/tree/master/src/core), [audio_core](https://github.com/yuzu-emu/yuzu/tree/master/src/audio_core), and [video_core](https://github.com/yuzu-emu/yuzu/tree/master/src/video_core). Minor changes to a frontend or common code do not qualify as a meaningful technical contribution to the core yuzu emulator.
2. **Have agreed to the [[Contributor License Agreement]].**
3. **Expresses willingness to be a maintainer of the yuzu project.**
4. **Are at least eighteen years of age.**
5. **Are a member of the [yuzu-emu/Maintainers](https://github.com/orgs/yuzu-emu/teams/maintainers/members) team on GitHub.**

## How are new maintainers added to the yuzu project?

If a contributor satisfies requirements #1, #2, #3, and #4 above, and has shown a pattern of:

- Making several meaningful technical contributions over a period of at least 6 months.
- Participating in code reviews and leaving useful technical feedback.
- Being a technical resource or leader in an area relevant to the project (such as reverse engineering, graphics, audio, CI/build system, etc.).

Then the existing maintainers of the yuzu project will discuss adding this contributor to the [yuzu-emu/Maintainers](https://github.com/orgs/yuzu-emu/teams/maintainers/members) GitHub team. This decision will be satisfied with a two thirds majority vote of the existing active maintainers. With all requirements satisfied, the contributor is now considered a formal maintainer of the yuzu project.

There is an expectation that users with this role are active participants in the project and its community, such as by continuing to satisfy the above criteria.

## How are maintainers removed from the yuzu project?

- If an existing maintainer of the yuzu project becomes inactive, and therefore no longer satisfies requirement #1 above by failing to make any code change to yuzu within the most recent 12 month period, they will lose their formal maintainer status.
- If an existing maintainer of the yuzu project violates the terms of the [[Contributor License Agreement]], or wishes to have their agreement terminated, thereby no longer satisfying requirement #2 above, they will immediately lose their formal maintainer status.
- If an existing maintainer of the yuzu project no longer wishes to be a maintainer, thereby no longer satisfying requirement #3 above, they may immediately resign from this role by notifying the other maintainers.
- Being a member of the [yuzu-emu/Maintainers](https://github.com/orgs/yuzu-emu/teams/maintainers/members) GitHub team alone does not necessarily mean that a contributor is still a maintainer of the yuzu project if they fail to satisfy any of the other requirements. Users will be be pruned from the [yuzu-emu/Maintainers](https://github.com/orgs/yuzu-emu/teams/maintainers/members) GitHub team if they become inactive.
- A maintainer that satisfies all requirements may still lose their maintainer status by a two thirds majority vote of the active maintainers of the yuzu project.

## Privacy

When you agree to the CLA, your acknowledgment of the agreement is public. Any other contact information you enter is private, and will only be available to the project owner [bunnei](https://github.com/bunnei/). This information will not be shared with any other individuals under any circumstances.

## What is the process for the maintainers of the yuzu project to act upon their copyright over the yuzu source code?

At the time of this document, most of the yuzu code is not under CLA. As such, the maintainers of the yuzu project only have authority to act on the copyright of the code they own, not the project as a whole. The expected outcome in adding the CLA is that over time, code will naturally be rewritten and replaced by code that is under CLA. The list of inactive developers that the team would need to contact with regards to code ownership will diminish. At this time, if we were to act on our copyright of the yuzu source code (for example, by issuing a dual license), the decision would be made by a two thirds majority vote. This vote will be carried out by the maintainers of the yuzu project and the web administrator of the yuzu project.

The web administrator of the yuzu project is a single individual that:

- Is at least eighteen years of age.
- Is designated as web administrator by a two thirds majority vote by the maintainers of the yuzu project.
- Is a member of the [yuzu-emu/Web-Adminstrator](https://github.com/orgs/yuzu-emu/teams/web-adminstrator) team on GitHub.
- Maintains yuzu's web infrastructure. This is defined as: 1) maintaining the yuzu website, 2) managing public-facing online communities for yuzu (e.g. Discord, forums, etc.), 3) managing yuzu's other web services (e.g. continuous integration and build systems, bots, etc.).

The web administrator of the yuzu project may lose their status as such by a two thirds majority vote by the maintainers of the yuzu project.
