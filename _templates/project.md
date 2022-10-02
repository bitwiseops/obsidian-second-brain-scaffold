<%*
const title = await tp.system.prompt("Project title")
tp.config.target_file.title = title
await tp.file.rename(title)
%>---
created_at: <%tp.date.now("DD-MM-YYYY")%>
tags: 
 type/project
---

# MOC

## Missing
```dataview
list 
from #type/permanent and !outgoing([[<% tp.config.target_file.title %>]])
where project = "<% tp.config.target_file.title %>"
```


# Fleeting

## Missing
```dataview
list 
from #type/fleeting and !outgoing([[<% tp.config.target_file.title %>]])
where project = "<% tp.config.target_file.title %>"
```