import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { RECIPES } from '../shared/recipes';

function RenderRecipe({recipe}) {
    if (recipe) {
        return (
            <Card
                featuredTitle={recipe.name}
                image={require('./images/coleslaw.jpg')}>
                <Text style={{margin: 10}}>
                    {recipe.description}
                </Text>
            </Card>
        );
    }
    return <View/>
}

class RecipeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES
        };
    }

    static navigationOptions ={
        title: 'Recipe Information'
    }

    render() {
        const recipeId = this.props.navigation.getParam('recipeId');
        const recipe = this.state.recipes.filter(recipe => recipe.id === recipeId)[0];
        return <RenderRecipe recipe={recipe}/>;
    }
}

export default RecipeInfo;