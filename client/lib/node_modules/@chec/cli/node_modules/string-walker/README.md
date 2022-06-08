# string-walker
This is a simple class that lets you navigate within a string. This is useful
when creating simple tokenizers for instance.

# Examples

**Print each character in the string**

```ts
import { StringWalker } from 'string-walker'

const str = 'My name is Pontus'
const s = new StringWalker(str)

while (!s.isEof()) {
  console.log(s.currentChar())
  s.next()
}

/*
Outputs:
M
y

n
a
m
e

i
s

P
o
n
t
u
s
*/
```

**Tokenize a simple key/value file**

Say we have a key/value file that allows for a syntax like:

```
key1: strvalue
key2 :  12
key3:some value
```

We don't care about the whitespace between the key, separator and value

```ts
import { StringWalker } from 'string-walker'

const str = `
key1: strvalue
key2 :  12
key3:some value`

const tokens: Array<{ type: string, value: string }> = []
const s = new StringWalker(str)

let state: 'key' | 'value' | 'none' = 'none'

while (!s.isEof()) {
  // Consume whitespace
  if (['\n', ' ', '\t'].includes(s.currentChar())) {
    s.consume(['\n', ' ', '\t'])
  }

  switch (state) {
    // When state is none we're expecting a key
    case 'none': {
      // Find the position of either space, tab or :
      const end = s.findNextOf([' ', '\t', ':'])

      // If end is NaN we got to the end of the string without finding
      // what we are looking for
      if (isNaN(end)) {
        throw new Error('Syntax error')
      }

      // The key is located from the current position to `end`
      const key = s.substring(s.position, end)
      tokens.push({ type: 'key', value: key })

      // Now move the cursor to where we found the character
      s.moveTo(end)

      state = 'key'

      break
    }

    // When state is `key` we're expecting the next token to be a delimiter
    case 'key': {
      if (s.currentChar() !== ':') {
        throw new Error(`Syntax error: Expected : got ${s.currentChar()}`)
      }

      tokens.push({ type: 'delimiter', value: ':' })

      // Next we're expecting a value
      state = 'value'

      // Move the cursor to the next position
      s.next()

      break
    }

    case 'value': {
      // The value should stretch to the end of the line
      let end = s.findNext('\n')

      // If end is NaN we've reached the end of the string
      if (isNaN(end)) {
        end = s.length
      }

      const val = s.substring(s.position, end)
      tokens.push({ type: 'value', value: val })
      s.moveTo(end)

      // Now we're expecting either whitespace to the end or a new key
      state = 'none'

      break
    }

    // We should never get here
    default:
      throw new Error('Unknown stuff')
  }
}

console.log(tokens)

/*
Expected output:
[
  { type: 'key', value: 'key1' },
  { type: 'delimiter', value: ':' },
  { type: 'value', value: 'strvalue' },
  { type: 'key', value: 'key2' },
  { type: 'delimiter', value: ':' },
  { type: 'value', value: '12' },
  { type: 'key', value: 'key3' },
  { type: 'delimiter', value: ':' },
  { type: 'value', value: 'some value' }
]
*/
```
