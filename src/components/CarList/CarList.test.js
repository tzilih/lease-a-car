import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CarList from './CarList';
import Car from '../Car/Car';

configure({ adapter: new Adapter() });

describe('<CarList />', () => {
    it('should render Car components only if they have minimum mileage', () => {
        const wrapper = shallow(<CarList />);

        wrapper.setProps({
            cars: [
                {id: '1', make: 'honda', model: 'accord', mileage: 3000, product_financials: [{start_fee: 20000, monthly_fee: 29000}]},
                { id: '2', make: 'toyota', model: 'prius', mileage: 24000, product_financials: [{ start_fee: 20000, monthly_fee: 29000 }]},
            ],
            minMileage: 10000
        });
        expect(wrapper.find(Car)).toHaveLength(1);
    })
})