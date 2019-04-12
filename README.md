# Short-pla
## Super simple to use

# Installing globally:

Installation via `npm`:
´npm i short-pla --s´

## Usage
´´´js
const { print, prompt, arg} = require('short-pla');

´´´

## Console.log
```js
//Before
console.log('hello world')
//Now
print('hello world')
```

## Prompt
Usage:
´´´js
prompt(message, default, (ans)=>{// body...})
´´´

Example
´´´js
prompt('How are you today?', 'fine', (ans) => {
	print(ans)
})
//Or without a default
prompt('How are you today?', (ans) => {
	print(ans)
})

## arg
Usage:
´´´js
if (arg)
	print(arg)
´´´
