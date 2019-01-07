import React, { Component } from 'react';
import CarDetails from '../components/CarDetails/CarDetails';

class CarDetailsPage extends Component {
    render() {
        const { match: { params } } = this.props;
        const carId = params.id;
        return (
            <div className="App container">
                <CarDetails vin={carId}/>
            </div>
        )
    }
}

export default CarDetailsPage; 