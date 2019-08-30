import * as Cortex from 'cortex';

import Palette from 'this/theme/palette';

class Application extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [
            <HTMLDivElement id='overlay'/>
        ];
    }

    public theme(): string {
        return `
            :host {
                background-color: ${ Palette.main.medium };
                display: block;
                height: 100%;
                position: relative;
                user-select: none;
                width: 100%;
            }

            #overlay {
                background-image: ${ Palette.textures.backdrop };
                background-position: center center;
                background-size: cover;
                bottom: 0;
                left: 0;
                opacity: 0.08;
                position: absolute;
                right: 0;
                top: 0;
            }
        `;
    }
}

export default Application;
