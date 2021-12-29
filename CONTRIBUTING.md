# Contributing

Your contributions to this project are appreciated.

## Getting started

It is recommended to take a look the internal documentation at
[`docs/internal`](docs/internal).

## Work on codebase

Ensure that [pre-commit](https://github.com/pre-commit/pre-commit) is installed.
Pre-commit is used for maintaing Git hooks used in this project. Read
[`docs/internal/pre-commit.md`](docs/internal/pre-commit.md) for more information.

Install the Git hooks with pre-commit:

```shell
pre-commit install --install-hooks
pre-commit install --hook-type commit-msg
```

Follow the usual Git workflow. Work on a dedicated branch instead of the trunk.

Now you can start contributing to the code.
