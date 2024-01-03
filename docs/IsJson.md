# isJson

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const validJsonString = '{"key": "value"}';
const result = JStr.of(validJsonString).isJson();
console.log(result); // Outputs: true
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const invalidJsonString = '{key: "value"}'; // Note: keys must be in double quotes for valid JSON
const result = JStr.of(invalidJsonString).isJson();

console.log(result); // Outputs: false
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const validJsonString = '{"key": "value"}';
const result = JStr.isJson(validJsonString);

console.log(result); // Outputs: true
```
