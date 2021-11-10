import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { RECIPES } from '../shared/recipes';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('RecipeInfo', { recipeId: item.id })}
                    leftAvatar={{ source: require('./images/coleslaw.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.recipes}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString}
            />
        );
    }
}
    

export default Directory;