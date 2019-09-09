import * as Cortex from 'cortex';

import Typography from 'program/components/Typography';

class CXXLanguage extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [
            <Typography size={ 0.88 } type='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales est vel tellus bibendum, quis posuere elit aliquam. Nullam sagittis scelerisque rutrum. In feugiat mauris ante, sed molestie nisl faucibus quis. Nunc eu urna at diam vestibulum ultricies. In hac habitasse platea dictumst. Nunc elementum velit in purus gravida, sit amet viverra tellus tincidunt. Sed libero sem, pulvinar vel facilisis in, ornare at arcu. Maecenas maximus velit ut tortor euismod, a fermentum tortor convallis.
            </Typography>
        ];
    }
}

export default CXXLanguage;
