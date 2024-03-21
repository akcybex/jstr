# singular

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.singular("men");
console.log(result); // Outputs: 'man'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.singular("dogs");

console.log(result); // Outputs: 'dog'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("feet").singular().toString();

console.log(result); // Outputs: 'foot'
```

### Example#4

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("fist").singular().toString();

console.log(result); // Outputs: 'fish'
```
