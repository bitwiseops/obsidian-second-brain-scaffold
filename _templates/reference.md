<%*
const title = await tp.system.prompt("Reference title")
tp.config.target_file.title = title
await tp.file.rename(title)
%>---
alias: 
created_at: <%tp.date.now("DD-MM-YYYY")%>
author: 
url:
tags: 
 state/new
 type/reference
 medium/<%await tp.system.suggester(tp.user.get_mediums(), tp.user.get_mediums(), true, "Choose a medium")%>
---

# <% tp.config.target_file.title  %>