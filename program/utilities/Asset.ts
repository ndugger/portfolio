class Asset {

    private name: string;
    private type: 'gif' | 'jpg' | 'png' | 'webp';

    public constructor(type: 'jpg', name: string) {
        this.name = name;
        this.type = type;
    }

    public toString(): string {
        switch (this.type) {
            case 'gif': {
                return `url(assets/${ this.name }.gif)`;
            }
            case 'jpg': {
                return `url(assets/${ this.name }.jpg)`;
            }
            case 'png': {
                return `url(assets/${ this.name }.png)`;
            }
            case 'webp': {
                return `url(assets/${ this.name }.webp)`;
            }
        }
    }
}

namespace Asset {

    export function gif(name: string): Asset {
        return new Asset('gif', name);
    }

    export function jpg(name: string): Asset {
        return new Asset('jpg', name);
    }

    export function png(name: string): Asset {
        return new Asset('png', name);
    }

    export function webp(name: string): Asset {
        return new Asset('webp', name);
    }
}

export default Asset;
