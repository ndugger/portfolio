import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Typography from 'program/components/Typography';

import Palette from 'program/theme/Palette';

class Heading extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [
            <Typography size={ 1.5 } type='heading'>
                <HTMLSlotElement/>
            </Typography>,
            <Block id='border'/>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: block;
            }

            #border {
                background-color: ${ Palette.tertiary.medium };
                box-shadow:
                    0 0 32px ${ Palette.main.dark.opacity(0.8) },
                    0 0 12px ${ Palette.tertiary.medium.opacity(0.5) };
                height: 1px;
                margin: 12px 0;
            }
        `;
    }
}

export default Heading;
