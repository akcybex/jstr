# Contains

### Example#1

```javascript
import JStr from "@akcybex/jsr";

const jstr = new JStr("Hello world");
const result = jstr.contains("world");
console.log(result); // Outputs: 'true'
```

### Example#2

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of("This is my name").contains("my name");

console.log(result); // Outputs: 'true'
```

### Example#3

```javascript
import JStr from "@akcybex/jsr";

const result = JStr.of(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
).contains(["typesetting industry", "of"]);

console.log(result); // Outputs: 'true'
```
