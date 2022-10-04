import { View, Text, StyleSheet, ScrollView } from 'react-native'
import design from '../../constants/newglobal'

const TopBody = ({ artTitle, artBody }) => {
  return (
    <View style={[styles.container, {flex: artTitle.length > 62 ? 4 : 9}]}>
      <ScrollView style={styles.scrolling} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          {artBody}
        </Text>
      </ScrollView>
    </View>
  )
}

export default TopBody

const styles = StyleSheet.create({
  container: {
    backgroundColor: design.NEW_SCHEME_WHITE,
    width: '100%',
    alignContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
  scrolling: {
    height: '80%',
  }
})