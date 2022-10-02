<%*
const title = await tp.system.prompt("Reference title")
tp.config.target_file.title = title
const relatedProject = await tp.system.suggester(tp.user.get_projects(), tp.user.get_projects(), true, "Choose a project")
tp.config.target_file.relatedProject = relatedProject
await tp.file.rename(title)
%>---
created_at: <%tp.date.now("DD-MM-YYYY")%>
author: 
url:
project: <%tp.config.target_file.relatedProject%>
tags: 
 state/new
 type/reference
 medium/<%await tp.system.suggester(tp.user.get_mediums(), tp.user.get_mediums(), true, "Choose a medium")%>
---

# <% tp.config.target_file.title  %>






---
## Links
- 

### Unlinked Fleetings
```dataview
list "created at " + created_at
from #type/fleeting and !outgoing([[<% tp.config.target_file.title %>]])
where project = "<%tp.config.target_file.relatedProject%>"
```