# Development

## Pre-Commit

Used for maintaining pre-commit hooks.

* <https://pre-commit.com/>
* <https://github.com/pre-commit/pre-commit>

Pre-commit is configured via [`.pre-commit-config.yaml`](.pre-commit-config.yaml).
It should automatically run on every commit. It is also run as part of the CI/CD
pipeline.

To trigger pre-commit manually, execute `pre-commit run -a`.
