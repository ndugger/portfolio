workflow "Build & Deploy" {
  on = "push"
  resolves = ["new-action"]
}

action "If branch is master" {
  uses = "actions/bin/filter@25b7b846d5027eac3315b50a8055ea675e2abd89"
  args = "branch master"
}

action "new-action" {
  uses = "owner/repo/path@ref"
  needs = ["If branch is master"]
}
