import React from 'react';

import { Route } from 'react-router-dom';
import RecipesContext from './RecipesContext';
import NavBar from './NavBar/NavBar';
import HomePage from './pages/HomePage'
import RecipeList from './RecipeList/RecipeList';
import SingleRecipePage from './pages/SingleRecipePage';
import AddRecipe from './AddRecipe/AddRecipe';
import Footer from './components/Footer';

import store from './data';

import './App.css';
import SignUpForm from './Auth_Signin/SingUpForm';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      recipes: [],
    }
  };

  setRecipes = recipes => {
    this.setState({
      recipes
    })
  };

  addRecipe = recipe => {
    this.setState({
      recipes: [ ...this.state.recipes, recipe ]
    })
  };

  deleteRecipe = id => {
    const newRecipe = this.state.recipes.filter(rs => rs.id !== id)
    this.setState({
      recipes: newRecipe
    })
  };

  updateRecipe = updatedRecipe => {
    this.setState({
      recipes: this.state.recipes.map(rs =>
        (rs.id !== updatedRecipe.id) ? rs : updatedRecipe)
    })
  };

  editRecipe = (recipeId, recipeData) => {
    this.setState({
      recipes: this.state.recipes.map(r =>
        r.id === Number(recipeId) ? {...r, ...recipeData} : r
      )
    })
  };

  componentDidMount() {
    this.setState(store)
  };

  render() {
    const contextValue = {
      recipes: this.state.recipes,
      addRecipe: this.addRecipe,
      deleteRecipe: this.deleteRecipe,
      updatedRecipe: this.updatedRecipe,
      editRecipe: this.editRecipe
    };
    console.log(contextValue.recipes)
    return (
      <main className='App'>
        <NavBar />
        <RecipesContext.Provider value={contextValue}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/' component={RecipeList} />
          <Route exact path='/recipes' component={RecipeList} />
          <Route exact path='/recipe/:recipeId' component={SingleRecipePage} />
          <Route exact path='/myrecipes' component={AddRecipe} />
          <Route exact path='/signin' component={SignUpForm} />
        </RecipesContext.Provider>
        <Footer />
      </main>
    );
  };
};


