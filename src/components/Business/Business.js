import React from 'react';
import './Business.css'

class Business extends React.Component{
    render() {
        return (
        <div className ="Business">
            <div className ="image-container">
                <img src={this.props.data.imageSrc} alt=''/>
            </div>
            <h2>{this.props.data.name}</h2>
            <div className ="Business-information">
                <div className ="Business-address">
                    <p>{this.props.data.address}</p>
                    <p>{this.props.data.city}</p>
                    <p>{this.props.data.state+ `,`+ this.props.data.zipCode}</p>
                </div>
                <div className ="Business-reviews">
                    <h3>{this.props.data.category}</h3>
                    <h3 className ="rating">{this.props.data.rating} stars</h3>
                    <p>{this.props.data.reviewCount} reviews</p>
                </div>
            </div>
        </div>
        )
    }
};

export default Business;