# Trim

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of("   Hello World   ").trim().toString();
console.log(str); // Outputs: 'Hello World'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of("***Hello World***").trim("*").toString();
console.log(str); // Outputs: 'Hello World'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.trim("***Hello World***", "*");
console.log(str); // Outputs: 'Hello World'
```
