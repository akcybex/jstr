# EndsWith
#### The endsWith method determines if the given string ends with the given value

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Hello world").endsWith("Hello");
console.log(result); // Outputs: false
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.endsWith("We are saying hello to you", "you");
console.log(result); // Outputs: true
```
