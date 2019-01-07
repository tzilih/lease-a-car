import React, { Component } from 'react';
import './ImageGallery.css';

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        }
    }

    changeImage(change) {
        let currentImageIndex = this.state.currentImageIndex + change; 
        if (currentImageIndex < 0) currentImageIndex = this.props.images.length - 1;
        if (currentImageIndex >= this.props.images.length) currentImageIndex = 0;
        this.setState({
            currentImageIndex: currentImageIndex
        })
    }
    
    render() {
        let images;
        if (this.props.images) {
            images = this.props.images.map((image, index) => {
                let imageClass = ['carousel-item'];
                if (index === this.state.currentImageIndex) {
                    imageClass.push('active');
                }
                return (
                    <div key={index} className={imageClass.join(' ')}>
                        <img className="d-block w-100" src={image} alt="car" />
                        <div className="carousel-caption d-none d-md-block caption">
                            <span style={{paddingTop: '0 !important', bottom: '25px'}}>
                                <span className="image-number">{index + 1}</span><span className="image-total">/{this.props.images.length}</span>
                            </span>
                        </div>
                    </div>
                )
            }
            )
        }
        return (
            <div className="row">
                <div className="col-xs-12" style={{ backgroundColor: '#aba8a8', margin: '0 auto' }}>
                    <div className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {images}
                        </div>
                        <a className="carousel-control-prev" href="#" onClick={(event) => this.changeImage(-1)} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" onClick={(event) => this.changeImage(1)} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageGallery;