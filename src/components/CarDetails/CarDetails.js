import React, { Component } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './CarDetails.css';

class CarDetails extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            error: null,
            vehicle: {},
            favorite: false
        }
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }
   
   componentDidMount() {
       const vin = this.props.vin;
       fetch(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/${vin}`)
            .then(response => response.json())
            .then(
                json => {this.setState({
                    vehicle: json.data.vehicle,
                    isLoaded: true
                })},
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
        if (localStorage.hasOwnProperty(vin)) {
            this.setState({
                favorite: JSON.parse(localStorage.getItem(vin))
            })
        }
    }

    toggleFavorite = (event) => {
        event.preventDefault();
        const favorite = !this.state.favorite;
        this.setState({
            favorite: favorite
        });
        localStorage.setItem(this.state.vehicle.id, favorite);
    }

    render() {
        let cpoFlag = null;
        if (this.state.vehicle.cpo_flag) {
            cpoFlag = <div className="cpo-flag">CPO</div>;
        }
        let mileage = null;
        if (this.state.vehicle.mileage) {
            mileage = <div className="details-mileage">
                        {this.state.vehicle.mileage.toLocaleString()} Miles
                    </div>
        }
        if (this.state.error) {
            return <div>Oops...something went wrong.</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 images-container">
                        <ImageGallery images={this.state.vehicle.image_location_list} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="pull-left" style={{display: 'inline-block', textAlign: 'left'}}>
                            <div className="year-make">
                                {this.state.vehicle.model_year} {this.state.vehicle.make}
                            </div>
                            <div className="model-body">
                                <strong>
                                    {this.state.vehicle.model} {this.state.vehicle.body_style}
                                </strong>
                            </div>
                            {mileage}
                            {cpoFlag}
                        </div>
                        <div className="favorite-container pull-right">
                            <FavoriteButton click={this.toggleFavorite} favorite={this.state.favorite}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}


export default CarDetails;