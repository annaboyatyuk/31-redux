import React from 'react';

class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      budget: '',
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
  }

  
  render() {
    console.log('JLDSFK',this.props);

    return (
      <form onSubmit={this.handleSubmit} >
        
        <label >NAME</label>

        <input type="text" name='name' onChange={this.handleChange} value={this.props.name}/>

        <label >BUDGET</label>

        <input type="text" name='budget' onChange={this.handleChange} value={this.state.budget}/>

        <input type="submit"  value={this.props.buttonText}/>

      </form>
    );
  }
}


export default CategoryForm;
