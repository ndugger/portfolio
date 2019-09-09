import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Flex from 'program/components/layout/Flex';
import Navigation from 'program/components/Navigation';
import Reveal from 'program/components/Reveal';
import Typography from 'program/components/Typography';

import Engineer from 'program/components/views/Engineer';

import Palette from 'program/theme/Palette';

enum Display {
    Artist = 'Digital Artist',
    Engineer = 'Software Engineer',
    Human = 'Human Being'
}

class Application extends Cortex.Component {

    private display: Display = Display.Engineer;
    private ready: boolean = false;

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
            <Block id='noise'/>,
            <Flex direction='vertical' id='container'>
                <Flex grow shrink style={ { height: '0' } }>
                    <Reveal animation='fade' delay={ 100 } id='reveal'>
                        <Navigation id='navigation'>
                            <Navigation.Item
                                active={ this.display === Display.Engineer }
                                name={ Display.Engineer }
                                onclick={ () => this.update({ display: Display.Engineer }) }/>
                            <Navigation.Item
                                active={ this.display === Display.Artist }
                                name={ Display.Artist }
                                onclick={ () => this.update({ display: Display.Artist }) }/>
                            <Navigation.Item
                                active={ this.display === Display.Human }
                                name={ Display.Human }
                                onclick={ () => this.update({ display: Display.Human }) }/>
                        </Navigation>
                    </Reveal>
                    <Flex direction='vertical' grow shrink>
                        <Reveal delay={ 150 } duration={ 800 }>
                            <Flex id='header'>
                                { this.display === Display.Engineer && [
                                    <Reveal delay={ this.ready ? 0 : 475 }>
                                        <Typography size={ 1.33 } type='heading'>
                                            { Display.Engineer }
                                        </Typography>
                                    </Reveal>
                                ] }
                                { this.display === Display.Artist && [
                                    <Reveal delay={ this.ready ? 0 : 475 }>
                                        <Typography size={ 1.33 } type='heading'>
                                            { Display.Artist }
                                        </Typography>
                                    </Reveal>
                                ] }
                                { this.display === Display.Human && [
                                    <Reveal delay={ this.ready ? 0 : 475 }>
                                        <Typography size={ 1.33 } type='heading'>
                                            { Display.Human }
                                        </Typography>
                                    </Reveal>
                                ] }
                            </Flex>
                        </Reveal>
                        <Flex grow shrink style={ { height: '0' } }>
                            <Flex grow shrink>
                                { this.display === Display.Engineer && [
                                    <Reveal animation='fade' delay={ this.ready ? 200 : 625 } duration={ this.ready ? 600 : 800 } id='display'>
                                        <Engineer/>
                                    </Reveal>
                                ] }
                                { this.display === Display.Artist && [
                                    <Reveal animation='fade' delay={ this.ready ? 200 : 625 } duration={ this.ready ? 600 : 800 } id='display'>
                                        <Engineer/>
                                    </Reveal>
                                ] }
                                { this.display === Display.Human && [
                                    <Reveal animation='fade' delay={ this.ready ? 200 : 625 } duration={ this.ready ? 600 : 800 } id='display'>
                                        <Engineer/>
                                    </Reveal>
                                ] }
                            </Flex>
                            <Reveal animation='fade' delay={ 333 } duration={ 600 } id='info'>
                                <Flex grow shrink>
                                    <Navigation dense id='menu'>
                                        <Navigation.Item icon='account_circle' name='Résumé' onclick={ () => window.open('https://docs.google.com/document/d/10Kq_jDnkFVPuxBxxP4kqqXT6z8J1-4cSl_hR0c52hss/edit?usp=sharing', '_blank') }/>
                                        <Navigation.Item icon='code' name='GitHub' onclick={ () => window.open('https://github.com/ndugger', '_blank') }/>
                                        <Navigation.Item icon='gavel' name='LinkedIn' onclick={ () => window.open('https://www.linkedin.com/in/nick-dugger/', '_blank') }/>
                                    </Navigation>
                                </Flex>
                            </Reveal>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        ];
    }

    public theme(): string {
        return `
            :host {
                background-color: ${ Palette.main.medium };
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
                box-shadow:
                    0 0 24px ${ Palette.black.opacity(0.4) },
                    0 0 0 96px ${ Palette.main.dark.opacity(0.85) };
                display: flex;
                left: 24px;
                overflow: hidden;
                padding: 48px 0 0;
                position: absolute;
                right: 24px;
                top: 24px;
                z-index: 1;
            }

            #display {
                box-shadow: inset 0 0 24px ${ Palette.main.dark.opacity(0.5) };
                display: flex;
                flex-grow: 1;
                flex-shrink: 1;
                text-shadow:
                    0 2px 3px ${ Palette.black.opacity(0.33) },
                    0 0 8px ${ Palette.white.opacity(0.1) };
            }

            #header {
                align-items: center;
                box-shadow: inset 0 0 0 9999999px ${ Palette.black.opacity(0.2) };
                background-color: ${ Palette.main.dark.opacity(0.66) };
                display: flex;
                height: 64px;
                padding: 0 40px;
            }

            #info {
                display: flex;
                flex-direction: column;
            }

            #logo {
                background-color: ${ Palette.black.opacity(0.725) };
                color: ${ Palette.white };
                height: 48px;
                line-height: 47px;
                padding: 0 24px;
                position: relative;
                z-index: 2;
            }

            #menu {
                flex-grow: 1;
            }

            #navigation {
                flex-grow: 1;
            }

            #noise {
                background-image: ${ Palette.textures.noise };
                background-position: center center;
                bottom: 0;
                left: 0;
                opacity: 0.03;
                position: absolute;
                right: 0;
                top: 0;
                z-index: 0;
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

            #reveal {
                display: flex;
                flex-direction: column;
            }
        `;
    }
}

export default Application;
