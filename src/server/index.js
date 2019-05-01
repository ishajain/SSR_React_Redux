import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from "react-router-dom";
import { renderRoutes , matchRoutes } from 'react-router-config';
import { store } from '../store';
import Routes from '../routes';

const app = express();
app.use(express.static("dist"));
const PORT = process.env.PORT || 8000;

app.get('*', async (req, res) => {

    const actions = matchRoutes(Routes, req.path)
        .map(({ route }) => {  return route.component.fetchData ? route.component.fetchData({...store, path: req.path }) : null;})
        .map(async actions => await Promise.all(
            (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
        )
        );
  
    await  Promise.all(actions);
    const context = {};
    const jsx = ( 
        <Provider store={store}>
            <StaticRouter context={ context } location={ req.url }>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
       
        </Provider>
    
    );
    const reactDom = renderToString( jsx );
    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );
function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>SSR</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/main.css" rel="stylesheet" />
            </head>
            <body>
                <div id="root">${ reactDom }</div>
            </body>
            <script>
                window.INITIAL_STATE = ${JSON.stringify(store.getState())}
            </script>
            <script src="/bundle.js" defer></script>
            </html>
    `;}

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});

