# get-midnight-date

Takes Date object and returns another Date object set to the same date at midnight local time.

## Install

```sh
$ npm install get-midnight-date --save
```

## Usage

```js
const GetMidnightDate = require('get-mignight-date');

let currentTime = new Date();
let today = GetMidnightDate(currentTime);
```
