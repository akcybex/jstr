# plural

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.plural("man");
console.log(result); // Outputs: 'men'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.plural("dog");

console.log(result); // Outputs: 'dogs'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("foot").plural().toString();

console.log(result); // Outputs: 'feet'
```

### Example#4

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("fish").plural().toString();

console.log(result); // Outputs: 'fish'
```
