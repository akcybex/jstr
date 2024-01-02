# ContainsAll
#### The containsAll method determines if the given string contains all of the values in a given array

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Hello world").containsAll(["Hello"]);
console.log(result); // Outputs: true
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("We are saying hello to you").containsAll([
  "hello",
  "why",
]);
console.log(result); // Outputs: false
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.containsAll("Hello world", ["Hello", "world"]);
console.log(result); // Outputs: true
```
