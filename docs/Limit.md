# limit

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Lorem ipsum dolor sit amet").limit(10).toString();
console.log(result); // Outputs: Lorem ipsu...
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Lorem ipsum dolor sit amet")
  .limit(10, "***")
  .toString();

console.log(result); // Outputs: Lorem ipsu***
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.limit("Lorem ipsum dolor sit amet", 10);

console.log(result); // Outputs: Lorem ipsu...
```
