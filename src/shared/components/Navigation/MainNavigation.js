import React, {useState} from 'react';
import './MainNavigation.css'
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks';
import MainHeader from './MainHeader'
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);


    function openDrawerHandler() {
        setDrawerIsOpen(true)
    }

    function closeDrawerHandler() {
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment> {/*여러 컴포넌트나 요소를 그룹화할 때 사용*/}
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation