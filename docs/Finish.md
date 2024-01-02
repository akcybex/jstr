# Finish

#### The finish method adds a single instance of the given value to a string if it does not already end with that value

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr..of("Hello").finish(" world").toString();
console.log(result); // Outputs: "Hello world"
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Hello world").finish("world").toString();
console.log(result); // Outputs: "Hello world"
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.finish("this/string", "/")
console.log(result); // Outputs: this/string/
```
