import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from '../src/redux/store';
import Head from "next/head";
import React from "react";

const myApp = ({Component, pageProps}) => {
    return (
        <>

            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default myApp
