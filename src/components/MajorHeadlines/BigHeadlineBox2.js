import { View, Text, StyleSheet } from 'react-native'
import HeadlineBoxHeader2 from './HeadlineBoxHeader2'
import HeadlineBoxMain2 from './HeadlineBoxMain2'

// this is the component that holds smaller components
// for the big box headline / has horizontal scrolling?

const BigHeadlineBox2 = ({ navigate }) => {
  return (
    <View style={styles.container}>
        <HeadlineBoxHeader2 />
        <HeadlineBoxMain2 navigation={navigate} />
    </View>
  )
}

export default BigHeadlineBox2

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 25,
  }
})