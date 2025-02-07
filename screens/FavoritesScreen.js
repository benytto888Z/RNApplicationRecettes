import React from 'react';
import MealList from "../components/MealList";
import {MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";


const FavoritesScreen=props=> {
    const favMeals = MEALS.filter(meal=>meal.id ==='m1' || meal.id==='m2');
    return (
       <MealList listData={favMeals} navigation={props.navigation}/>
    );
};

FavoritesScreen.navigationOptions =(navigationData)=>{
    return{
        headerTitle: 'Mes coups de cœur',
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu'
                  onPress={()=>{
                      navigationData.navigation.toggleDrawer();
                  }}/>
        </HeaderButtons>}
};


export default FavoritesScreen;