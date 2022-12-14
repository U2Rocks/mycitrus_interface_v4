import HomeScreen4 from './screens/HomeScreen4';
import TopStoryScreen from './screens/TopStoryScreen';
import RecentHeadlineScreen from './screens/RecentHeadlineScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// only non reactive part of app is body text for articles
// NEXT: make body text reactive to json structures 
// CURRENT: every time top story page is called the hook state is reset to null and will not hydrate data

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen4} />
        <Stack.Screen name="Recent Headline" component={RecentHeadlineScreen} />
        <Stack.Screen name="Top Story" component={TopStoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

