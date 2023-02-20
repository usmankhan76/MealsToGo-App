import  React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

const DetailListComp = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(true);
  const [launchExpanded, setLaunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinksExpanded] = useState(false);

//   const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView >
        <List.Section title="Detail">
            <List.Accordion
                title="Breakfast"
                left={props => <List.Icon {...props} icon="bread-slice" />}
                expanded={breakfastExpanded}
                onPress={()=>setBreakfastExpanded(!breakfastExpanded)}
                >
                <List.Item  title="Eggs Benedict" />
                <List.Item title="Classic Breakfast" />
            </List.Accordion>

            <List.Accordion
                title="Launch"
                left={props => <List.Icon {...props} icon="hamburger" />}
                expanded={launchExpanded}
                onPress={()=>setLaunchExpanded(!launchExpanded)}>
                <List.Item title="Burger w/ Fries" />
                <List.Item title="Steak Sandwich" />
                <List.Item title="Mushroom Soup" />
            </List.Accordion>

                <List.Accordion
                title="Dinner"
                left={props => <List.Icon {...props} icon="food-variant" />}
                expanded={dinnerExpanded}
                onPress={()=>setDinnerExpanded(!dinnerExpanded)}>
                <List.Item title="Spaghetti Bolognese" />
                <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                <List.Item title="Steak Frites" />
            </List.Accordion>

            <List.Accordion
                title="Drinks"
                left={props => <List.Icon {...props} icon="cup" />}
                expanded={drinkExpanded}
                onPress={()=>setDrinksExpanded(!drinkExpanded)}>
                <List.Item title="Coffee" />
                <List.Item title="Tea" />
                <List.Item title="Modelo" />
                <List.Item title="Coke" />
                <List.Item title="Fanta" />
            </List.Accordion>

            
        </List.Section>
    </ScrollView>
  );
};

export default DetailListComp;