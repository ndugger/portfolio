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
        medium: Color.rgb(25, 55, 204)
    };

    export const secondary = {
        medium: Color.rgb(0, 134, 72)
    };

    export const tertiary = {
        medium: Color.rgb(252, 71, 1)
    };

    export const textures = {
        backdrop: Asset.jpg('backdrop_overlay'),
        noise: Asset.webp('noise')
    };

    export const white = Color.rgb(255, 255, 255);
}

export default Palette;
