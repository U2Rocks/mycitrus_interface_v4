import { View, Text, StyleSheet } from 'react-native'


// contains the heading for the big box section

const HeadlineBoxHeader2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Top Stories</Text>
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