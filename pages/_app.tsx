import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from '../src/redux/store';
import React from "react";
import NextNprogress from 'nextjs-progressbar';

const myApp = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <NextNprogress color="#FF6347"/>
            <Component {...pageProps} />
        </Provider>
    )
}

export default myApp
