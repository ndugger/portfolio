import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

import webpack from 'webpack';

function copyFolderSync(from, to) {
    try {
        fs.statSync(to);
    }
    catch {
        fs.mkdirSync(to);
    }

    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

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
            this: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'src')
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
                <style>
                    body, html {
                        height: 100%;
                        margin: 0;
                        width: 100%;
                    }
                </style>
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

    copyFolderSync('src/assets', 'exe/assets');
});
