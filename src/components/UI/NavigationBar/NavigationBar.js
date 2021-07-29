import React, {useState} from "react"

import {
    github as githubIcon,
    instagram as instagramIcon,
    linkedIn as linkedInIcon,
    rocket as rocketIcon

} from "../../Icons"
import {Navbar, Nav, NavbarBrand} from "react-bootstrap"
import {NavLink} from "react-router-dom"

import ExternalNavigation from "./ExternalNavigation";
import NavigationItem from "./NavigationItem";
import styles from "../../../styles/components/NavigationBar/NavigationBar.module.css";

const NavigationBar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = (collapse) => setIsNavCollapsed(collapse);

    const navBarBody =
        (<React.Fragment>
            <NavbarBrand as={NavLink} to="/" >Christan Hjelmslund {rocketIcon}</NavbarBrand>
            <Navbar.Toggle onClick={() => handleNavCollapse(!isNavCollapsed)} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                    <NavigationItem clicked={() => handleNavCollapse(true)} link="/about">About</NavigationItem>
                    <NavigationItem clicked={() => handleNavCollapse(true)} link="/services">Services</NavigationItem>
                    <ExternalNavigation link={"https://github.com/christianhjelmslund"}>{githubIcon}</ExternalNavigation>
                    <ExternalNavigation link={"https://www.linkedin.com/in/christian-hjelmslund/"}>{linkedInIcon}</ExternalNavigation>
                    <ExternalNavigation link={"https://www.instagram.com/christianhjelmslund/"}>{instagramIcon}</ExternalNavigation>
                </Nav>
            </Navbar.Collapse>
        </React.Fragment>)
        return <Navbar expanded={!isNavCollapsed} variant="dark" expand="sm" className={styles.navigationBar}>
            {navBarBody}
        </Navbar>

}

export default NavigationBar