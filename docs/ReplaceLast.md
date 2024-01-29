# ReplaceLast

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const search = "world";
const replaceFirstValue = "planet";
const subject = "Hello, world!";
const result = JStr.replaceLast(search, replaceFirstValue, subject);
console.log(result); // Outputs: 'Hello, planet!'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const search = "apple";
const replaceFirstValue = "";
const subject = "apple banana apple";
const result = JStr.replaceLast(search, replaceValue, subject);

console.log(result); // Outputs: 'apple banana '
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const search = "apple";
const replaceFirstValue = "orange";
const subject = "apple banana apple apple";
const result = JStr.of(subject)
  .replaceLast(search, replaceFirstValue)
  .toString();

console.log(result); // Outputs: 'apple banana apple orange'
```
