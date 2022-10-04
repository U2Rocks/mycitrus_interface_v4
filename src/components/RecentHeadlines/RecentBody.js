import { View, Text, StyleSheet, ScrollView } from 'react-native'
import design from '../../constants/newglobal'

const RecentBody = ({ artTitle, artBody }) => {
  return (
    <View style={[styles.textBody, {flex: artTitle.length > 62 ? 4 : 9}]}>
      <ScrollView style={styles.scrolling} showsVerticalScrollIndicator={false}>
        <Text style={styles.textArt}>
          {artBody}
        </Text>
      </ScrollView>
    </View>
  )
}

export default RecentBody

const styles = StyleSheet.create({
  textBody: {
    backgroundColor: design.NEW_SCHEME_WHITE,
    width: '100%',
    alignContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    flex: 7,
  },
  textArt: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
  scrolling: {
    height: '80%',
  }
})