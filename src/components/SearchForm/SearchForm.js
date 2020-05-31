import React, {Component} from 'react';
import './SearchForm.sass';

export default class SearchForm extends Component
{
  state = {
    value: ''
  }
  
  onSubmit = (e) => {
    e.preventDefault();
  }

  onChange = (e) => {
    this.setState({value: e.target.value});
    this.props.onSearch(e.target.value.trim());  
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <div className="from-group">
            <input type="search" data-testid="search-input" className="form-control" value={this.state.value} onChange={this.onChange} placeholder="Type to search" />
        </div>
      </form>
    );
  }
}