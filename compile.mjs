import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

import webpack from 'webpack';

webpack({
    mode: 'development',
    entry: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'runtime.ts'),
    output: {
        filename: 'application.js',
        path: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'bin')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            this: path.dirname(url.fileURLToPath(import.meta.url))
        },
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx'
        ]
    }
}, () => {
    const application = fs.readFileSync('bin/application.js', 'utf8');
    const settings = JSON.parse(fs.readFileSync('settings.json', 'utf8'));
    const template = `
        <!doctype html>
        <html lang="${ settings.language }">
            <head>
                <title>${ settings.title }</title>
            </head>
            <body>
                <script>${ application }</script>
            </body>
        </html>
    `;

    fs.unlinkSync('bin/application.js');
    fs.rmdirSync('bin/');

    try {
        fs.statSync('exe/');
    }
    catch {
        fs.mkdirSync('exe/');
    }

    fs.writeFileSync('exe/application.html', template, 'utf8');
});
