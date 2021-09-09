# Development

## Pre-Commit

Used for maintaining pre-commit hooks. Local setup required.

* <https://pre-commit.com/>
* <https://github.com/pre-commit/pre-commit>

Pre-commit is configured via [`.pre-commit-config.yaml`](.pre-commit-config.yaml).
It should automatically run on every commit. It is also run as part of the CI/CD
pipeline.

To trigger pre-commit manually, execute `pre-commit run -a`.

## Semantic Release

Used for automatically releasing new versions. Only relevant within CI/CD, so no
local setup required.

* <https://github.com/semantic-release/semantic-release>
* <https://semantic-release.gitbook.io/semantic-release/>

Configuration of Semantic Release takes place in multiple places:

* [`.releaserc.json`](.releaserc.json): Semantic Release is configured in this
  file. For example the plugins used or plugin specific configuration. Currently
  this project uses the Conventional Commits preset, a bunch of additonal types
  and a few additional release rules.

* [`.local/node/`](.local/ci): Dependency management for the Semantic Release
  environment. At runtime in CI/CD pipeline the `package.json` and lock file are
  copied to the root of the project.

* [`.github/workflows/primary.yaml`](.github/workflows/primary.yaml): Here Semantic
  Release is actually executed.

## Random Q&A

### How to release a new version?

Push to the master branch. Semantic Release will run as part of the primary
GitHub Actions workflow and act accordingly. SR automatically updates the changelog,
creates a tag and GitHub Release. See [`.releaserc.json`](.releaserc.json) for
the SR configuration.
