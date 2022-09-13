import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import MinorHeadline2 from './MinorHeadline2'
import MinorHeadlineHeader2 from './MinorHeadlineHeader2'
import design from '../../constants/newglobal'
import { article_list } from '../../data/dataList4.js'

// vertical scrolling box that contains all minor headlines...

const MinorHeadlinesBox2 = () => {

  const renderItems = ({item}) => (<MinorHeadline2 mTitle={item.title} mDate={item.Date} />)
  const keyExtractorFunc = item => item.id


  return (
    <View style={styles.container}>
      <FlatList 
      data={article_list}
      renderItem={renderItems}
      keyExtractor={keyExtractorFunc}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default MinorHeadlinesBox2

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: design.NEW_SCHEME_GREENISH
  }
})