# Match

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const pattern = /(\d{4})-(\d{2})-(\d{2})/g;
const subject = "The date is 2024-01-15";

const result = JStr.match(pattern, subject);
console.log(result); // Outputs: '2024-01-15'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const pattern = /(ab)*c/gi;
const subject = "ababcabab";
const result = JStr.match(pattern, subject);

console.log(result); // Outputs: 'ababc'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const pattern = /hello/;
const subject = "hello, world!";
const result = JStr.of(subject).match(pattern).toString();

console.log(result); // Outputs: 'hello'
```
