import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import design from '../../constants/newglobal'
import { miniImg, test120 } from '../../images/imageExport2'
import { useFonts } from 'expo-font'


// interactible box that leads to full page of audio or news article...

const MinorHeadline2 = ({ mTitle, mDate, navigation }) => {

  const [fontsLoaded] = useFonts({
    'Roboto': require('../../fonts/RobotoRegular-3m4L.ttf')
  })

  function naviateToArticle() {
    navigation.navigate('RecentHead', {aTitle: mTitle})
  }

  // sanity check to see if fonts even loaded
  if (!fontsLoaded) return null

  const headlinePress = () => naviateToArticle()

  return (
    <Pressable onPress={headlinePress}>
      <View style={styles.container}>
        <View style={styles.textSide}>
          <Text style={[styles.headlineText, {fontFamily: 'Roboto'}]}>{mTitle}</Text>
          <Text style={[styles.italiText]}>Published: {mDate}</Text>
        </View>
        <View style={styles.imageBox}>
            <Image source={test120} style={styles.imageStyle}/>
        </View>
      </View>
    </Pressable>
  )
}

export default MinorHeadline2

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: design.COLOR_WHITE,
    height: 140,
    borderBottomColor: design.COLOR_BLACK,
    borderBottomWidth: .75
  },
  text: {
    fontsize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSide: {
    flex: 2,
    justifyContent: 'space-between',
    padding: 5,
  },
  imageBox: {
    height: 120,
    width: 120,
    backgroundColor: design.COLOR_WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
  },
  imageStyle: {
    flex: 1,
    height: 90,
    width: 90,
  },
  italiText: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  headlineText: {
    fontSize: 18,
  }
})