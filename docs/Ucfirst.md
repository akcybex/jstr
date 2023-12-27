# Ucfirst

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const str = JStr.of("hello world").ucfirst().toString();
console.log(str); // Outputs: 'Hello world'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const str = JStr.of("hELLO world").ucfirst().toString();
console.log(str); // Outputs: 'HELLO world'
```

### Example#3

```javascript
import JStr from "@akcybex/jsr";

const str = JStr.ucfirst("hELLO world");
console.log(str); // Outputs: 'HELLO world'
```
