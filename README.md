[![gzip size](https://badgen.net/bundlephobia/minzip/kebab)](https://bundlephobia.com/result?p=kebab)

[![install size](https://packagephobia.now.sh/badge?p=kebab)](https://packagephobia.now.sh/result?p=kebab)
[![CI / build](https://github.com/luke-h1/kebab/actions/workflows/build.yml/badge.svg)](https://github.com/luke-h1/kebab/actions/workflows/build.yml)

> Give me a normal string and I will kebabify it! 

## Features 
- Kebabify a string 


## Install 
```
npm install kebab 
```

## usage 
```
import kebab from "kebab";

const str = "Hello World" 

kebab(str) // => returns Hello-World
```

## API 
```ts 
function (input: string): string {} 
```

### kebab(value) 
Throws a type error if the provided values is not a string
