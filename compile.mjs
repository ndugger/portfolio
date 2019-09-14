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
        if (fs.statSync(path.join(from, element)).isFile()) {
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
            program: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'program')
        },
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx'
        ]
    }
}, error => {

    if (error) {
        console.error(error);
    }

    const template = `
        <!doctype html>
        <html lang="en_us">
            <head>
                <title>Nick Dugger</title>
                <style>
                    body, html {
                        background: black;
                        height: 100%;
                        margin: 0;
                        width: 100%;
                    }
                </style>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300,600|Source+Code+Pro&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </head>
            <body>
                <script>${ fs.readFileSync('bin/application.js', 'utf8') }</script>
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

    copyFolderSync('assets/', 'exe/assets/');
});
