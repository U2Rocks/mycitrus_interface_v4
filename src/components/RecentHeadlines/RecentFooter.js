import { View, Text, StyleSheet } from 'react-native'
import design from '../../constants/newglobal'

const RecentFooter = () => {
  return (
    <View style={styles.footBody}>
      <Text style={styles.footText}>▲ Return to Top of Article ▲</Text>
    </View>
  )
}

export default RecentFooter

const styles = StyleSheet.create({
  footBody: {
    width: '100%',
    backgroundColor: design.NEW_SCHEME_GREENISH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 8,
  }
})