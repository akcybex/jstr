# Start

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.start("world", "hello ");
console.log(result); // Outputs: 'hello world'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.start("*world", "*");

console.log(result); // Outputs: '*world'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("world").start("😊 ").toString();

console.log(result); // Outputs: '😊 world'
```
