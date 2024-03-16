# pluralStudly

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.pluralStudly("manwoman");
console.log(result); // Outputs: 'manwomen'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.pluralStudly("Babyboy");

console.log(result); // Outputs: 'Babyboys'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("forkKnife").pluralStudly().toString();

console.log(result); // Outputs: 'forkKnives'
```

### Example#4

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("fish").pluralStudly().toString();

console.log(result); // Outputs: 'fish'
```
