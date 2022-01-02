# Pre-Commit

Used for maintaining Git hooks.

* <https://pre-commit.com/>
* <https://github.com/pre-commit/pre-commit>

Whenever this repository is cloned, the following commands must be executed:

    pre-commit install --install-hooks
    pre-commit install --hook-type commit-msg

Configured via [`../../.pre-commit-config.yaml`](../../.pre-commit-config.yaml). It should
automatically run on every commit. It is also run as part of the CI/CD pipeline.

To trigger pre-commit manually, execute `pre-commit run -a`.
