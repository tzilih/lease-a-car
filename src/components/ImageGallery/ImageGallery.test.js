import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ImageGallery from './ImageGallery';

configure({ adapter: new Adapter() });

describe('<ImageGallery />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ImageGallery />);
        wrapper.setProps({ images: ['url1', 'url2', 'url3'] });
    })

    it('should advance to the next image when clicking right arrow', () => {
        // by default, gallery starts at currentImageIndex = 0
        expect(wrapper.state()).toEqual({ currentImageIndex: 0 })
        wrapper.find('a.carousel-control-next').simulate('click');
        expect(wrapper.state()).toEqual({currentImageIndex: 1})
    });

    it('should move to the previous image when clicking left arrow', () => {
        wrapper.setState({currentImageIndex: 3});
        // wrapper.setProps({ images: ['url1', 'url2', 'url3'] });
        wrapper.find('a.carousel-control-prev').simulate('click');
        expect(wrapper.state()).toEqual({ currentImageIndex: 2 })
    });

})