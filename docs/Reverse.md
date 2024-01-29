# Reverse

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.reverse("hello");
console.log(result); // Outputs: 'olleh'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.reverse("12345");

console.log(result); // Outputs: '54321'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("😊🌟").reverse().toString();

console.log(result); // Outputs: '🌟😊'
```
