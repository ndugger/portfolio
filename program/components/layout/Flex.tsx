import * as Cortex from 'cortex';

type FlexDirection = 'horizontal' | 'vertical';

class Flex extends Cortex.Component {

    public direction: FlexDirection = 'horizontal';
    public grow: boolean = false;
    public justify: string = 'unset';
    public shrink: boolean = false;

    public render(): Cortex.Element[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: flex;
                flex-direction: ${ this.direction === 'horizontal' ? 'row' : 'column' };
                flex-grow: ${ this.grow ? 1 : 0 };
                flex-shrink: ${ this.shrink ? 1 : 0 };
                justify-content: ${ this.justify };
            }
        `;
    }
}

export default Flex;
