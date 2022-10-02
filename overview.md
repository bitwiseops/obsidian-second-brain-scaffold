# Projects
```dataview
table
from "project"
```

# On going
```dataview 
table project as "Related to", created_at as "Creation Date"
from #state/ongoing
sort created_at asc
```
# New
```dataview 
table project as "Related to", created_at as "Creation Date"
from #state/new
sort created_at asc
```
# Done
```dataview 
table project as "Related to", created_at as "Creation Date"
from #state/done
sort created_at asc
```