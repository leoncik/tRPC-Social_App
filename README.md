# tRPC Social App

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

```sh
feat/#53/email-validator
```

#### Commits

A commit linter [commitlint](https://commitlint.js.org/#/) has been set up to enforce an homogenous commit structure on the repository. The structure complies to the [conventionnal commits](https://www.conventionalcommits.org/en/v1.0.0/) convention. Furthermore, we require you to add a reference to the issue/ticket that you are working on. For example, a good commit message should looks like this:

```sh
feat(client): add an email validator (#53)
```

For more convenience, if you are using Visual Studio Code, you can use the [commitlint](https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint) extension lint your commit messages while you are writing them.

Note: if you want to use Visual Studio Code as your git message editor, use the following command to set Visual Studio Code as your default editor:

```sh
git config --global core.editor "code --wait"
```

The "--wait" flags prevents the following error: "Aborting commit due to empty commit message.".