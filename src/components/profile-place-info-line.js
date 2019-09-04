import React from 'react';

/*class InfoLine extends Component{
    render(){
        console.log('items', this.props.city);
        return(
            <li>
                <i className="fa fa-lg fa-map-marker"></i> {this.props.city}
            </li>
        )
    }
}*/

const PlaceInfoLine = props => {
    return(
        <li>
            <i className="fa fa-lg fa-map-marker"></i> {props.city}
        </li>
    )
};

export default PlaceInfoLine;