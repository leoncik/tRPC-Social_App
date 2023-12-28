# tRPC Social App

A full-stack app focusing on authentication (Keycloak) and best practices.

## Table of contents

- [Features](#features)
- [How to use](#how-to-use)
  - [Installation](#installation)
  - [Develop on the project](#develop-on-the-project)
    - [Branches](#branches)
    - [Commits](#commits)
    - [Dependencies](#dependencies)

## Features

- [stylelint](https://stylelint.io/) for consistent CSS. Two stylelint configuration files were made: one to check the rules and prevent the commit if anything wrong was detected and another one to autofix the detected problems.
  - Plugins used on autofix mode:
    - [stylelint-config-idiomatic-order](https://www.npmjs.com/package/stylelint-config-idiomatic-order): ensure a consistent order in the CSS properties.
    - [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format): a stylelint plugin to convert HEX colors to either RGB or HSL formats. The HSL format was chosen for this project.
  - Plugins used to prevent commit:
    - [standard config](https://www.npmjs.com/package/stylelint-config-standard): used for the basic checks.
    - [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties): disallow property values that are ignored due to another property value in the same rule.

## How to use

### Installation

1. Get this repository's content by [direct download](https://github.com/leoncik/tRPC-Social-App/archive/refs/heads/master.zip) or by cloning It :

```sh
git clone https://github.com/leoncik/tRPC-Social-App.git
```

2. Make sure that [Node.js](https://nodejs.org/en/) is installed on your machine.

3. Make sure that [pnpm](https://pnpm.io/) is installed on your machine. 

4. install the dependencies :

```sh
pnpm install
```

5. Run the project:


```sh
pnpm dev
```

The client should be available at this address: http://127.0.0.1:5173/

### Develop on the project

#### Branches

A branch name validator has been set up to enforce an homogenous structure on the repository. Branch name validation will be checked on each **push** to the repository. An example of valid branch name is:

```
feat/#53/email-validator
```

#### Commits

A commit linter [commitlint](https://commitlint.js.org/#/) has been set up to enforce an homogenous commit structure on the repository. The structure complies to the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) convention. Furthermore, we require you to add a reference to the issue/ticket that you are working on. For example, a good commit message should looks like this:

```
feat(client): add an email validator (#53)
```

For more convenience, if you are using Visual Studio Code, you can use the [commitlint](https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint) extension lint your commit messages while you are writing them.

Note: if you want to use Visual Studio Code as your git message editor, use the following command to set Visual Studio Code as your default editor:

```sh
git config --global core.editor "code --wait"
```

The "--wait" flags prevents the following error: "Aborting commit due to empty commit message.".

### Dependencies

Dependencies should be added from the root of the project with [pnpm](https://pnpm.io/). You can add a dependency to a package with the following command:

```sh
pnpm add dependency-name --filter package-name
```

For example, if you want to add [TypeScript](https://www.typescriptlang.org/) as a *devDependency* to the *server* package, you should run this command: `pnpm add -D typescript --filter server`