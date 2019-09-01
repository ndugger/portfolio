import Asset from 'program/utilities/Asset';
import Color from 'program/utilities/Color';

namespace Palette {

    export const black = Color.rgb(0, 0, 0);

    export const font = {
        code: 'Source Code Pro',
        content: 'Montserrat',
        heading: 'Montserrat'
    };

    export const main = {
        dark: Color.rgb(30, 28, 34),
        medium: Color.rgb(36, 34, 42)
    };

    export const primary = {
        medium: Color.rgb(95, 53, 192)
    };

    export const secondary = {
        medium: Color.rgb(19, 180, 95)
    };

    export const textures = {
        backdrop: Asset.jpg('backdrop_overlay')
    };

    export const white = Color.rgb(255, 255, 255);
}

export default Palette;