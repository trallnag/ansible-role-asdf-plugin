![status](https://img.shields.io/badge/status-active-brightgreen)
[![role](https://img.shields.io/ansible/role/56143)](https://galaxy.ansible.com/trallnag/asdf-plugin)
[![quality](https://img.shields.io/ansible/quality/56143)](https://galaxy.ansible.com/trallnag/asdf-plugin)
[![downloads](https://img.shields.io/ansible/role/d/56143?label=downloads)](https://galaxy.ansible.com/trallnag/asdf-plugin)

# Ansible Role `trallnag.asdf_plugin`

Ansible role that installs any asdf plugin and package.

This role does not install asdf itself. It must already be available on the target.

Available on [Ansible Galaxy](https://galaxy.ansible.com/trallnag/asdf_plugin).

## Scope

* Installing a single asdf plugin.
* Installing multiple versions of a package managed by a plugin.
* Everything supported by asdf should be configurable but also optional.
* No requirments except asdf itself.

## Special Requirements

The package manager asdf must be available on the target.

## Special Dependencies

None.

## Role Variables

```yaml
asdf_plugin_name:
  type: str
  required: true
  description: >-
    Name of the asdf plugin to install. For example `terraform`.

asdf_plugin_git_url:
  default: ""
  type: str
  required: false
  description: >-
    Git repo containing the plugin. If not set, the central plugin repo
    will be used as a reference to find the appropiate plugin repository.
    For example `https://github.com/asdf-community/asdf-hashicorp.git`.

asdf_plugin_git_ref:
  type: str
  required: false
  description: >-
    Git reference of the plugin repository. If not set, asdf will simply
    use the latest commit on the default branch. If set, the given git
    ref will be enforced. This includes rollbacks if the plugin is on a
    newer version. For example due to a manual `asdf plugin update --all`.

asdf_plugin_package_versions:
  type: list
  elements: str
  required: false
  description: >-
    List of package versions to install. Each item is passed to `asdf install`,
    so you can also use strings like `latest`. Check `asdf --help`.

asdf_plugin_package_version_global:
  type: str
  required: false
  description: >-
    Set the package global version.
```

## Examples

Here is a minimal Playbook:

```yaml
- name: Playbook
  hosts: myhost
  remote_user: myuser
  vars:
    rolespec_validate: true
  roles:
    - name: trallnag.asdf_plugin
      vars:
        asdf_plugin_name: gopass
        asdf_plugin_git_url: https://github.com/trallnag/asdf-gopass.git
        asdf_plugin_git_ref: refs/tags/v1.0.1
        asdf_plugin_package_versions: ["1.12.7", "1.12.8"]
        asdf_plugin_package_version_global: "1.12.8"
```

And here packaged within a small wrapper role:

```yaml
- name: Install Terraform with asdf
  import_role:
    name: trallnag.asdf_plugin
  vars:
    asdf_plugin_name: terraform
    asdf_plugin_git_url: https://github.com/asdf-community/asdf-hashicorp.git
    asdf_plugin_package_versions: ["1.0.5"]
    asdf_plugin_package_version_global: "1.0.5"

- name: Setup completion
  shell: |
    complete -C ~/.asdf/installs/terraform/1.0.3/bin/terraform terraform
  args:
    executable: /bin/bash
  changed_when: false
```

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

## Contact

```txt
Tim Schwenke <tim.schwenke@trallnag.com>
ACCB8F306184BEEE49E7370E5DBF2C327E72AA3F
```
