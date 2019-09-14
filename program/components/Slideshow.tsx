import * as Cortex from 'cortex';

class SlideshowSlide extends Cortex.Component {

    public render(): Cortex.Element[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return `
            :host {
                box-sizing: border-box;
                display: flex;
                flex-grow: 1;
                flex-shrink: 0;
                padding: 0 20px;
                width: 40%;
            }

            :host(:first-of-type) {
                padding-left: 40px;
            }

            :host(:last-of-type) {
                padding-right: 40px;
            }
        `;
    }
}

class Slideshow extends Cortex.Component {

    public static Slide = SlideshowSlide;

    public render(): Cortex.Element[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: flex;
                margin: 0 -40px;
                overflow:  auto;
                padding: 12px 0;
                width: calc(100% + 80px);
            }
        `;
    }
}

export default Slideshow;
