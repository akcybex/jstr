# isUrl

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("http://example.com").isUrl();
console.log(result); // Outputs: true
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("beautifull").isUrl();

console.log(result); // Outputs: false
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.isUrl("https://www.example.com/page");

console.log(result); // Outputs: true
```
