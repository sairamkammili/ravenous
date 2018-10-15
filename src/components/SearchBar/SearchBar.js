import React from 'react';
import './SearchBar.css';


const sortByOptions = {
    'best_match' :'Best Match',
    'rating' : 'Highest Rated' ,
    'review_count' : 'Most Viewed'
};



class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term :'',
            location :'',
            sortBy : 'best_match'
        }
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    };

    getSortByClass(sortByOption){
        if (this.state.sortBy === sortByOption){
            return 'active';
        }
        else{
            return '';
        }
    
    };
    
    handleSortByChange(newVal){
        this.setState({sortBy : newVal});
    };

    handleTermChange(event){
        this.setState({term : event.target.value});
    };

    handleLocationChange(event){
        this.setState({location :event.target.value});
    };

    handleSearch(event){
        this.props.search(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    };

    renderSortByOptions(){
        return Object.entries(sortByOptions).map(([key,value],i)=>{
            return (
                <li key={key} className = {this.getSortByClass(value)} onClick = {this.handleSortByChange.bind(this,value)}>{value}</li>
            )
        })
    }

    render(){
        return (
        <div className ="SearchBar">
            <div className ="SearchBar-sort-options">
            <ul>
                {this.renderSortByOptions()}
            </ul>
            </div>
            <div className ="SearchBar-fields">
                <input placeholder="Search Businesses" onChange = {this.handleTermChange} />
                <input placeholder="Where?" onChange = {this.handleLocationChange}/>
            </div>
            <div className ="SearchBar-submit">
                <a onClick = {this.handleSearch}>Let's Go</a>
            </div>
        </div>)
    }

};

export default SearchBar;