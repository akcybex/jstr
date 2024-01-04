# rtrim

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStrof("/Beautiful/").rtrim("/").toString();
console.log(result); // Outputs: '/Beautiful'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("$$$$$Hello$").ltrim("$").toString();

console.log(result); // Outputs: '$$$$$Hello'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.ltrim("   Hello   ");

console.log(result); // Outputs: '   Hello'
```

### Example#4

```javascript
import JStr from "@akcybex/jstr";

const result = JStrof("/Beautiful/").rtrim("/").ltrim("/").toString();
console.log(result); // Outputs: 'Beautiful'
```
