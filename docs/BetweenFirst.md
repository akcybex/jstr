# Between First

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("[a]bc[d]").betweenFirst("[", "]").toString();
console.log(result); // Outputs: 'a'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.betweenFirst("[a]bcd", "[", "");

console.log(result); // Outputs: '[a]bcd'
```
