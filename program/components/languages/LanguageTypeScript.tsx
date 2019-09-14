import * as Cortex from 'cortex';

import Block from 'program/components/layout/Block';
import Button from 'program/components/Button';
import Card from 'program/components/Card';
import Flex from 'program/components/layout/Flex';
import Slideshow from 'program/components/Slideshow';
import Typography from 'program/components/Typography';

class LanguageTypeScript extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [
            <Block>
                <Typography bold size={ 1.2 }>
                    TypeScript
                </Typography>
                <Block height='12px'/>
                <Typography>
                    I am very passionate about User Interface design + development. TypeScript has been
                    my main outlet for this, as most of the UI work these days is for the web.
                    I have also worked on other TypeScript projects related to Canvas, WebGL, and Node.
                    While I can also apply these skills to plain JavaScript, I do prefer type-safety.
                </Typography>
                <Block height='24px'/>
                <Slideshow>
                    <Slideshow.Slide>
                        <Card description='Lightweight Web Component Library' name='cortex'>
                            <Flex direction='vertical' grow shrink>
                                <Flex grow>
                                    <Typography size={ 0.88 } type='content'>
                                        Grok  was my first actual C++ project.
                                        The goal was to wrap my head around CMake (used by CLion),
                                        and create a package manager on top of git that would generate CMake.
                                        I rewrote it about a half a dozen times, and overengineered it
                                        to death as I explored new patterns and ideas.
                                    </Typography>
                                </Flex>
                                <Block height='24px'/>
                                <Flex justify='center' style={ { textShadow: 'none' } }>
                                    <Button dense onclick={ () => window.open('https://github.com/fyrware/grok', '_blank') }>
                                        View Source
                                    </Button>
                                </Flex>
                                <Block height='12px'/>
                            </Flex>
                        </Card>
                    </Slideshow.Slide>
                    <Slideshow.Slide>
                        <Card description='OOP LibGit2 Wrapper' name='git'>
                            <Flex direction='vertical' grow shrink>
                                <Flex grow>
                                    <Typography size={ 0.88 } type='content'>
                                        LibGit2 is a library written in C;
                                        I wanted a more sensible API to work with as I built out Grok,
                                        so I decided to create a C++ OOP wrapper around
                                        LibGit2 to make it easer to reason about.
                                    </Typography>
                                </Flex>
                                <Block height='24px'/>
                                <Flex justify='center' style={ { textShadow: 'none' } }>
                                    <Button dense>
                                        View Source
                                    </Button>
                                </Flex>
                                <Block height='12px'/>
                            </Flex>
                        </Card>
                    </Slideshow.Slide>
                    <Slideshow.Slide>
                    <Card description='Multithreaded Observables' name='fusion'>
                        <Flex direction='vertical' grow shrink>
                            <Flex grow>
                                <Typography size={ 0.88 } type='content'>

                                </Typography>
                            </Flex>
                            <Block height='24px'/>
                            <Flex justify='center' style={ { textShadow: 'none' } }>
                                <Button dense>
                                    View Source
                                </Button>
                            </Flex>
                            <Block height='12px'/>
                        </Flex>
                    </Card>
                    </Slideshow.Slide>
                </Slideshow>
            </Block>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: block;
                padding: 0 8px;
            }
        `;
    }
}

export default LanguageTypeScript;
