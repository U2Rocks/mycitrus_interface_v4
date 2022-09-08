import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MinorHeadline2 from './MinorHeadline2'
import MinorHeadlineHeader2 from './MinorHeadlineHeader2'
import design from '../../constants/newglobal'

// vertical scrolling box that contains all minor headlines...

const MinorHeadlinesBox2 = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MinorHeadlineHeader2 />
        <MinorHeadline2 />
        <MinorHeadline2 />
        <MinorHeadline2 />
        <MinorHeadline2 />
        <MinorHeadline2 />
        <MinorHeadline2 />
        <MinorHeadline2 />
        <MinorHeadline2 />
      </ScrollView>
    </View>
  )
}

export default MinorHeadlinesBox2

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: design.NEW_SCHEME_GREENISH
  }
})