# Between

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("The big lion and many fox fights each other for food")
  .between("big", "fights")
  .toString()
  .trim();
console.log(result); // Outputs: 'lion and many fox'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.between(
  "The big lion and many fox fights each other for food",
  "fox",
  "lion"
).trim();

console.log(result); // Outputs: 'fights each other for food'
```
