import React, {Component, Fragment} from 'react';
import CategoryForm from '../category-form/categoryForm';
import CategoryItem from '../category-item/categoryItem';
import { connect } from 'react-redux';

import {categoryCreate} from '../../action/categoryActions';

class Dashboard extends Component {

  render() {
    return (
      <Fragment>

        <h2>soifjewoeif</h2>
        <CategoryForm/>

        <CategoryItem/>

      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

