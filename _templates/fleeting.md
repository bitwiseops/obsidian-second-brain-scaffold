<%*
await tp.file.rename(tp.date.now("X"))
await tp.user.prepare(tp, "fleeting")
%>---
created_at: <%tp.date.now("DD-MM-YYYY")%>
project:  <%tp.config.target_file.project%>
tags: 
 type/fleeting
---

- 