import React, { Component } from 'react';
import CarList from '../components/CarList/CarList';
import '../App.css';
import Slider from '../components/Slider/Slider';
import Pagination from '../components/Pagination/Pagination';

class CarListingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            mileage: 1000,
            activePage: 1,
            cars: [],
            currentPage: 1,
            filteredCount: null,
            pageCount: null,
            qualifyingCount: null,
            mileageSliderValue: 1000,
            minMileage: 1000
        }
    }

    componentDidMount() {
        this.getCarList();
    }

    sliderChangedHandler = (event) => {
        const mileage = event.target.value;
        this.setState({
            mileageSliderValue: mileage
        });
    }

    getCarList(queryString) {
        let url = 'https://private-4e19e-interviewapi3.apiary-mock.com/vehicles';
        if (queryString) {
            url += queryString;
        }
        fetch(url)
            .then(response => response.json())
            .then(
                json => {this.setState({
                    isLoaded: true,
                    cars: json.data.vehicles,
                    currentPage: json.data.current_page,
                    filteredCount: json.data.filtered_count,
                    pageCount: json.data.page_count,
                    qualifyingCount: json.data.qualifying_count
                })},
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.activePage !== prevState.activePage) {
            const queryString = `?page=${this.state.activePage}`;
            this.getCarList(queryString);
        }
    }

    changePage = (page) => {
        let activePage = this.state.activePage;
        let newPage = null;
        if (page === 'First') newPage = 1;
        else if (page === 'Previous') newPage = activePage - 1;
        else if (page === 'Next') newPage = activePage + 1;
        else if (page === 'Last') newPage = this.state.pageCount;
        else newPage = Number(page); // a specific page was clicked
        this.setState({
            activePage: newPage
        });
    }

    changedMileageHandler = (event) => {
        const mileage = event.target.value;
        // ideally should make ajax call with this new min value as a filter/query param
        this.setState({
            minMileage: mileage
        });
    }

    render() {
        let pagination = null;
        if (this.state.pageCount > 1) {
            pagination = <Pagination pageCount={this.state.pageCount} currentPage={this.state.currentPage} activePage={this.state.activePage} clicked={this.changePage} />
        }
        if (this.state.error) {
            return <div>Oops...something went wrong.</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="App container">
                    <header className="App-header">
                        <h1 className="App-title">Lease A Car</h1>
                    </header>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{paddingLeft: '18px', paddingBottom: '15px'}}>
                            <div style={{textAlign: 'left', fontSize: '22px'}}>
                                Find a lease from <span style={{ color: '#f55d22' }}>{this.state.filteredCount}</span> cars.
                            </div>
                            <hr></hr>
                            <div style={{textAlign: 'left', fontSize: '14px', color: 'gray'}}>
                                <span>Minimum Mileage</span>
                                <Slider
                                    value={this.state.mileageSliderValue}
                                    min="1000"
                                    max="50000"
                                    step="1000"
                                    sliderChanged={this.sliderChangedHandler}
                                    mouseUp={this.changedMileageHandler}/>
                            </div>
                        </div>
                    </div>
                    <CarList cars={this.state.cars} minMileage={this.state.minMileage}/>
                    <div className="col-xs-12 float-right">
                        {pagination}
                    </div>
                </div>
            )
        }
    }
}

export default CarListingPage;