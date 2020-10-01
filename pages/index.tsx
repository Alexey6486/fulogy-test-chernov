import React, {useEffect} from "react";
import {AccountPageLayout} from "../src/components/layouts/accountPageLayout/accountPageLayout";
import {UserDataInfoComponent} from "../src/components/userData/userDataInfo/userDataInfo.component";
import {initSagaSetUserDataAC} from "../src/redux/userDataReducer";
import {useDispatch} from "react-redux";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('userDataTestChernov')) {
            const getDataFromLocalStorage = JSON.parse(localStorage.getItem('userDataTestChernov'));
            dispatch(initSagaSetUserDataAC(getDataFromLocalStorage));
        }
    }, [])

    return (
        <AccountPageLayout>
            <UserDataInfoComponent/>
        </AccountPageLayout>
    )
};

export default Home;
