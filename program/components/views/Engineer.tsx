import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Button from 'program/components/Button';
import Reveal from 'program/components/Reveal';
import Tab from 'program/components/Tab';
import Typography from 'program/components/Typography';

import CXXLanguage from 'program/components/views/languages/CXXLanguage';

enum PrimaryLanguage {
    Cxx = 'C++',
    TypeScript = 'TypeScript'
}

enum SecondaryLanguage {
    CSharp = 'C#',
    Java = 'Java',
    Rust = 'Rust',
    ___ = '. . . Other'
}

class Engineer extends Cortex.Component {

    private primaryLanguage: PrimaryLanguage = PrimaryLanguage.Cxx;
    private secondaryLanguage: SecondaryLanguage = SecondaryLanguage.CSharp;

    public render(): Cortex.Element[] {
        return [
            <Block id='view' padding='32px'>
                <Block padding='0 8px 8px'>
                    <Typography size={ 1.2 }>
                        Primary Languages
                    </Typography>
                </Block>
                <Block>
                    <Tab active={ this.primaryLanguage === PrimaryLanguage.Cxx }
                        onclick={ () => this.update({ primaryLanguage: PrimaryLanguage.Cxx }) }
                        name={ PrimaryLanguage.Cxx }/>
                    <Tab active={ this.primaryLanguage === PrimaryLanguage.TypeScript }
                        onclick={ () => this.update({ primaryLanguage: PrimaryLanguage.TypeScript }) }
                        name={ PrimaryLanguage.TypeScript }/>
                    <Tab.Content>
                        { this.primaryLanguage === PrimaryLanguage.Cxx && [
                            <Reveal animation='fade' delay={ 100 }>
                                <CXXLanguage/>
                            </Reveal>
                        ] }
                        { this.primaryLanguage === PrimaryLanguage.TypeScript && [
                            <Reveal animation='fade' delay={ 100 }>
                                <CXXLanguage/>
                                <CXXLanguage/>
                            </Reveal>
                        ] }
                    </Tab.Content>
                </Block>
                <Block padding='8px'>
                    <Typography size={ 1.2 }>
                        Secondary Languages
                    </Typography>
                </Block>
                <Block>
                    <Tab active={ this.secondaryLanguage === SecondaryLanguage.CSharp }
                        onclick={ () => this.update({ secondaryLanguage: SecondaryLanguage.CSharp }) }
                        name={ SecondaryLanguage.CSharp }/>
                    <Tab active={ this.secondaryLanguage === SecondaryLanguage.Java }
                        onclick={ () => this.update({ secondaryLanguage: SecondaryLanguage.Java }) }
                        name={ SecondaryLanguage.Java }/>
                    <Tab active={ this.secondaryLanguage === SecondaryLanguage.Rust }
                        onclick={ () => this.update({ secondaryLanguage: SecondaryLanguage.Rust }) }
                        name={ SecondaryLanguage.Rust }/>
                    <Tab active={ this.secondaryLanguage === SecondaryLanguage.___ }
                        onclick={ () => this.update({ secondaryLanguage: SecondaryLanguage.___ }) }
                        name={ SecondaryLanguage.___ }/>
                    <Tab.Content>
                        { this.secondaryLanguage === SecondaryLanguage.CSharp && [
                            <Reveal animation='fade' delay={ 100 }>
                                <CXXLanguage/>
                            </Reveal>
                        ] }
                        { this.secondaryLanguage === SecondaryLanguage.Java && [
                            <Reveal animation='fade' delay={ 100 }>
                                <CXXLanguage/>
                            </Reveal>
                        ] }
                        { this.secondaryLanguage === SecondaryLanguage.Rust && [
                            <Reveal animation='fade' delay={ 100 }>
                                <CXXLanguage/>
                            </Reveal>
                        ] }
                        { this.secondaryLanguage === SecondaryLanguage.___ && [
                            <Reveal animation='fade' delay={ 100 }>
                                <CXXLanguage/>
                            </Reveal>
                        ] }
                    </Tab.Content>
                </Block>
            </Block>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: flex;
                flex-grow: 1;
                flex-shrink: 1;
                height: 100%;
            }

            .${ Button.name } {
                margin: 8px;
            }

            #view {
                flex-grow: 1;
                overflow: auto;
            }
        `;
    }
}

export default Engineer;
