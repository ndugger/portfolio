import * as Cortex from 'cortex';

class Block extends Cortex.Component {

    public height: string;
    public inline: boolean;
    public padding: string;
    public width: string;

    public render(): Cortex.Element[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: ${ this.inline ? 'inline-' : '' }block;
                height: ${ this.height || 'auto' };
                padding: ${ this.padding || 0 };
                width: ${ this.width || 'auto' };
            }
        `;
    }
}

export default Block;
