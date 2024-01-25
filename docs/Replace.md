# Replace

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const search = "world";
const replaceValue = "planet";
const subject = "Hello, world!";
const result = JStr.replace(search, replaceValue, subject);
console.log(result); // Outputs: 'Hello, planet!'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const search = ["o", "l"];
const replaceValue = ["O", "L"];
const subject = "Hello, world!";
const result = JStr.replace(search, replaceValue, subject);

console.log(result); // Outputs: 'HeLLO, wOrLd!'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const search = "o";
const replaceValue = "O";
const subject = "Hello, world!";
const result = JStr.of(subject).replace(search, replaceValue).toString();

console.log(result); // Outputs: 'HellO, wOrld!'
```
