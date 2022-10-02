---
created_at: 02-10-2022
alias: Sample 2
project: Project Y
tags: 
 state/new
 type/permanent
---

# Sample 2





---
## Links
- 

### Unlinked Fleetings
```dataview
table created_at as "Creation Date"
from #type/fleeting and !outgoing([[PY - Sample 2]])
where project = "Project Y"
sort created_at desc
```
### Unlinked References
```dataview
table created_at as "Creation Date"
from #type/reference and !outgoing([[PY - Sample 2]])
where project = "Project Y"
sort created_at desc
```