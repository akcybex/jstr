# remove

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.of("Arkansas is quite beautiful!")
  .remove("quite ")
  .toString();
console.log(result); // Outputs: Arkansas is beautiful!
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.remove(
  "e",
  "Peter Piper picked a peck of pickled peppers."
);

console.log(result); // Outputs: Ptr Pipr pickd a pck of pickld ppprs.
```
