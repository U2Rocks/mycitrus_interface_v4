import { SafeAreaView, Text, StyleSheet } from 'react-native'
import TopHeader from '../src/components/TopStories/TopHeader'
import TopBody from '../src/components/TopStories/TopBody'
import TopFooter from '../src/components/TopStories/TopFooter'
import design from '../src/constants/newglobal'

// screen that is populated when someone clicks on a top article

const TopStoryScreen = ({ route, navigation }) => {

  const { topTitle } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader artTitle={topTitle}/>
      <TopBody artTitle={topTitle} />
    </SafeAreaView>
  )
}

export default TopStoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: design.NEW_SCHEME_GREENISH,
    }
})