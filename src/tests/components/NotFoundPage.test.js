import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/ExpenseListItem';


test('should return not found page', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});

