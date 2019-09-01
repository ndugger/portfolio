import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Flex from 'program/components/layout/Flex';
import Navigation from 'program/components/Navigation';
import Reveal from 'program/components/Reveal';
import Typography from 'program/components/Typography';

import Engineer from 'program/components/views/Engineer';

import Palette from 'program/theme/Palette';
import Visitor from 'program/stores/Visitor';

enum Display {
    Artist,
    Engineer,
    Human
}

class Application extends Cortex.Component {

    private display: Display = Display.Engineer;
    private ready: boolean = false;

    protected handleComponentConnect(): void {
        Visitor.addEventListener('hello', () => this.update());
    }

    protected handleComponentReady(): void {
        this.ready = true;
    }

    public render(): Cortex.Element[] {
        return [
            <Block id='logo'>
                <Typography bold size={ 0.85 } type='content'>
                    NickDugger
                </Typography>
                <Typography size={ 0.85 } type='content'>
                    .com
                </Typography>
            </Block>,
            <Block id='overlay'/>,
            <Flex direction='vertical' id='container'>
                <Flex grow>
                    <Navigation>
                        <Navigation.Item active={ this.display === Display.Engineer } onclick={ () => this.update({ display: Display.Engineer }) }>
                            Software Engineer
                        </Navigation.Item>
                        <Navigation.Item active={ this.display === Display.Artist } onclick={ () => this.update({ display: Display.Artist }) }>
                            Digital Artist
                        </Navigation.Item>
                        <Navigation.Item active={ this.display === Display.Human } onclick={ () => this.update({ display: Display.Human }) }>
                            Human Being
                        </Navigation.Item>
                    </Navigation>
                    <Flex direction='vertical' grow>
                        <Reveal delay={ 150 } duration={ 800 }>
                            <Flex id='header'>
                                { this.display === Display.Engineer && [
                                    <Reveal delay={ this.ready ? 0 : 425 }>
                                        <Typography size={ 1.33 } type='heading'>
                                            Software Engineer
                                        </Typography>
                                    </Reveal>
                                ] }
                                { this.display === Display.Artist && [
                                    <Reveal delay={ this.ready ? 0 : 425 }>
                                        <Typography size={ 1.33 } type='heading'>
                                            Digital Artist
                                        </Typography>
                                    </Reveal>
                                ] }
                                { this.display === Display.Human && [
                                    <Reveal delay={ this.ready ? 0 : 425 }>
                                        <Typography size={ 1.33 } type='heading'>
                                            Human Being
                                        </Typography>
                                    </Reveal>
                                ] }
                            </Flex>
                        </Reveal>
                        { this.display === Display.Engineer && [
                            <Reveal animation='fade' delay={ this.ready ? 200 : 625 } duration={ 800 } id='display'>
                                <Engineer/>
                            </Reveal>
                        ] }
                        { this.display === Display.Artist && [
                            <Reveal animation='fade' delay={ this.ready ? 200 : 625 } duration={ 800 } id='display'>
                                <Engineer/>
                            </Reveal>
                        ] }
                        { this.display === Display.Human && [
                            <Reveal animation='fade' delay={ this.ready ? 200 : 625 } duration={ 800 } id='display'>
                                <Engineer/>
                            </Reveal>
                        ] }
                    </Flex>
                </Flex>
            </Flex>
        ];
    }

    public theme(): string {
        return `
            :host {
                background-color: ${ Palette.main.medium.opacity(0.98) };
                color: ${ Palette.white.opacity(0.9) };
                display: flex;
                flex-direction: column;
                height: calc(100% - 48px);
                padding: 24px;
                user-select: none;
                width: calc(100% - 48px);
            }

            #container {
                bottom: 24px;
                border-radius: 8px;
                box-shadow:
                    0 0 24px ${ Palette.black.opacity(0.4) },
                    0 0 0 96px ${ Palette.main.dark.opacity(0.85) };
                display: flex;
                left: 24px;
                overflow: hidden;
                padding: 40px 0 0;
                position: absolute;
                right: 24px;
                top: 24px;
                z-index: 1;
            }

            #display {
                box-shadow: inset 0 0 24px ${ Palette.main.dark.opacity(0.5) };
                display: flex;
                flex-grow: 1;
            }

            #header {
                align-items: center;
                box-shadow: inset 0 0 0 9999999px ${ Palette.black.opacity(0.2) };
                background-color: ${ Palette.main.dark.opacity(0.66) };
                display: flex;
                height: 64px;
                padding: 0 40px;
            }

            #logo {
                background-color: ${ Palette.primary.medium };
                border-radius: 8px 8px 0 0;
                color: ${ Palette.white };
                height: 40px;
                line-height: 39px;
                padding: 0 24px;
                position: relative;
                z-index: 2;
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
                z-index: 0;
            }
        `;
    }
}

export default Application;
