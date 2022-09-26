import { SafeAreaView, Text, StyleSheet } from 'react-native'
import design from '../src/constants/newglobal'
import RecentHeader from '../src/components/RecentHeadlines/RecentHeader'
import RecentBody from '../src/components/RecentHeadlines/RecentBody'
import RecentFooter from '../src/components/RecentHeadlines/RecentFooter'

// screen that is populated when someone clicks on a recent headline

const RecentHeadlineScreen = ({ route, navigation }) => {

  const { aTitle } = route.params


  return (
    <SafeAreaView style={styles.container}>
      <RecentHeader artTitle={aTitle}/>
      <RecentBody artTitle={aTitle}/>
    </SafeAreaView>
  )
}

export default RecentHeadlineScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: design.NEW_SCHEME_GREENISH,
    }
})