## Squash Commits

```
 git checkout yourBranch
 git reset $(git merge-base master yourBranch)
 git add -A
 git commit -m "one commit on yourBranch"

```
