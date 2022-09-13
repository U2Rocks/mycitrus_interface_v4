import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'


// contains the heading for the big box section

const HeadlineBoxHeader2 = () => {

  const [fontsLoaded] = useFonts({
    'RobotoBold': require('../../fonts/RobotoBold-Xdoj.ttf')
  })

  // sanity check to see if fonts even loaded
  if (!fontsLoaded) return null


  return (
    <View style={styles.container}>
      <Text style={[styles.headline, {fontFamily: 'RobotoBold'}]}>Top Stories</Text>
    </View>
  )
}

export default HeadlineBoxHeader2

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 2,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})