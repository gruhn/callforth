
# Callforth :running:

A tiny utility library to replace callbacks with Promises where possible.
**Don't callback, callforth!**

It basically includes two functions I see myself re-implementing in nearly every project.
So I might as well put them in a package.

Do things like:

```js
await timeout(3000);

await eventOn(videoElement, "loadeddata");

let message = await eventOn(webWorker, "message");
```

## Install :package:

```sh
npm install callforth
```

Now you can:

```js
import { eventOn, timeout } from "callforth"
```

## API

### `eventOn`

```js
let payload = await eventOn(target, successEvent, errorEvent)
```

#### Parameters

 * `target`: anything you can call `addEventListener` on.
 * `successEvent`: name of the event you want to await.
 * `errorEvent` (optional): if this event fires, the promise is rejected.

#### Return Value

 * `payload`: what would usually be the first argument of the callback.

### `timeout`

```js
await timeout(delay)
```

#### Parameters

 * `delay`: delay in milliseconds after which the Promise should resolves.

#### Return Value

 * `undefined`
