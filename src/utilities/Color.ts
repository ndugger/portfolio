class Color {

    private alpha: number;
    private type: 'rgb';
    private values: number[];

    public constructor(type: 'rgb', alpha: number, values: number[]) {
        this.alpha = alpha;
        this.type = type;
        this.values = values;
    }
    
    public alpha(alpha: number): Color {
        return new Color(this.type, alpha, this.values);
    }

    public toString(): string {
        switch (this.type) {
            case 'rgb': {
                const [ red, green, blue ] = this.values;
                return `rgba(${ red }, ${ green }, ${ blue }, ${ this.alpha })`;
            }
        }
    }
}

namespace Color {

    export function rgba(red: number, green: number, blue: number, alpha: number = 1): Color {
        return new Color('rgb', alpha, [ red, green, blue ]);
    }
}

export default Color;
