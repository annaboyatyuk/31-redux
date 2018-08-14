import React from 'react';
import CategoryForm from '../category-form/categoryForm';
import { connect } from 'react-redux';



class CategoryItem extends React.Component {

  state = {
    editing: false,
  }

  handleDouble = (e) => {
    e.preventDefault();
    this.setState({ editing: true })
  }

  updateNote = (note) => {
    this.setState({
      editing: false
    });
    this.props.onComplete(note);
  }

  render() {

    console.log('AAAAA', this.props);

    if (this.state.editing) {
      return (
        <React.Fragment>

          <ul>
            {this.props.category.map(item => (
              <li id={item.id} key={item.id}>
                <h2>{item.name}</h2>

                <p onDoubleClick={this.handleDouble} >{item.budget}</p>

                <button onClick={() => this.props.destroy(item)}>X</button>
              </li>
            ))}
          </ul>

          <CategoryForm buttonText='UPDATE' onComplete={this.updateNote}/>

        </React.Fragment>
      )
    }


    return (
      <React.Fragment>


        <ul>
          {this.props.category.map(item => (
            <li id={item.id} key={item.id}>
              <h2>{item.name}</h2>

              <p onDoubleClick={this.handleDouble} >{item.budget}</p>

              <button onClick={() => this.props.destroy(item)}>X</button>
            </li>
          ))}
        </ul>

      </React.Fragment>
    );

  }

}

const mapStateToProps = state => ({
  category: state,
});

export default connect(
  mapStateToProps
)(CategoryItem);


