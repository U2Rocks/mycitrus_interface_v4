import { SafeAreaView, Text, StyleSheet } from 'react-native'
import TopHeader from '../src/components/TopStories/TopHeader'
import TopBody from '../src/components/TopStories/TopBody'
import design from '../src/constants/newglobal'
import useArticles from '../src/hooks/useArticles'
import { useEffect } from 'react'

// screen that is populated when someone clicks on a top article

const TopStoryScreen = ({ route, navigation }) => {

  const { topTitle, topId } = route.params

  const [current, setReg, setBig, errorMsg] = useArticles()

  useEffect( () => {
    console.log(`TopStory Screen title: [${topTitle}] and Id: [${topId}] `)
    let newCurrent = setBig(topTitle, topId)
    console.log('TopStoryScreen: ', newCurrent)
  }, [])

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