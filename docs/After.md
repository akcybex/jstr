# After

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.after("Hello world", "Hello");
console.log(result); // Outputs: 'world'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("This is my name").toString().trim().after("This is");

console.log(result); // Outputs: 'my name'
```
