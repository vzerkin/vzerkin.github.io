# My Web pages
by V.Zerkin, 2024

## JSON-Tree Editor

### Purpose/Features/Links:
* Currently, the main goal: development of JSON formats for nuclear data
* Presenting any JSON text as interactive tree in order to 
  learn/understand/compare/discuss data formats: structures/contents/hierarchy
* Test samples: JSON files generated by nuclear data systems
  [EXFOR](https://nds.iaea.org/exfor/),
  [ENDF](https://nds.iaea.org/endf/),
  [Web-API](https://nds.iaea.org/exfor/x4guide/API/),
  [NSR](https://www.nndc.bnl.gov/nsr-dev/),
  ENSDF,
  etc.
* Viewer-part is extendable to display specific information along with the node name
* Editor implements operations: 
  * File: new/save/open local JSON file
  * Edit: undo/redo
  * View: open 1 level of nesting, 2 levels, 3 levels, ..., open all nodes
  * History: view history of operations, select and roll back to previous editing steps
  * Tool: minify/expand/iTable current JSON text in pupup-window
  * Node in the graph-tree: JSON _\<key-value\>_
    * Edit: modify/clear/check/minify/expand/copy/paste JSON-text of "value" and modify "key"
    * Add: edit Node and save it as new Node, add item to Array
    * Move: move whole Node up and down
    * Remove: delete whole Node
* Edit-json-tree online:
  * vzerkin.github.io: [edit-json-tree](https://vzerkin.github.io/edit-json-tree/),
    [x5](https://vzerkin.github.io/edit-json-tree/#1),
    [x4std](https://vzerkin.github.io/edit-json-tree/#10),
    [ensdf](https://vzerkin.github.io/edit-json-tree/#5),
    [pace_ensdf](https://vzerkin.github.io/edit-json-tree/#11);
    parallel view/edit: [exfor](https://vzerkin.github.io/edit-json-tree/cmp2exfor.htm),
    [nsr](https://vzerkin.github.io/edit-json-tree/cmp2nsr.htm)
  * zerkin.usite.pro: [edit-json-tree](https://zerkin.usite.pro/edit-json-tree/),
    [x5](https://zerkin.usite.pro/edit-json-tree/#1),
    [x4std](https://zerkin.usite.pro/edit-json-tree/#10),
    [ensdf](https://zerkin.usite.pro/edit-json-tree/#5),
    [pace_ensdf](https://zerkin.usite.pro/edit-json-tree/#11);
    parallel view/edit: [exfor](https://zerkin.usite.pro/edit-json-tree/cmp2exfor.htm),
    [nsr](https://zerkin.usite.pro/edit-json-tree/cmp2nsr.htm)
* Editor can also be used in local Web-Browser without Web-server.
