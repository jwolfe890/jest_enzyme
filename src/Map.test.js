import React from 'react';

configure({ adapter: new Adapter() });

import App from './App'

configure({adapter: new Adapter() });

describe('<Map />', () => {
    it('should render two some stuff', () => {
        const wrapper = shallow(<App />);
    });
});
