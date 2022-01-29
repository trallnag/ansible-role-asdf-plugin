# Frequently Asked Questions

<!--TOC-->

- [How to release a new version?](#how-to-release-a-new-version)
- [How to setup local dev environment?](#how-to-setup-local-dev-environment)

<!--TOC-->

## How to release a new version?

Push the default branch to remote and wait for the finish of the GitHub Actions
workflow "primary".

According to the rules of semantic versioning and conventional commits
a new version might be released. This is handled by semantic-release. Read
[`semantic-release.md`](semantic-release.md) for more information.

If a new version is released, edit the GitHub release notes to add anything
noteworthy beyond the automatically generated content. Also make sure to add
the same to the changelog. But again, this last step is optional.

## How to setup local dev environment?

Ensure that [pre-commit](https://github.com/pre-commit/pre-commit) is installed.
Pre-commit is used for maintaing Git hooks used in this project. Read
[`pre-commit.md`](pre-commit.md) for more information.

Install the Git hooks with pre-commit:

```shell
pre-commit install --install-hooks
pre-commit install --hook-type commit-msg
```

Follow the usual Git workflow. Work on a dedicated branch instead of the trunk.
