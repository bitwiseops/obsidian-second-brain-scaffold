<%*
tp.config.target_file.title = await tp.system.prompt("Reference title")
await tp.file.rename(tp.config.target_file.title)

await tp.user.prepare(tp, "reference")
%>---
created_at: <% tp.date.now("DD-MM-YYYY") %>
url: <% tp.config.target_file.url %>
author: <% tp.config.target_file.author %>
project: <% tp.config.target_file.project %>
tags: 
 state/new
 type/reference
 medium/<% tp.config.target_file.medium %>
---

# <% tp.config.target_file.title  %>






---
## Links
- [[<%tp.config.target_file.reference%>]]

### Unlinked Fleetings
```dataview
list "created at " + created_at
from #type/fleeting and !outgoing([[]])
where project = "<%tp.config.target_file.relatedProject%>"
```