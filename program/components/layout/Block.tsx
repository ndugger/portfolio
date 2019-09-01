import * as Cortex from 'cortex';

class Block extends Cortex.Component {

    public inline: boolean;

    public render(): Cortex.Element[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: ${ this.inline ? 'inline-' : '' }block;
            }
        `;
    }
}

export default Block;
