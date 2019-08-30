import Asset from 'this/utilities/Asset';
import Color from 'this/utilities/Color';

namespace Palette {

    export const main = {
        dark: Color.rgba(30, 28, 34, 1),
        medium: Color.rgba(36, 34, 42, 1)
    };

    export const textures = {
        backdrop: Asset.jpg('backdrop_overlay')
    };
}

export default Palette;
