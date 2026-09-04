# Git Branch Strategy

This document defines a professional, production-ready Git branching workflow for this project. It balances simplicity, safety, and team collaboration.

## Overview

We use a **Git Flow–inspired** workflow adapted for a modern team. The model provides distinct branch types for features, releases, and hotfixes, while keeping the workflow lightweight.

## Branch Types

### 1. `main` (or `master`)
- **The only long-lived, production branch.**
- Every commit on `main` is **deployable** and reflects the current production state.
- All merges into `main` must come from `release/` or `hotfix/` branches (never direct feature work).
- Often protected (requires pull request review + passing CI, no direct pushes).

### 2. `develop`
- The integration branch where features are merged.
- Reflects the latest delivered development changes for the next release.
- Feature branches are merged here and tested together.

### 3. `feature/<ticket>-<short-description>`
- Created from: `develop`
- Merged back to: `develop`
- Used for new features or non-urgent improvements.
- Naming examples:
  - `feature/ML-123-user-profile`
  - `feature/add-payment-gateway`
- Lifecycle: one branch per feature/ticket → merge via PR → **delete after merge**.

### 4. `release/<version>`
- Created from: `develop` when a release is ready (all features merged).
- Merged back to: both `main` and `develop`.
- Used for release preparation: version bumps, bug fixes, final QA, and release notes.
- Naming examples:
  - `release/1.2.0`
  - `release/2.3.1`
- After merging to `main`, tag the release with `git tag v<version>`.

### 5. `hotfix/<version>-<short-description>`
- Created from: `main` (urgent production fix).
- Merged back to: both `main` and `develop`.
- Used for critical bugs in production that cannot wait for a release cycle.
- Naming examples:
  - `hotfix/1.2.1-fix-billing`
  - `hotfix/2.0.0-patch-crash`

### 6. Support branches (recommended)
- `develop`: see above.
- Short-lived branches should be deleted after merge to keep the repo clean.

## Visual Flow

```
                   main  ---------------------------------------● (tags: v1.0, v1.1)
                              \                    /
                               \                  / (merge)
                        release/1.0  ------------●
                              /
                        develop  ---------------------------------●
                              \                    /
                        feature/foo -------------●
                              \        /
                        feature/bar -------------●
                              \
                   main (hotfix) --●---------@  (urgent fix merged to main & develop)
```

## Branch Lifecycle Rules

1. **Long-lived** branches: `main` and `develop`.
2. **Short-lived** branches: `feature/*`, `release/*`, `hotfix/*` — created only when needed and **deleted after merge**.
3. Never commit directly to `main` or `develop` in a team setting — always use a PR.
4. Every merge to `main`/`develop` should pass CI (tests, lint, build).

## Naming Conventions

| Branch Type | Naming Pattern |
|-------------|----------------|
| Release     | `release/1.0.0` |
| Feature     | `feature/{issue}-{desc}` |
| Hotfix      | `hotfix/{version}-{desc}` |

Use lowercase, hyphens between words.

## Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/) for clear history:

```
<type>(<scope>): <subject>

- feat: new feature
- fix: bug fix
- refactor: code change that neither fixes a bug nor adds a feature
- docs: documentation only
- style: formatting, whitespace
- chore: maintenance
- perf: performance improvement
- test: tests
```

Example: `feat(auth): add password reset flow`

## Recommended Tools / Practices

- **GitHub Flow vs Git Flow**: For small teams/simple apps, **GitHub Flow** (only `main` + short-lived feature branches) may be simpler. Adopt Git Flow when you have multiple concurrent releases and stable release cycles.
- **Tags**: Tag every production release: `git tag -a v1.0.0 -m "Release 1.0.0"`.
- **Protection rules**: Protect `main`/`develop` (require PRs, up-to-date reviews, passing status checks, no force-push).
- **Force-push**: Only allowed on short-lived feature/hotfix branches, never on `main`/`develop`.
- **Rebase vs Merge**: Use *squash-and-merge* or rebase for feature branches to keep history clean; keep `main` history linear when possible.

## Alternative: GitHub Flow (simpler)

If this project is small or a solo effort, a minimal strategy is often enough:

- `main` is always deployable.
- Create `feature/<name>` branches from `main`.
- Open a PR, review, and merge back to `main`.
- Deploy immediately after merge.

This is the easiest model to maintain and is recommended for most small/medium projects.

## Decision

**Recommendation:** Start with **GitHub Flow** (`main` + short-lived `feature/` branches) for simplicity. Evolve to full **Git Flow** (add `develop`, `release/`, `hotfix/`) when the team grows or concurrent releases become routine.
