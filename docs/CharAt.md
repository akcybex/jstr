# CharAt

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Hello world").charAt(2).toString();
console.log(result); // Outputs: 'l'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.charAt("This is my name", 5);

console.log(result); // Outputs: 'i'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.charAt("This is my name", 50);

console.log(result); // Outputs: false
```
