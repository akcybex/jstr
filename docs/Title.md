# Title

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of("hello world").capitalize().toString();
console.log(str); // Outputs: 'Hello World'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.of("HeLLo").capitalize().toString();
console.log(str); // Outputs: 'Hello'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const str = JStr.capitalize("hELLO world");
console.log(str); // Outputs: 'Hello World'
```
