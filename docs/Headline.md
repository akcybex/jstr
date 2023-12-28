# Headline

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of("hello world").headline().toString();
console.log(str); // Outputs: 'Hello World'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of("HeLLo").headline().toString();
console.log(str); // Outputs: 'He Llo'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.headline("hELLOworld");
console.log(str); // Outputs: 'H Elloworld'
```
