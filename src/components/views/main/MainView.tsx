import * as Cortex from 'cortex';

class MainView extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [
            <HTMLElement tag='h1'>Foo</HTMLElement>
        ];
    }
}

export default MainView;
