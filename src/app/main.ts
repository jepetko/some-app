import alias from 'module-alias';
import path from 'path';
import {Container, Inject} from 'typescript-ioc';

// handle alias properly for the local development (ts-node-dev) and production (node)
const extension = path.extname(process.mainModule.filename);
alias.addAlias('@awesome-lib', path.join(process.cwd(), 'node_modules', 'some-lib', 'dist'));
alias.addAlias('@awesome/app', (extension === '.ts') ? __dirname : `${process.cwd()}/build`);

import {B} from '@awesome-lib/b';

export class Main {

    constructor(@Inject private b: B) {
        console.info('Main injected b: ', this.b);
    }
}

Container.get(Main);
