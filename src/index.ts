import * as p5 from 'p5';
import { rand } from './utils/rand';

// Declare fxhash features at first so you can read them later.
const fxhashFeatures = {
    // Temporaliy params here, delete them.
    theme: rand() > 0.5 ? 'light' : 'dark',
    'test rand value': rand(0, 10.0),
};

const sketch = (P: p5) => {
    P.preload = () => {

    };

    P.setup = () => {

    };

    P.draw = () => {

    };
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
