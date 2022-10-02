---
created_at: 02-10-2022
alias: Sample 1
project: Project Y
tags: 
 state/new
 type/permanent
---

# Sample 1





---
## Links
- [[1664735646]]

### Unlinked Fleetings
```dataview
list "created at " + created_at
from #type/fleeting and !outgoing([[PY - Sample 1]])
where project = "Project Y"
sort created_at desc
```
### Unlinked References
```dataview
list "created at " + created_at
from #type/reference and !outgoing([[PY - Sample Y]])
where project = "Project Y"
sort created_at desc
```