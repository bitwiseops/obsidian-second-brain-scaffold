<%*
tp.config.target_file.title = await tp.system.prompt("Note title")
await tp.user.prepare(tp, "permanent")
await tp.file.rename(tp.config.target_file.project.split(" ").map( e => e[0].toUpperCase()).join("") + " - " + tp.config.target_file.title)
%>---
created_at: <%tp.date.now("DD-MM-YYYY")%>
alias: <%tp.config.target_file.title%>
project: <%tp.config.target_file.project%>
tags: 
 state/new
 type/permanent
---

# <% tp.config.target_file.title %>





---
## Links
- 

### Unlinked Fleetings
```dataview
list "created at " + created_at
from #type/fleeting and !outgoing([[]])
where project = "<%tp.config.target_file.project%>"
sort created_at desc
```
### Unlinked References
```dataview
list "created at " + created_at
from #type/reference and !outgoing([[]])
where project = "<%tp.config.target_file.project%>"
sort created_at desc
```