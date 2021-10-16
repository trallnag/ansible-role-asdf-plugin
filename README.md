[![galaxy](https://img.shields.io/ansible/role/56162)](https://galaxy.ansible.com/trallnag/asdf_plugin)
[![quality](https://img.shields.io/ansible/quality/56162)](https://galaxy.ansible.com/trallnag/asdf_plugin)
[![downloads](https://img.shields.io/ansible/role/d/56162?label=downloads)](https://galaxy.ansible.com/trallnag/asdf_plugin)

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

Asdf must be available on the target.

## Special Dependencies

None.

## Role Variables

Check out [`meta/argument_specs.yaml`](meta/argument_specs.yaml).

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
  ansible.builtin.import_role:
    name: trallnag.asdf_plugin
  vars:
    asdf_plugin_name: terraform
    asdf_plugin_git_url: https://github.com/asdf-community/asdf-hashicorp.git
    asdf_plugin_package_versions: ["1.0.9"]
    asdf_plugin_package_version_global: "1.0.9"

- name: Setup completion for Bash
  ansible.builtin.blockinfile:
    path: ~/.bashrc
    marker: "# {mark} :: ANSIBLE MANAGED BLOCK :: {{ role_name }}"
    block: |
      complete -C terraform terraform
```

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

## Contact

```txt
Tim Schwenke <tim.schwenke@trallnag.com>
ACCB8F306184BEEE49E7370E5DBF2C327E72AA3F
```
