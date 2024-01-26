# ReplaceArray

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const search = "apple";
const replaceValue = ["banana"];
const subject = "I like apple and orange";
const result = JStr.of(subject).replaceArray(search, replaceValue).toString();
console.log(result); // Outputs: 'I like banana and orange'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const search = "$";
const replaceValue = ["Dollar", "Euro"];
const subject = "Pay $10 with €5";
const result = JStr.replaceArray(search, replaceValue, subject);

console.log(result); // Outputs: 'Pay Dollar10 with €5'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const search = "o";
const replaceValue = ["x"];
const subject = "hello world";
const result = JStr.replaceArray(search, replaceValue, subject);

console.log(result); // Outputs: 'hellx world'
```
