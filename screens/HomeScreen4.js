import { SafeAreaView, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Header4 from '../src/components/Header4'
import BigHeadlineBox2 from '../src/components/MajorHeadlines/BigHeadlineBox2'
import MinorHeadlinesBox2 from '../src/components/MinorHeadlines/MinorHeadlinesBox2'
import design from '../src/constants/newglobal'



const HomeScreen4 = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Header4 />
        <BigHeadlineBox2 />
        <MinorHeadlinesBox2 />
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