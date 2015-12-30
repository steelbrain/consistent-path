Consistent-PATH
===================

`consistent-path` is an npm module that makes sure that you get the correct `$PATH` value even on GUI apps on OSX. It does not modify the globals and caches the result to avoid unnecessary work.

#### API

```js
export function getPath(): String
```

#### Example Usage

```js
import {spawnSync} from 'child_process'
import {getPath} from 'consistent-path'

const assign = Object.assign || require('some-object-assign-polyfill')

const env = assign({}, process.env, {PATH: getPath()})
console.log('$PATH', spawnSync('printenv', {env}))
```

#### LICENSE
This project is licensed under the terms of MIT License
