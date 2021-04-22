import React, {useState} from "react"

import GithubIcon from "../../../assets/images/github.svg"
import LinkedInIcon from "../../../assets/images/linkedin.svg"
import InstagramIcon from "../../../assets/images/instagram.svg"

import {Navbar, Nav, Row } from "react-bootstrap"

import ExternalNavigation from "./ExternalNavigation";
import NavigationItem from "./NavigationItem";
import styles from "../../../styles/components/NavigationBar/NavigationBar.module.css";

const NavigationBar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = (collapse) => setIsNavCollapsed(collapse);

    const navBarBody =
        (<React.Fragment>
            <Navbar.Brand>
                <NavigationItem clicked={() => handleNavCollapse(true)} exact link="/">Home</NavigationItem>
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => handleNavCollapse(!isNavCollapsed)} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                    <NavigationItem clicked={() => handleNavCollapse(true)} link="/investing">Investing</NavigationItem>
                    <NavigationItem clicked={() => handleNavCollapse(true)} link="/about">About</NavigationItem>
                    <Row>
                        <ExternalNavigation src={GithubIcon} alt={"Github"}
                                            link={"https://github.com/christianhjelmslund"}/>
                        <ExternalNavigation src={LinkedInIcon} alt={"LinkedIn"}
                                            link={"https://www.linkedin.com/in/christian-hjelmslund/"}/>
                        <ExternalNavigation src={InstagramIcon} alt={"Facebook"}
                                            link={"https://www.instagram.com/christianhjelmslund/"}/>
                    </Row>
                </Nav>
            </Navbar.Collapse>
        </React.Fragment>)
        return <Navbar expanded={!isNavCollapsed} variant="dark" expand="sm" className={styles.navigationBar}>
            {navBarBody}
        </Navbar>

}

export default NavigationBar