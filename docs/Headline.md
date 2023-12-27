# Headline

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const str = JStr.of("hello world").headline().toString();
console.log(str); // Outputs: 'Hello World'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const str = JStr.of("hELLO world").headline().toString();
console.log(str); // Outputs: 'Hello World'
```

### Example#3

```javascript
import JStr from "@akcybex/jsr";

const str = JStr.ucfirst("hELLOworld");
console.log(str); // Outputs: 'Hello World'
```
