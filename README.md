[![gzip size](https://badgen.net/bundlephobia/minzip/kebab)](https://bundlephobia.com/result?p=keebab)

[![install size](https://packagephobia.now.sh/badge?p=keebab)](https://packagephobia.now.sh/result?p=keebab)

[![CI / build](https://github.com/luke-h1/keebab/actions/workflows/build.yml/badge.svg)](https://github.com/luke-h1/kebab/actions/workflows/build.yml)


> Give me a normal string and I will kebabify it! 

## Features 
- Kebabify a string 


## Install 
```
npm install keebab
```

## usage 
```
import keebab from "keebab";

const str = "Hello World" 

keebab(str) // => returns Hello-World
```

## API 
```ts 
function (input: string): string {} 
```

### keebab(value) 
Throws a type error if the provided values is not a string
