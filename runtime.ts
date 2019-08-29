import main from './src/main';

try {
    main();
}
catch (error) {
    document.body.innerHTML = `
        <style>
            h1 {
                color: #000000;
            }
            h3 {
                color: #666666;
            }
            h5 {
                color: #FF0000;
                font-family: monospace;
                white-space: pre;
            }
        </style>
        <h1>Your Browser Is Not Supported</h1>
        <h3>Please Upgrade (Chrome or Firefox preferred)</h2>
        <h5>${ error.message }</h3>
    `;
}

document.currentScript.remove();
