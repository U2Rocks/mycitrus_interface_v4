import HomeScreen4 from './screens/HomeScreen4';
import TopStoryScreen from './screens/TopStoryScreen';
import RecentHeadlineScreen from './screens/RecentHeadlineScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// create useArticles hook logic and statically load with dummy data ->
// make sure hook works with loading data

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen4} />
        <Stack.Screen name="RecentHead" component={RecentHeadlineScreen} />
        <Stack.Screen name="TopStory" component={TopStoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

