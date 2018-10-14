import React from 'react';
import './SearchBar.css';


const sortByOptions = {
    'best_match' :'Best Match',
    'rating' : 'Highest Rated' ,
    'review_count' : 'Most Viewed'
};


class SearchBar extends React.Component{
    renderSortOptions(){
        return Object.entries(sortByOptions).map(([key,value],i)=>{
            return (
                <li key={key}>{value}</li>
            )
        })
    }
    render(){
        return (
        <div className ="SearchBar">
            <div className ="SearchBar-sort-options">
            <ul>
                {this.renderSortOptions()}
            </ul>
            </div>
            <div className ="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className ="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>)
    }

};

export default SearchBar;