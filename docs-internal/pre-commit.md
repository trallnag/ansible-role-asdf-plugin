# Pre-Commit

Used for maintaining Git hooks.

- <https://pre-commit.com/>
- <https://github.com/pre-commit/pre-commit>

Whenever this repository is cloned, the following commands must be executed:

```sh
pre-commit install --install-hooks
pre-commit install --hook-type commit-msg
```

Pre-commit should now run automatically on every commit. It is also executed via
GitHub Actions and the respective pipelines should fail on hook fails.

Pre-commit is configured via
[`../.pre-commit-config.yaml`](../.pre-commit-config.yaml).

```sh
# Run pre-commit against all files.
pre-commit run -a

# Run only one hook against all files.
pre-commit run <hook> -a
```
