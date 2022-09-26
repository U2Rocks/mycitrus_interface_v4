import { View, Text, StyleSheet } from 'react-native'
import design from '../../constants/newglobal'

const RecentHeader = ({ artTitle }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{artTitle}</Text>
    </View>
  )
}

export default RecentHeader

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 3,
    width: '100%',
    backgroundColor: design.NEW_SCHEME_GREENISH,
  }
})