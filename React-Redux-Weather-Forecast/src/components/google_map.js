import React, { Component } from 'react';

class GoogleMap extends Component{
    // general 3rd party integration
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: parseFloat(12),
            center : {
                lat: parseFloat(this.props.lat),
                lng: parseFloat(this.props.lon)
            }    
        })
    }

    render() {
        // this.refs.map
        return <div ref="map"/>
    }
}

export default GoogleMap;