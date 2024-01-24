# IsMatch

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const pattern = /(\d{4})-(\d{2})-(\d{2})/g;
const subject = "The date is 2024-01-15";

const result = JStr.isMatch(pattern, subject);
console.log(result); // Outputs: true
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const pattern = /(ab)*c/gi;
const subject = "ababcabab";
const result = JStr.isMatch(pattern, subject);

console.log(result); // Outputs: true
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const pattern = /abc/;
const subject = "xyz";
const result = JStr.of(subject).match(pattern);

console.log(result); // Outputs: false
```
