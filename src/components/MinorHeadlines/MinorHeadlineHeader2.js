import { View, Text, StyleSheet } from 'react-native'
import design from '../../constants/newglobal'

const MinorHeadlineHeader2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recent Headlines</Text>
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