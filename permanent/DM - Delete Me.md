---
created_at: 03-10-2022
alias: Delete Me
project: Delete Me
tags: 
 state/new
 type/permanent
---

# Delete Me





---
## Links
- 

### Unlinked Fleetings
```dataview
list "created at " + created_at
from #type/fleeting and !outgoing([[]])
where project = "Delete Me"
sort created_at desc
```
### Unlinked References
```dataview
list "created at " + created_at
from #type/reference and !outgoing([[]])
where project = "Delete Me"
sort created_at desc
```