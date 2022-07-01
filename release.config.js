'use strict'

module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'master',
    'trunk',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true },
  ],

  preset: 'conventionalcommits',

  tagFormat: '${version}',

  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          // Don't trigger a release. Even if it's a breaking change.
          { scope: 'no-release', release: false },

          // Activate breaking and revert behaviour. Default.
          { breaking: true, release: 'major' },
          { revert: true, release: 'patch' },

          // Mapping of types to releases ignoring scopes.
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'test', release: 'patch' },

          // Mapping of types to releases including scopes.
          { type: 'docs', scope: 'readme', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            // Visible.
            { type: 'feat', section: 'Features', hidden: false },
            { type: 'fix', section: 'Bug Fixes', hidden: false },
            { type: 'perf', section: 'Performance', hidden: false },
            { type: 'revert', section: 'Reverts', hidden: false },
            { type: 'refactor', section: 'Refactor', hidden: false },
            { type: 'test', section: 'Tests', hidden: false },
            { type: 'docs', section: 'Docs', hidden: false },

            // Hidden.
            { type: 'style', section: 'Styles', hidden: true },
            { type: 'chore', section: 'Chores', hidden: true },
            { type: 'build', section: 'Build', hidden: true },
            { type: 'ci', section: 'CI/CD', hidden: true },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
      },
    ],
    '@semantic-release/github',
  ],
}
