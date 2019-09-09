import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Icon from 'program/components/Icon';
import Reveal from 'program/components/Reveal';
import Typography from 'program/components/Typography';

import Palette from 'program/theme/Palette';

class NavigationItem extends Cortex.Component {

    public active: boolean;
    public hover: boolean;
    public icon: string;
    public name: string;

    public render(): Cortex.Element[] {
        const handlers = {
            onmouseenter: () => this.update({ hover: true }),
            onmouseleave: () => this.update({ hover: false })
        };

        return [
            <Block { ...handlers }>
                { this.icon && [
                    <Icon glyph={ this.icon }/>
                ] }
                <Typography size={ 0.85 } type='content'>
                    { this.name }
                </Typography>
                { !this.active && this.hover && [
                    <Reveal duration={ 250 } id='hover'>
                        <Block>
                            <Typography size={ 0.85 }>
                                { this.name }
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
                background: ${ this.active ? Palette.black.opacity(0.2) : 'transparent' };
                box-shadow: inset 4px 0 0 ${ this.active ? Palette.primary.medium : 'transparent' };
                color: ${ this.active ? Palette.white : Palette.white.opacity(0.66) };
                display: block;
                height: 40px;
                line-height: 40px;
                overflow: hidden;
                padding: 0 24px;
                position: relative;
                transition: all 200ms linear;
            }

            :host(:hover) {
                box-shadow:
                    inset 4px 0 0 ${ Palette.primary.medium },
                    0 0 12px ${ this.active ? 'transparent' : Palette.primary.medium.opacity(0.2) };
            }

            #hover {
                background-color: ${ Palette.primary.medium.opacity(0.25) };
                color: ${ Palette.white };
                left: 0;
                padding: 0 24px;
                position: absolute;
                top: 0;
                width: calc(100% - 48px);
            }
        `;
    }
}

class Navigation extends Cortex.Component {

    public static Item = NavigationItem;

    public dense: boolean;

    public render(): Cortex.Element[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return `
            :host {
                background-color: ${ Palette.main.dark.opacity(0.66) };
                width: ${ this.dense ? 120 : 280 }px;
            }
        `;
    }
}

export default Navigation;
