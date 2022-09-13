import { View, Text, StyleSheet } from 'react-native'
import design from '../../constants/newglobal'
import { useFonts } from 'expo-font'

const MinorHeadlineHeader2 = () => {

  const [fontsLoaded] = useFonts({
    'RobotoBold': require('../../fonts/RobotoBold-Xdoj.ttf')
  })

  // sanity check to see if fonts even loaded
  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontFamily: 'RobotoBold'}]}>Recent Headlines</Text>
    </View>
  )
}

export default MinorHeadlineHeader2

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 2,
      backgroundColor: design.NEW_SCHEME_GREENISH,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  })