import '../styles/globals.css'
import {BrowserRouter, StaticRouter } from "react-router-dom";
import {Provider} from "react-redux";
import { store } from '../src/redux/store';

const myApp = ({Component, pageProps}) => {
    return (
        <BrowserRouter >
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </BrowserRouter >
    )
}

export default myApp
