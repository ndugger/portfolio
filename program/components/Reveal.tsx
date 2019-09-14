import * as Cortex from 'cortex';

import Palette from 'program/theme/Palette';

class Reveal extends Cortex.Component {

    public animation: 'fade' | 'reveal' = 'reveal';
    public color: 'primary' | 'secondary' | 'tertiary' = 'primary';
    public delay: number;
    public duration: number;

    public render(): Cortex.Element[] {
        switch (this.animation) {
            case 'fade': return [
                <HTMLDivElement id='slide'>
                    <HTMLSlotElement/>
                </HTMLDivElement>
            ];
            case 'reveal': return [
                <HTMLSlotElement/>,
                <HTMLDivElement id='cover'/>
            ];
        }
    }

    public theme(): string {
        return `
            @keyframes fade {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }

            @keyframes slide {
                0% {
                    top: 10px;
                }
                100% {
                    top: 0px;
                }
            }

            @keyframes reveal {
                0% {
                    animation-timing-function: ease-in;
                    clip-path: polygon(
                        0% 0%,
                        0% 0%,
                        0% 100%,
                        0% 100%
                    );
                }
                50% {
                    animation-timing-function: linear;
                    clip-path: polygon(
                        0% 0%,
                        33% 0%,
                        33% 100%,
                        0% 100%
                    );
                }
                66% {
                    animation-timing-function: fade-out;
                    clip-path: polygon(
                        0% 0%,
                        88% 0%,
                        88% 100%,
                        0% 100%
                    );
                }
                100% {
                    clip-path: polygon(
                        0% 0%,
                        100% 0%,
                        100% 100%,
                        0% 100%
                    );
                }
            }

            @keyframes reveal-cover {
                0% {
                    animation-timing-function: ease-in;
                    clip-path: polygon(
                        0% 0%,
                        100% 0%,
                        100% 100%,
                        0% 100%
                    );
                }
                50% {
                    animation-timing-function: linear;
                    clip-path: polygon(
                        0% 0%,
                        100% 0%,
                        100% 100%,
                        0% 100%
                    );
                }
                66% {
                    animation-timing-function: linear;
                    clip-path: polygon(
                        40% 0%,
                        100% 0%,
                        100% 100%,
                        40% 100%
                    );
                }
                80% {
                    animation-timing-function: ease-out;
                    clip-path: polygon(
                        80% 0%,
                        100% 0%,
                        100% 100%,
                        80% 100%
                    );
                }
                100% {
                    clip-path: polygon(
                        100% 0%,
                        100% 0%,
                        100% 100%,
                        100% 100%
                    );
                }
            }

            :host {
                animation-delay: ${ this.delay || 0 }ms;
                animation-duration: ${ this.duration || 600 }ms;
                animation-fill-mode: forwards;
                animation-iteration-count: 1;
                animation-name: ${ this.animation };
                clip-path: ${ this.animation === 'fade' ? 'unset' : `polygon(
                    0% 0%,
                    0% 0%,
                    0% 100%,
                    0% 100%
                )` };
                display: block;
                opacity: ${ this.animation === 'fade' ? 0 : 1 };
                position: relative;
            }

            #cover {
                animation-delay: ${ this.delay || 0 }ms;
                animation-duration: ${ this.duration || 600 }ms;
                animation-fill-mode: forwards;
                animation-iteration-count: 1;
                animation-name: reveal-cover;
                background-color: ${ Palette[ this.color ].medium };
                bottom: 0;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
                z-index: 1;
            }

            #slide {
                animation-delay: ${ this.delay || 0 }ms;
                animation-duration: ${ this.duration || 600 }ms;
                animation-fill-mode: forwards;
                animation-iteration-count: 1;
                animation-name: slide;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                position: relative;
            }
        `;
    }
}

export default Reveal;
