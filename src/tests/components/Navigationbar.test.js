import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import NavigationBar from "../../components/UI/NavigationBar/NavigationBar";
import ExternalNavigation from "../../components/UI/NavigationBar/ExternalNavigation";
import NavigationItem from "../../components/UI/NavigationBar/NavigationItem";
import GithubIcon from "../../assets/images/github.svg";
import LinkedInIcon from "../../assets/images/linkedin.svg";
import FacebookIcon from "../../assets/images/facebook.svg";

configure({adapter: new Adapter()})

describe("<NavigationBar/>", function () {
    it('should contain a <NavigationItem/>', function () {
        const wrapper = shallow(<NavigationBar/>)
        expect(wrapper.contains(<NavigationItem link="/posts">Posts</NavigationItem>)).toEqual(true)
        expect(wrapper.contains(<NavigationItem exact link="/">christianhjelmslund</NavigationItem>)).toEqual(true)
        expect(wrapper.contains(<NavigationItem link="/investing">Investing</NavigationItem>)).toEqual(true)

        expect(wrapper.contains(<ExternalNavigation src={GithubIcon} alt={"Github"}
            link={"https://github.com/christianhjelmslund"}/>)).toEqual(true)

        expect(wrapper.contains(<ExternalNavigation src={LinkedInIcon} alt={"LinkedIn"}
            link={"https://www.linkedin.com/in/christian-hjelmslund/"}/>)).toEqual(true)

        expect(wrapper.contains(<ExternalNavigation src={FacebookIcon} alt={"Facebook"}
                            link={"https://www.facebook.com/ChristianHjelmslund/"}/>)).toEqual(true)
    })
})