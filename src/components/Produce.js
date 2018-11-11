import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import '../index.css'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { typography } from 'material-ui/styles';

const mapStyles = {
    width: '100%',
    height: '50%'
  };

  
class Produce extends React.Component {

    componentDidMount(props) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
    
            this.setState({
              userLocation: { lat: latitude, lng: longitude },
              loading: false
            });
          },
          () => {
            this.setState({ loading: false });
          }
        );
      }

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
        userLocation: {lat: 40.794, lng: -77.8607}, 
        loading: true
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

    constructor(props) {
        super(props);
        this.handleFruits = this.handleFruits.bind(this);
        this.handleVegetables = this.handleVegetables.bind(this);
      }

    handleFruits(event) {
        event.preventDefault();
        this.props.history.push('/fruits');
    }

    handleVegetables(event) {
        event.preventDefault();
        this.props.history.push('/vegetables');
    }

    render() {
        const { loading, userLocation } = this.state;
        const { google } = this.props;
        return (
            <div>  
                <header id="headerr">
                    <h1>Produce Finder</h1>
                </header>
                
                <a href="/" className='backButton'>Logout</a>
                
                <div class="buttons">
                <form onSubmit={this.handleFruits}>
                    <input className='produceSelect' type='submit' value='Fruits' />
                </form>

                <form onSubmit={this.handleVegetables}>
                    <input className='produceSelect' type='submit' value='Vegetables' />
                </form>

                
                </div>

                <Map
                google={google}
                zoom={15}
                style={mapStyles}
                initialCenter={userLocation}
                >
                    <Marker
                    onClick={this.onMarkerClick}
                    name={'Here is where the information goes'}
                    />
                    <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC1DX65BO6j049cTq_jCaw4w5wxotzwz5U'
})(Produce);


