import * as Cortex from 'cortex';

import Palette from 'program/theme/Palette';

type TypographyType = 'code' | 'content' | 'heading';

class Typography extends Cortex.Component {

    public bold: boolean;
    public size: number = 1;
    public type: TypographyType = 'content';

    public render(): Cortex.Element[] {
        return [
            <HTMLSpanElement id={ this.type }>
                <HTMLSlotElement/>
            </HTMLSpanElement>
        ];
    }

    public theme(): string {
        return `
            :host {
                font-size: ${ this.size }rem;
                font-weight: ${ this.bold ? 'bold' : '300' };
            }

            #code {
                font-family: ${ Palette.font.code };
                font-weight: ${ this.bold ? 'bold' : '400' };
            }

            #content {
                font-family: ${ Palette.font.content }, sans-serif;
            }

            #heading {
                font-family: ${ Palette.font.heading }, serif;
                line-height: ${ this.size }rem;
            }
        `;
    }
}

export default Typography;
