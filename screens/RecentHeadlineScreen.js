import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import design from '../src/constants/newglobal'
import RecentHeader from '../src/components/RecentHeadlines/RecentHeader'
import RecentBody from '../src/components/RecentHeadlines/RecentBody'
import RecentFooter from '../src/components/RecentHeadlines/RecentFooter'

// screen that is populated when someone clicks on a recent headline

const RecentHeadlineScreen = ({ route, navigation }) => {

  const { aTitle, aInfo } = route.params
  const storyText = aInfo[0]["articleText"] ? aInfo[0]["articleText"] : "Something went wrong..."

  useEffect( () => {
    console.log(`$$$$$$TopStory Screen title: [${aTitle}] and topInfo: [${aInfo}] `)
    console.log('@@@@@@TopStoryScreen body text: ', aInfo[0]["articleText"])
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <RecentHeader artTitle={aTitle}/>
      <RecentBody artTitle={aTitle} artBody={storyText}/>
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