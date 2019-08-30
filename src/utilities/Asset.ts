class Asset {

    private name: string;
    private type: 'jpg';

    public constructor(type: 'jpg', name: string) {
        this.name = name;
        this.type = type;
    }

    public toString(): string {
        switch (this.type) {
            case 'jpg': {
                return `url(assets/${ this.name }.jpg)`;
            }
        }
    }
}

namespace Asset {

    export function jpg(name: string): Asset {
        return new Asset('jpg', name);
    }
}

export default Asset;
