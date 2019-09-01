import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Button from 'program/components/Button';
import Tab from 'program/components/Tab';
import Typography from 'program/components/Typography';

enum PrimaryLanguage {
    CPP = 'C++',
    TS = 'TypeScript'
}

class Engineer extends Cortex.Component {

    private primaryLanguage: PrimaryLanguage = PrimaryLanguage.CPP;

    public render(): Cortex.Element[] {
        return [
            <Block style={ { padding: '32px' } }>
                <Block style={ { padding: '0 8px 8px' } }>
                    <Typography size={ 1.25 }>
                        Primary Languages
                    </Typography>
                </Block>
                <Tab.Group>
                    <Tab active={ this.primaryLanguage === PrimaryLanguage.CPP } name={ PrimaryLanguage.CPP }>
                        Information about C++
                    </Tab>
                    <Tab active={ this.primaryLanguage === PrimaryLanguage.TS } name={ PrimaryLanguage.TS }>
                        Information about TypeScript
                    </Tab>
                </Tab.Group>
            </Block>
        ];
    }

    public theme(): string {
        return `
            :host {
                flex-grow: 1;
            }

            .${ Button.name } {
                margin: 8px;
            }
        `;
    }
}

export default Engineer;
