import {Container, Inject} from 'typescript-ioc';
import {B} from 'some-lib/dist/b';

export class Main {

    constructor(@Inject private b: B) {
        console.info('Main injected b: ', this.b);
    }
}

Container.get(Main);
