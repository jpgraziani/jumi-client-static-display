import React from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../RecipesContext';



export default function RecipeCard(props) {
  return (
    <RecipesContext.Consumer>
      { (contextValue) => (
        <section>
          <div className='featured-recipes-center'>
            <Link to={`/recipe/${props.id}`}>
              <h3>{props.name} | {props.proteinType} | {props.date}</h3>
            </Link>
          </div>
        </section>
      )}
    </RecipesContext.Consumer>
  )
};