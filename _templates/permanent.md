<%*
const title = await tp.system.prompt("Note title")
const relatedProject = await tp.system.suggester(tp.user.get_projects(), tp.user.get_projects(), true, "Choose a project")
tp.config.target_file.title = title
tp.config.target_file.relatedProject = relatedProject
const relatedProjectInitials = relatedProject.split(" ").map( e => e[0].toUpperCase()).join("")
await tp.file.rename(relatedProjectInitials + " - " + title)
%>---
alias: <%tp.config.target_file.title%>
created_at: <%tp.date.now("DD-MM-YYYY")%>
project: <%tp.config.target_file.relatedProject%>
tags: 
 state/new
 type/permanent
---

# <% tp.config.target_file.title %>

# References
- 