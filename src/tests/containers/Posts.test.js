import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import { Home } from "../../pages/Home";
import Post from "../../pages/Post";

configure({adapter: new Adapter()})

describe('<Home/>', () => {

    let wrapper

    beforeEach(function () {
        wrapper = shallow(<Home/>)
    })

    it('it should not have any <Post/> children', function () {
        expect(wrapper.contains(<Post/>)).toEqual(false)
    });

    it('it should have 1 <Post/>', function () {
        wrapper.setProps({posts: [{}]})
        expect(wrapper.find(Post)).toHaveLength(1)
    });

    it('it should have 5 <Post/>', function () {
        wrapper.setProps({posts: [{},{},{},{},{}]})
        expect(wrapper.find(Post)).toHaveLength(5)
    });

    it('it should filter out posts based on title <Post/>', function () {
        wrapper.setProps({posts: [
                {
                    author: "Christian Hjelmslund",
                    category: ["software"],
                    content: "😃",
                    title: "qqq",
                    id: "post1"
                },
                {
                    author: "Christian Hjelmslund",
                    category: ["testing"],
                    content: "😃",
                    title: "aaa",
                    id: "post2"
                }]
        })

        expect(wrapper.find('#post1')).toHaveLength(1)
        expect(wrapper.find('#post2')).toHaveLength(1)
        wrapper.find('#styledInput').simulate('change', {target: {value: 'aa'}})
        expect(wrapper.find('#post1')).toHaveLength(0)
        expect(wrapper.find('#post2')).toHaveLength(1)
        wrapper.find('#styledInput').simulate('change', {target: {value: 'qq'}})
        expect(wrapper.find('#post1')).toHaveLength(1)
        expect(wrapper.find('#post2')).toHaveLength(0)
        wrapper.find('#styledInput').simulate('change', {target: {value: ''}})
        expect(wrapper.find('#post1')).toHaveLength(1)
        expect(wrapper.find('#post2')).toHaveLength(1)
        wrapper.find('#styledInput').simulate('change', {target: {value: 'bb'}})
        expect(wrapper.find('#post1')).toHaveLength(0)
        expect(wrapper.find('#post2')).toHaveLength(0)

        wrapper.find('#reset').simulate('click')
        expect(wrapper.find('#post1')).toHaveLength(1)
        expect(wrapper.find('#post2')).toHaveLength(1)
    })
})