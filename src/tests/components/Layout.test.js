import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import NavigationBar from "../../components/UI/NavigationBar/NavigationBar";
import Layout from "../../components/Layout";

configure({adapter: new Adapter()})

describe("<NavigationBar/>", function () {
    it('should contain a <NavigationItems/>', function () {
        const wrapper = shallow(<Layout/>)
        expect(wrapper.contains(<NavigationBar/>)).toEqual(true)
    })
})