import React, { Component } from 'react';
import RecipesContext from '../RecipesContext';
import RecipeCard from '../RecipeItem/RecipeCard';
import Banner from  '../components/Banner';

export default class RecipeList extends Component {
  static defaultProps = {
    recipes: []
  }

  static contextType = RecipesContext;
  
  render() {
    const { recipes } = this.context;
    
    return(
      <section className='RecipeList'>
        <Banner title='recipes are my jam'>
        </Banner>
        <ul>
          {recipes.map(recipe => 
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              {...recipe}
            />
          )}
        </ul>
      </section>
    )
  }
};


