# padRight

#### The padRight method, padding right side of a string with another string until the final string reaches a desired length

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("hello world").padRight(20).toString();
console.log(result); // Outputs: 'hello world         '
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr..of('hello').padRight(10, '-').toString();
console.log(result); // Outputs: 'hello-----'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.padRight("hello", 3);
console.log(result); // Outputs: 'hello'
```
