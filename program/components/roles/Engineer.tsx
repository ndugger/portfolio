import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Button from 'program/components/Button';
import Flex from 'program/components/layout/Flex';
import Heading from 'program/components/Heading';
import Reveal from 'program/components/Reveal';
import Tab from 'program/components/Tab';
import Typography from 'program/components/Typography';

import LanguageCxx from 'program/components/languages/LanguageCxx';
import LanguageTypeScript from 'program/components/languages/LanguageTypeScript';

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
                <Block padding='0 8px 32px'>
                    <Typography>
                        I am a Senior Software Engineer for Target Corporation.
                        I contribute to multiple teams with various tech stacks,
                        but the common denominators are:
                        Java, Spring Boot, Ratpack, JavaScript, TypeScript, and React.
                    </Typography>
                </Block>
                <Flex justify='space-around'>
                    <Button color='secondary'>
                        Résumé
                    </Button>
                    <Button color='secondary'>
                        LinkedIn
                    </Button>
                    <Button color='secondary'>
                        GitHub
                    </Button>
                    <Button color='secondary'>
                        Email
                    </Button>
                </Flex>
                <Block height='32px'/>
                <Block padding='0 8px 24px'>
                    <Heading>
                        Primary languages
                    </Heading>
                </Block>
                <Block>
                    <LanguageTypeScript/>
                    <Block height='32px'/>
                    <LanguageCxx/>
                </Block>
                <Block height='24px'/>
                <Block padding='8px'>
                    <Heading>
                        Secondary languages
                    </Heading>
                </Block>
                <Block>
                    <LanguageCxx/>
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
