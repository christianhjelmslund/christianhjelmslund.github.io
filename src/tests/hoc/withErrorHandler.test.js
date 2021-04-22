import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import withErrorHandler from "../../components/hoc/withErrorHandler";

import Alert from "react-bootstrap/Alert";

configure({adapter: new Adapter()})

function mock_hook(error) {
    return [error, () => {}]
}

describe("<withErrorHandler/>", function () {
    it('it should not have any alert elements, hence no error', function () {

        const Mock_ErrorHandler = withErrorHandler(React.Fragment, () =>
            mock_hook(false));
        const wrapper = shallow(<Mock_ErrorHandler />);

        expect(wrapper.find(Alert)).toHaveLength(0)
    })

    it('it should have one alert element, hence an error', function () {
        const Mock_ErrorHandler = withErrorHandler(React.Fragment, () =>
            mock_hook(true));
        const wrapper = shallow(<Mock_ErrorHandler/>);
        expect(wrapper.find(Alert)).toHaveLength(1)
    })
})