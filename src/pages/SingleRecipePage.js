import React from 'react';
import { Link } from 'react-router-dom'
import RecipesContext from  '../RecipesContext';
import Banner from '../components/Banner';
import { findRecipe } from '../Recipe-helpers';

class SingleRecipePage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = RecipesContext

  render() {
    const { recipes = [] } = this.context
    const { recipeId } = this.props.match.params
    const recipe = findRecipe(recipes, recipeId) || { content: '' }
    // let ingredients = recipe.ingredients
    // let array = ingredients.splice(',')
    // console.log(array)
    return (
      <>
        <Banner title={`${recipe.name}`}>
          <Link to='/recipes' className='btn-primary'>
            back to recipes
          </Link>
        </Banner>
        <section className='single-recipe'>
          <div className='single-recipe-info'>
            <article className='desc'>
            <h3>{recipe.name} | {recipe.proteinType}</h3>
            <hr />
            <p>{recipe.description}</p>
            </article>
            <article className='desc'>
              <h3>ingredients</h3>
              <hr />
              {recipe.ingredients}
            </article>
          </div>
        </section>
        <section className='single-recipe'>
          <div className='single-recipe-info'>
            <article className='desc'>
            <h3>directions</h3>
            <hr />
              {recipe.directions}
            </article>
            <article className='desc health-hr'>
              <h3>health benefits</h3>
              <hr />
              <article className='health-info'>
                <div>
                  <h6>calories</h6>
                  {recipe.calories}
                </div>
                <hr className='hrVertical' />
                <div>
                  <h6>protein</h6>
                  {recipe.protein}
                </div>
              </article>
              <hr className='hrThin' />
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default SingleRecipePage;