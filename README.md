# fxhash-ts-p5

fxhash template for WebPack, TypeScript and p5.js.
Let us be more creative with assistance of TypeScript🎨

## Get started

Clone this repo and install dependency modules.

```
> git clone https://github.com/nama-gatsuo/fxhash-ts-p5
> npm i
```

Start coding from '.src/index.ts'

```ts
import * as p5 from 'p5';
import { rand } from './utils/rand';

// Declare fxhash features at first so you can read them later.
const fxhashFeatures = {
    // Temporaliy params here, delete them.
    theme: rand() > 0.5 ? 'light' : 'dark',
    'test rand value': rand(0, 10.0),
};

// Here is your sketch, instance mode.
const sketch = (P: p5) => {
    P.preload = () => {

    };

    P.setup = () => {

        const canvas = P.createCanvas(P.windowWidth, P.windowHeight);
        canvas.id('p5');

    };

    P.draw = () => {

    };

    P.windowResized = () => {
        P.resizeCanvas(P.windowWidth, P.windowHeight);
    }

};

// entry point
(() => {
    window.$fxhashFeatures = fxhashFeatures;

    const container = document.getElementById('container');
    if (container) {
        const msg = document.getElementById('message');

        if (msg) msg.innerHTML = 'Generating...';

        // Let's create p5 instance!
        new p5(sketch, container);

        if (msg) msg.remove();
    }
})();

```

## Commands

* `npm run fix` : to run ESLint and prettier to format source code nicely.
* `npm run dev` : to start dev server for development
* `npm run build` : to compile html and bundles into a zip file

## Random function

Let's use `rand()` instead of either `Math.random()`, `p5.random()` or `fxrand()`.  
`rand()` will return a desirable random value.  
On the build mode, `rand()` will return `fxrand()` value so the platform can generate unique NFT.  
On the dev mode, `rand()` will return `Math.random()` value so a developer can iterate random variations quickly.

## Reference

* [fxhash / fxhash-webpack-boilerplate](https://github.com/fxhash/fxhash-webpack-boilerplate)
* [MatthieuSegret / fxhash-template](https://github.com/MatthieuSegret/fxhash-template)