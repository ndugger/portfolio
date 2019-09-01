import * as Cortex from 'cortex';

import Typography from 'program/components/Typography';

class Landing extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [
            <Typography size={ 2.2 } type='heading'>
                Software Engineer
            </Typography>
        ];
    }
}

export default Landing;
