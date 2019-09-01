class Asset {

    private name: string;
    private type: 'jpg' | 'png';

    public constructor(type: 'jpg', name: string) {
        this.name = name;
        this.type = type;
    }

    public toString(): string {
        switch (this.type) {
            case 'jpg': {
                return `url(assets/${ this.name }.jpg)`;
            }
            case 'png': {
                return `url(assets/${ this.name }.png)`;
            }
        }
    }
}

namespace Asset {

    export function jpg(name: string): Asset {
        return new Asset('jpg', name);
    }

    export function png(name: string): Asset {
        return new Asset('png', name);
    }
}

export default Asset;
