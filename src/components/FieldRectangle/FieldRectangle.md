```js noeditor
import { sizeOfField } from "./styled/FieldRectangleStyled.js";
`Width and height of field part is ${sizeOfField}px.`;
```

Field:

```js
<FieldRectangle />
```

Empty field shooted by an opponent:

```js
<FieldRectangle hasShooted/>
```

Field with ship part on it:

```js
<FieldRectangle hasShip />
```

Field with shooted ship part:

```js
<FieldRectangle hasShip hasShooted/>
```
