# MatchAll

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const pattern = /\d+/;
const subject = "abc123def456";

const result = JStr.matchAll(pattern, subject);
console.log(result); // Outputs: ["123", "456"]
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const pattern = /(ab)*c/;
const subject = "ababcabab";
const result = JStr.matchAll(pattern, subject);

console.log(result); // Outputs: ["ab"]
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const pattern = /abc/;
const subject = "xyz";
const result = JStr.of(subject).matchAll(pattern);

console.log(result); // Outputs: []
```
