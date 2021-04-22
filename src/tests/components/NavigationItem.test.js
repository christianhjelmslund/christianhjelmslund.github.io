import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import NavigationItem from "../../components/UI/NavigationBar/NavigationItem";

configure({adapter: new Adapter()})

describe("<NavigationItem/>", function () {

    it('should pass on the children as the text p1', function () {
        const wrapper = shallow(<NavigationItem link={"/"}>Test</NavigationItem>)
        expect(wrapper.text()).toEqual("Test")
    })

    it('should pass on the children as the text p2', function () {
        const wrapper = shallow(<NavigationItem link={"/"}>Test</NavigationItem>)
        expect(wrapper.text()).not.toEqual("")
    })
})