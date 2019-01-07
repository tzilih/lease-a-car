import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pagination from './Pagination';

configure({adapter: new Adapter()});

describe('<Pagination />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Pagination />);
    })

    it('should disable First button if activePage is 1', () => {
        wrapper.setProps({activePage: 1});
        expect(wrapper.find('.disabled').contains(<span>First</span>)).toEqual(true);
    });

    it('should not disable First button if activePage is 2', () => {
        wrapper.setProps({ activePage: 2 });
        expect(wrapper.find('.disabled').contains(<span>First</span>)).toEqual(false);
    })

    it('should advance to the next page when clicking Next', () => {
        const clicked = jest.fn();
        wrapper.setProps({ activePage: 1 , clicked: clicked});
        wrapper.find('li[data-key="Next"]').simulate('click');
        expect(clicked).toHaveBeenCalledWith('Next');
    });
})