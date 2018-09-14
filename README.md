This Software Follow *Semantic Versioning Specification* [SemVer](http://semver.org/)

# gsorter

## Task
Implement a class **gSorter** capable to store different data types with the following implementation:
- [x] `constructor()` - creates an instance of *gSorter* class and sets the default comparator for integers
- [x] `add(element)`  - adds an element to the incapsulated storage
- [x] `length()`      - returns the count of elements in the storage
- [x] `toArray()`     - returns the copy of stored elements
- [x] `sort(indices)` - sorts the elements by passed indices
- [x] `setComparator(comparator)` - accepts the function to compare elements

### Example:
```js
let gsorter = new gSorter();

gsorter.add(7);
gsorter.add(1);
gsorter.add(5);

console.log(gsorter.length);    // 3
gsorter.sort([0, 1]);
console.log(gsorter.toArray()); // [1, 7, 5]
```

### Requirements
* `src/index.js` - the solution file
* `test/test.js` - the file to *test the solution*

### Version
* The working code should reside in the **gsorter branch**
* No less than two git commits and push to `© GitHub`

### Tips
* `npm ini`     - initialize the repository and *follow the instructions*
* `npm i mocha` - install the **Mocha** *test framework*
* `npm t`       - test the solution
* `open package.json and edit:`
```json
  "scripts": {
    "test": "mocha test/test.js"
  }
```

#### Optional
* `npm i babel-preset-env --save-dev` - use the *latest JavaScript*
* `npm i babel-core --save-dev`       - convert the source code into a *compatible JavaScript*
* `open package.json and edit:`
```json
  "scripts": {
    "init": "mkdir dist",
    "clean": "rm -rf dist",
    "note": "cp LICENSE README.md dist",
    "build": "babel src test -d dist --presets env && npm run note",
    "test": "npm run build && mocha --require babel-core/register dist/test.js"
  }
```
