# password

##### The password method may be used to generate a secure, random password of a given length. The password will consist of a combination of letters, numbers, symbols, and spaces. By default, passwords are 32 characters long
###


There are different parameters that are very useful to generate what you want.
* @param {number} length - The length of the password.
* @param {boolean} letters - Include letters in the password.
* @param {boolean} numbers - Include numbers in the password.
* @param {boolean} symbols - Include symbols in the password.
* @param {boolean} spaces - Include spaces in the password.
* @returns {string} A random password based on the specified criteria.

### Example#1

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.password();
console.log(result); // Outputs: '#YJ13cz4dElnLfQOOc;2g7eDqq5(!DbY'
```

### Example#2

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.password(12);
console.log(result); // Outputs: '(qhL>KU1TrZU'
```

### Example#3

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.password(12, false);
console.log(result); // Outputs: ']]*},_.-:!5;'
```

### Example#4

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.password(12, false, false);
console.log(result); // Outputs: '??]{,.>*_]>}'
```
### Example#5

```javascript
import JStr from "@akcybex/jstr";

const result = JStr.password(20, true, true, false);
console.log(result); // Outputs: 'vCJYVfBzXXeuWOGjWCEj'