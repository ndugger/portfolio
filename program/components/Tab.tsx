import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Reveal from 'program/components/Reveal';
import Typography from 'program/components/Typography';

import Palette from 'program/theme/Palette';

class TabContent extends Cortex.Component {

    private contentHeight: number = 32;

    protected handleComponentReady(): void {
        let contentHeight = 0;

        for (const child of Array.from(this.children)) {
            contentHeight += child.clientHeight;
        }

        this.update({ contentHeight});
    }

    protected handleComponentRender(): void {
        let contentHeight = 0;

        for (const child of Array.from(this.children)) {
            contentHeight += child.clientHeight;
        }

        if (this.contentHeight !== contentHeight) {
            this.update({ contentHeight});
        }
    }

    public render(): Cortex.Element[] {
        return [
            <Block id='content' style={ { height: `${ this.contentHeight }px` } }>
                <HTMLSlotElement id='deep'/>
            </Block>
        ];
    }

    public theme(): string {
        return `
            #content {
                border-bottom: 1px solid ${ Palette.white.opacity(0.1) };
                margin: 8px 8px 16px;
                padding: 0 0 32px;
                transition: height 425ms ease;
            }
        `;
    }
}

class Tab extends Cortex.Component {

    public static Content = TabContent;

    private hover: boolean;

    public active: boolean;
    public color: 'primary' | 'secondary' = 'secondary';
    public name: string;

    public render(): Cortex.Element[] {
        const handlers = {
            onmouseenter: () => this.update({ hover: true }),
            onmouseleave: () => this.update({ hover: false })
        };

        return [
            <Block inline { ...handlers }>
                <Typography size={ 0.8 }>
                    { this.name }
                </Typography>
                { this.active && [
                    <Block inline id='active'>
                        <Typography size={ 0.8 }>
                            { this.name }
                        </Typography>
                    </Block>
                ] }
                { this.hover && !this.active && [
                    <Reveal color={ this.color } duration={ 250 } id='hover'>
                        <Block inline>
                            <Typography size={ 0.8 }>
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
                background-color: ${ Palette.main.dark.opacity(0.4) };
                border: 3px solid ${ Palette[ this.color ].medium };
                box-shadow: 0 0 32px ${ Palette.main.dark.opacity(0.5) };
                color: ${ Palette.white.opacity(0.66) };
                display: inline-block;
                margin: 8px -1.5px;
                overflow: hidden;
                position: relative;
                text-shadow: none;
                transition: all 200ms linear;
                z-index: ${ this.active ? 1 : 0 };

                ${ this.active && `
                    box-shadow:
                        0 0 32px ${ Palette.main.dark.opacity(0.8) },
                        0 0 12px ${ Palette[ this.color ].medium.opacity(0.5) };
                    transition: none;
                ` }
            }

            :host(:first-of-type) {
                margin-left: 8px;
            }

            :host(:first-of-type), :host(:first-of-type) #active, :host(:first-of-type) #hover {
                border-radius: 100px 0 0 100px;
            }

            :host(:hover) {
                box-shadow:
                    0 0 32px ${ Palette.main.dark.opacity(0.8) },
                    0 0 12px ${ Palette[ this.color ].medium.opacity(0.5) };
                transition: all 100ms linear;
            }

            :host(:last-of-type) {
                margin-right: 8px;
            }

            :host(:last-of-type), :host(:last-of-type) #active, :host(:last-of-type) #hover {
                border-radius: 0 100px 100px 0;
            }

            :host(:active) {
                background-color: ${ Palette.main.dark.opacity(0.5) };
                box-shadow:
                    0 0 32px ${ Palette.main.dark.opacity(0.8) },
                    0 0 12px ${ Palette[ this.color ].medium.opacity(0.5) };
                opacity: 0.8;
                top: 1px;
            }

            #active, #hover {
                background-color: ${ Palette[ this.color ].medium.opacity(0.4) };
                color: ${ Palette.white };
                left: 0;
                position: absolute;
                top: 0;
            }

            .${ Block.name } {
                padding: 4px 12px;
            }
        `;
    }
}

export default Tab;
