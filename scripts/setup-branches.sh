#!/usr/bin/env bash
# Create attorney branches with the correct active-attorney config.
# Run after your initial commit on main.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! git rev-parse HEAD >/dev/null 2>&1; then
  echo "Make an initial commit on main first, then re-run this script."
  exit 1
fi

MAIN_BRANCH="$(git branch --show-current)"
if [[ "$MAIN_BRANCH" != "main" ]]; then
  git checkout main
fi

create_attorney_branch() {
  local slug="$1"
  local branch="attorney/${slug}"

  if git show-ref --verify --quiet "refs/heads/${branch}"; then
    echo "Branch ${branch} already exists, skipping."
    return
  fi

  git checkout -b "$branch"
  node scripts/set-active-attorney.mjs "$slug"
  git add src/config/active-attorney.ts
  git commit -m "Set active attorney: ${slug}"
  git checkout main
  echo "Created ${branch}"
}

create_attorney_branch "jay-gellhaus"
create_attorney_branch "jay-gervasi"
create_attorney_branch "jay-marson"
create_attorney_branch "jay-pickard"
create_attorney_branch "jay-wang"

if ! git show-ref --verify --quiet refs/heads/release; then
  git checkout -b release
  git merge attorney/jay-gellhaus -m "Deploy: jay-gellhaus (initial release)"
  git checkout main
  echo "Created release branch (currently jay-gellhaus)"
fi

echo "Done. Attorney branches: attorney/jay-gellhaus, attorney/jay-gervasi, attorney/jay-marson, attorney/jay-pickard, attorney/jay-wang"
