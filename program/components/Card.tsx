import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Typography from  'program/components/Typography';

import Palette from 'program/theme/Palette';

class Card extends Cortex.Component {

    public color: 'primary' | 'secondary' | 'tertiary' = 'secondary';
    public description: string;
    public height: string = 'auto';
    public name: string;
    public width: string = 'auto';

    public render(): Cortex.Element[] {
        return [
            <Block id='wrapper'>
                <Block id='name'>
                    <Typography bold size={ 0.85 } type='content'>
                        { this.name }
                    </Typography>
                    <Typography size={ 0.85 } type='content'>
                        &nbsp;|&nbsp;{ this.description }
                    </Typography>
                </Block>
                <Block id='content'>
                    <HTMLSlotElement/>
                </Block>
            </Block>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: contents;
            }

            #wrapper {
                background-color: ${ Palette.white.opacity(0.066) };
                box-shadow:
                    inset 0 0 48px ${ Palette.white.opacity(0.12) },
                    0 0 16px ${ Palette.black.opacity(0.2) };
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                height: ${ this.height };
                width: ${ this.width };
            }

            #name {
                align-items: center;
                background-color: ${ Palette.secondary.medium };
                box-shadow:
                    0 0 32px ${ Palette.main.dark.opacity(0.8) },
                    0 0 12px ${ Palette.secondary.medium.opacity(0.5) };
                display: flex;
                height: 48px;
                padding: 0 24px;
                text-shadow: none;
            }

            #content {
                display: flex;
                flex-grow: 1;
                padding: 16px 24px;
            }
        `;
    }
}

export default Card;
