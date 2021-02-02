import React, {Component} from 'react';
import RecipesContext from '../RecipesContext';


const Required = () => (
  <span className='AddRecipe_required'> * </span>
);
export default class AddRecipe extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    }
  };

  static contextType = RecipesContext;

  handleSubmit = e => {
    e.preventDefault();

    const { name, ingredients, directions, proteinType, calories, protein } = e.target; 
    const newRecipe = {
      name: name.value,
      ingredients: ingredients.value,
      directions: directions.value,
      proteinType: proteinType.value,
      calories: calories.value,
      protein: protein.value
    };
    console.log(newRecipe)
  };

  render() {
    return(
      <section className='AddRecipe'>
        <h3> Create New Recipe </h3>
        
        <form
          className='AddRecipe_form'
          onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor="Name">Recipe Name: {' '} <Required /></label> <br />
            <input type="text" id="foodname" name="recipeName" placeholder="Food Recipe Name" required />
          </div>
          {/* cal / protein / fat */}
          <div>
            <label htmlFor="calories">Calories: {' '} <Required /></label> <br />
            <input type="number" id="calories" name="calories" placeholder="120" required />
          </div>
          <div>
            <label htmlFor="protein">Protein: {' '} <Required /></label> <br />
            <input type="number" id="protein" name="protein" placeholder="27" required />
          </div>
          {/* End of cal / protein / fat */}
          <div>
            <label htmlFor="proteinType">Protein Type</label>
            <select id="proteinType" name="proteinType">
              <option value="chicken">Chicken</option>
              <option value="beef">Beef</option>
              <option value="lamb">Lamb</option>
              <option value="fish">Fish</option>
              <option value="seafood">Seafood</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </div>
          <div>
            <label htmlFor="ingredients"> Ingredients <br />
              (Separate each ingredient by a comma): {' '} <Required /></label> <br />
            <textarea id="ingredients" name="ingredients" rows="6" cols="45" required></textarea>
          </div>
          <div>
            <label htmlFor="directions"> Directions: {' '} <Required /></label> <br />
            <textarea id="directions" name="directions" rows="6" cols="45" required></textarea>
          </div>
          <div>
            <button 
              type="submit"
              onClick={() => this.props.handleSubmit}> 
              Submit Recipe 
            </button>
          </div>
        </form>
      </section>
    )
  }
};


