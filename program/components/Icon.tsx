import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';

class Icon extends Cortex.Component {

    public glyph: string;
    public size: number = 24;

    public render(): Cortex.Element[] {
        return [
            <Block height={ `${ this.size }px` } inline width={ `${ this.size }px` }>
                { this.glyph }
            </Block>
        ];
    }

    public theme(): string {
        return `
            :host {
                font-family: Material Icons;
                font-weight: normal;
                font-style: normal;
                font-size: ${ this.size }px;  /* Preferred icon size */
                line-height: 1;
                text-transform: none;
                letter-spacing: normal;
                word-wrap: normal;
                white-space: nowrap;
                direction: ltr;

                /* Support for all WebKit browsers. */
                -webkit-font-smoothing: antialiased;

                /* Support for Safari and Chrome. */
                text-rendering: optimizeLegibility;

                /* Support for Firefox. */
                -moz-osx-font-smoothing: grayscale;

                /* Support for IE. */
                font-feature-settings: 'liga';
            }
        `;
    }
}

export default Icon;
