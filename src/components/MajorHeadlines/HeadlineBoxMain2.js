import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import design from '../../constants/newglobal'
import HeadlineCluster2 from './HeadlineCluster2'
import { bigArticleList } from '../../data/dataList4.js'

// contains the rest of the content for the big box section

const HeadlineBoxMain2 = ({ navigation }) => {

  const keyExtraction = item => item.id
  const renderItems = ({item}) => (<HeadlineCluster2 mTitle={item.title} mDate={item.date} navigate={navigation}/>)

  return (
    <View style={styles.container}>
      <FlatList 
      data={bigArticleList}
      keyExtractor={keyExtraction}
      renderItem={renderItems}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
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