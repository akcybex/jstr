# IsEmpty

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of("  ").trim().isEmpty();
console.log(str); // Outputs: true
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of('  ').squish().isEmpty();
console.log(str); // Outputs: true
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of('hello').isEmpty();
console.log(str); // Outputs: false
```
