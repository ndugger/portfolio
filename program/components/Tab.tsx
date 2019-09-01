import * as Cortex from 'cortex';

class TabGroup extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [

        ];
    }

    public theme(): string {
        return `

        `;
    }
}

class Tab extends Cortex.Component {

    public static Group = TabGroup;

    public active: boolean;
    public name: string;

    public render(): Cortex.Element[] {
        return [

        ];
    }

    public theme(): string {
        return `

        `;
    }
}

export default Tab;
