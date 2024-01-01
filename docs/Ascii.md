# Ascii

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("úá").ascii().toString();
console.log(result); // Outputs: 'ua'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.ascii("héllò wörld");

console.log(result); // Outputs: 'hello world'
```
