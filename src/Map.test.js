import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import React from 'react';

configure({ adapter: new Adapter() });

import App from './App'

configure({adapter: new Adapter() });

describe('<Map />', () => {
    it('should render two some stuff', () => {
        const wrapper = shallow(<App />);
    });
});

