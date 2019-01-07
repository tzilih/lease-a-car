import React, { Component } from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './Car.css';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false
        }
    }

    componentDidMount = () => {
        if (localStorage.hasOwnProperty(this.props.id)) {
            this.setState({
                favorite: JSON.parse(localStorage.getItem(this.props.id))
            })
        }
    }

    toggleFavorite = (event) => {
        event.preventDefault();
        const favorite = !this.state.favorite;
        this.setState({
            favorite: favorite
        });
        localStorage.setItem(this.props.id, favorite);
    }

    render() {
        const id = this.props.id;
        const detailsLink = `/cars/${id}`;
        let mileage = null;
        if (this.props.mileage) {
            mileage = <p className="mileage text-muted float-right">
                Mileage {this.props.mileage.toLocaleString()}
            </p>
        }
        return (
            <div className="col-xs-12 col-lg-6">
                <a href={detailsLink} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="card">
                        <div className="card-body">
                            <div className="float-left">
                                <h5 className="card-title">{`${this.props.year} ${this.props.make}`}</h5>
                                <h6 className="card-subtitle text-muted">{`${this.props.model} ${this.props.trim}`}</h6>
                            </div>
                            <div className="float-right favorite-button">
                                <FavoriteButton click={this.toggleFavorite} favorite={this.state.favorite}/>
                            </div>
                            <img className="card-img" src={this.props.main_image_url} alt="car"/>
                            <div className="float-left">
                                <h5 className="card-text monthly-fee">${this.props.monthly_fee}/mo.</h5>
                                <h6 className="card-text start-fee">${this.props.start_fee} Start Fee</h6>
                            </div>
                            {mileage}
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default Car;