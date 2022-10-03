# Overview

## Workspace

```dataview 
table split(filter(split(tags, " "), (t) => contains(t, "state"))[0],"/")[1] as State, project as "Related to",  created_at as "Creation Date", split(filter(split(tags, " "), (t) => contains(t, "type"))[0],"/")[1] as Type
from "permanent" or "reference"
sort split(filter(split(tags, " "), (t) => contains(t, "state"))[0],"/")[1] desc
```
