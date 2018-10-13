import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component{
    render() {
       
        return (
            <div className ="BusinessList">
            {this.props.parse.map(item=> <Business data={item}/>)};
            </div>
            );
    }
};

export default BusinessList;