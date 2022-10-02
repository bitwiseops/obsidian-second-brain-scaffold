<%await tp.file.rename(tp.date.now("X"))%>---
created_at: <%tp.date.now("DD-MM-YYYY")%>
project: <%await tp.system.suggester(tp.user.get_projects(), tp.user.get_projects(), true, "Choose a project")%>
tags: 
 type/fleeting
---

- 