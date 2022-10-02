<%*
const title = await tp.system.prompt("Note title")
const relatedProject = await tp.system.suggester(tp.user.get_projects(), tp.user.get_projects(), true, "Choose a project")
tp.config.target_file.title = title
tp.config.target_file.relatedProject = relatedProject
const relatedProjectInitials = relatedProject.split(" ").map( e => e[0].toUpperCase()).join("")
const filename = relatedProjectInitials + " - " + title
tp.config.target_file.filename = filename
await tp.file.rename(filename)
%>---
created_at: <%tp.date.now("DD-MM-YYYY")%>
alias: <%tp.config.target_file.title%>
project: <%tp.config.target_file.relatedProject%>
tags: 
 state/new
 type/permanent
---

# <% tp.config.target_file.title %>





---
# Links
- 

## Fleetings
```dataview
table created_at as "Creation Date"
from #type/fleeting and !outgoing([[<% tp.config.target_file.filename %>]])
where project = "<%tp.config.target_file.relatedProject%>"
sort created_at desc
```