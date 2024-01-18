# Mask

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.mask("1234567890", "X", 2, 6);
console.log(result); // Outputs: '12XXXXXX90'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.mask("abcdefgh", "X", 2, 2);

console.log(result); // Outputs: 'abXXefgh'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("abcdefgh").mask("X", 0, 3).toString();
console.log(result); // Outputs: 'XXXdefgh'
```
