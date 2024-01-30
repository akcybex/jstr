# Snake

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.snake("camelCaseString");
console.log(result); // Outputs: 'camel_case_string'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Mixed Case String").lower().snake().toString();

console.log(result); // Outputs: 'mixed_case_string'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("customDelimiterString").snake("-").toString();

console.log(result); // Outputs: 'custom-delimiter-string'
```
