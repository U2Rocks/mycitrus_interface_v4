import { View, Text, StyleSheet, ScrollView } from 'react-native'
import design from '../../constants/newglobal'
import HeadlineCluster2 from './HeadlineCluster2'

// contains the rest of the content for the big box section

const HeadlineBoxMain2 = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HeadlineCluster2 />
        <HeadlineCluster2 />
        <HeadlineCluster2 />
        <HeadlineCluster2 />
        <HeadlineCluster2 />
      </ScrollView>
    </View>
  )
}

export default HeadlineBoxMain2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: design.NEW_SCHEME_WHITE
  }
})