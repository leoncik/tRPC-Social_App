# tRPC Social App

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## How to use

### Installation

### Develop on the project

#### Commits

A commit linter [commitlint](https://commitlint.js.org/#/) has been set up to enforce an homogenous commit structure on the repository. The structure complies to the [conventionnal commits](https://www.conventionalcommits.org/en/v1.0.0/) convention. Furthermore, we require you to add a reference to the issue/ticket that you are working on. For example, a good commit message should looks like this:

```sh
feat(client): add an email validator (#53)
```

For more convenience, [commitizen](https://commitizen-tools.github.io/commitizen/) has been set up to help you writing your commit messages. If you want to use this tool, simply use `pnpm cm` instead of `git commit` and follow the prompt in your terminal.

Alternatively, if you are using Visual Studio Code, you can use the [commitlint](https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint) extension to write your commit messages.

Note: if you want to use Visual Studio Code as your git message editor, use the following command to set Visual Studio Code as your default editor:

```sh
git config --global core.editor "code --wait"
```

The "--wait" flags prevents the following error: "Aborting commit due to empty commit message.".

Onverra demain comment personnaliser commitizen pour suivre ma propre convention...