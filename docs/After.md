# After

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const jstr = new JStr("Hello world");
const result = jstr.after("Hello");
console.log(result); // Outputs: 'world'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("This is my name").after("This is");

console.log(result); // Outputs: ' my name'
```
