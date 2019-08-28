import * as Cortex from 'cortex';

class Application extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [
            <HTMLAnchorElement onclick={ () => console.log('clicked') } textContent='Click Me'/>
        ];
    }
}

export default Application;
