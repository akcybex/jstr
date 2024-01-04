# kebab

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("fooBar").kebab().toString();
console.log(result); // Outputs: 'foo-bar'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.kebab("Hello world");

console.log(result); // Outputs: 'hello-world'
```
