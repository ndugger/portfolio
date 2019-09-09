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
                display: inline-block;
                font-size: ${ this.size }rem;
                font-weight: ${ this.bold ? 'bold' : '300' };
                max-width: 960px;
                cursor: default;
                user-select: text;
            }

            :host::selection {
                background-color: ${ Palette.black.opacity(0.3) };
                color: ${ Palette.white.opacity(0.5) };
                opacity: 1;
                tex-shadow: none;
            }

            #code {
                font-family: ${ Palette.font.code };
                font-weight: ${ this.bold ? 'bold' : '400' };
            }

            #content {
                font-family: ${ Palette.font.content }, sans-serif;
                line-height: 1.8;
            }

            #heading {
                font-family: ${ Palette.font.heading }, serif;
                line-height: ${ this.size }rem;
            }
        `;
    }
}

export default Typography;
