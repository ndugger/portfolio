import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Reveal from 'program/components/Reveal';
import Typography from 'program/components/Typography';

import Palette from 'program/theme/Palette';

class Button extends Cortex.Component {

    private hover: boolean;

    public color: 'primary' | 'secondary' = 'primary';
    public dense: boolean;
    public full: boolean;

    public render(): Cortex.Element[] {
        const handlers = {
            onmouseenter: () => this.update({ hover: true }),
            onmouseleave: () => this.update({ hover: false })
        };

        return [
            <Block inline { ...handlers }>
                <Typography bold size={ this.dense ? 0.8 : 1 }>
                    { this.textContent }
                </Typography>
                { this.hover && [
                    <Reveal color={ this.color } duration={ 250 } id='hover'>
                        <Block inline>
                            <Typography bold size={ this.dense ? 0.8 : 1 }>
                                { this.textContent }
                            </Typography>
                        </Block>
                    </Reveal>
                ] }
            </Block>
        ];
    }

    public theme(): string {
        return `
            :host {
                background-color: ${ Palette.main.dark.opacity(0.4) };
                border: 3px solid ${ Palette[ this.color ].medium };
                border-radius: 100px;
                box-shadow: 0 0 32px ${ Palette.main.dark.opacity(0.5) };
                box-sizing: border-box;
                color: ${ Palette.white.opacity(0.66) };
                display: inline-block;
                overflow: hidden;
                position: relative;
                text-align: center;
                transition: all 200ms linear;
                width: ${ this.full ? '100%' : 'auto' };
            }

            :host(:hover) {
                box-shadow:
                    0 0 32px ${ Palette.main.dark.opacity(0.8) },
                    0 0 12px ${ Palette[ this.color ].medium.opacity(0.8) };
                transition: all 100ms linear;
            }

            :host(:active) {
                background-color: ${ Palette.main.dark.opacity(0.5) };
                box-shadow: 0 0 32px ${ Palette.main.dark.opacity(0.8) };
                opacity: 0.8;
                top: 1px;
            }

            #hover {
                align-items: center;
                background-color: ${ Palette[ this.color ].medium.opacity(0.3) };
                border-radius: 100px;
                color: ${ Palette.white };
                display: flex;
                justify-content: center;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
            }

            .${ Block.name } {
                padding: ${ this.dense ? '4px 12px' : '10px 28px' };
            }
        `;
    }
}

export default Button;
