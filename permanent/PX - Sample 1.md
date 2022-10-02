---
created_at: 02-10-2022
alias: Sample 1
project: Project X
tags: 
 state/new
 type/permanent
---

# Sample 1





---
## Links
- [[1664735621]]
- [[Sample Article]]

### Unlinked Fleetings
```dataview
list "created at " + created_at
from #type/fleeting and !outgoing([[PX - Sample 1]])
where project = "Project X"
sort created_at desc
```
### Unlinked References
```dataview
list "created at " + created_at
from #type/reference and !outgoing([[PX - Sample 1]])
where project = "Project X"
sort created_at desc
```