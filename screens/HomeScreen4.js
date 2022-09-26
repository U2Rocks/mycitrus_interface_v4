import { SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Header4 from '../src/components/Header4'
import BigHeadlineBox2 from '../src/components/MajorHeadlines/BigHeadlineBox2'
import MinorHeadlinesBox2 from '../src/components/MinorHeadlines/MinorHeadlinesBox2'
import MinorHeadlineHeader2 from '../src/components/MinorHeadlines/MinorHeadlineHeader2'
import design from '../src/constants/newglobal'
import { useEffect, useLayoutEffect } from 'react'
import useArticles from '../src/hooks/useArticles'



const HomeScreen4 = ({ navigation }) => {


  const [curArticle, setCurArticle, errorText] = useArticles()
  

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false})
  }, [navigation])

    return (
      <SafeAreaView style={styles.container}>
        <Header4 />
        <BigHeadlineBox2 navigate={navigation} />
        <MinorHeadlineHeader2 />
        <MinorHeadlinesBox2  navigate={navigation} />
        <StatusBar barStyle={design.NEW_SCHEME_BLACK}/>
      </SafeAreaView>
    )
  }


export default HomeScreen4


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: design.NEW_SCHEME_GREENISH,
    }
})