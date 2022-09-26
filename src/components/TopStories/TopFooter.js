import { View, Text, StyleSheet } from 'react-native'
import design from '../../constants/newglobal'

const TopFooter = () => {
  return (
    <View style={styles.topBody}>
      <Text style={styles.topText}>↑ Return to top of Story ↑</Text>
    </View>
  )
}

export default TopFooter

const styles = StyleSheet.create({
  topBody: {
    width: '100%',
    backgroundColor: design.NEW_SCHEME_GREENISH,
    alignItems: 'center'
  },
  topText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
})