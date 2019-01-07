import React from 'react';
import Car from '../Car/Car';

const CarList = (props) => {
    let cars = <div>Loading...</div>;
    if (props.cars) {
        cars = props.cars
            .filter(car => car.mileage >= props.minMileage)
            .map((car) =>
                <Car 
                    key={car.id}
                    id={car.id} 
                    make={car.make}
                    model={car.model}
                    trim={car.trim}
                    year={car.model_year}
                    mileage={car.mileage}
                    main_image_url={car.chrome_image_url}
                    start_fee={car.product_financials[0].start_fee_cents/100}
                    monthly_fee={car.product_financials[0].monthly_payment_cents/100}/>
        );
    }

    return (
        <div className="row">
            {cars}
        </div>
    )
}

export default CarList;