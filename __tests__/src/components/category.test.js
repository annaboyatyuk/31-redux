import React from 'react';
import {addCategory, updateCategory} from '../../../src/reducer/category';


describe('', () => {
  it('should update category', () => {
    const category = {name: 'name', budget: 10};
    const addAction = addCategory(category);
    let state = reducer({categories: []}, addAction);

    const catToUpdate = {...state.categories[0]};

    catToUpdate.budget = 5;

    const updateAction = updateCategory(catToUpdate);

    const updateState = reducer(state, updateAction);

    expect(updateState.categories[0].budget).toBe(5);

  });
});