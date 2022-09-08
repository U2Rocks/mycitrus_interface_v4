import { View, Text, StyleSheet, Image } from 'react-native'
import design from '../../constants/newglobal'
import { test400_2 } from '../../images/imageExport2'

const HeadlineCluster2 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.bigPicture}>
            <Image source={test400_2} style={styles.imageStyle}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={[styles.textVisibility]}>This Default Title is excessively long for no reason??? I will make it longer to cause issues</Text>
            <Text style={[styles.textVisibility, styles.textItalics]}>Published: 08/11/22</Text>
        </View>
    </View>
  )
}

export default HeadlineCluster2

const styles = StyleSheet.create({
    container: {
        backgroundColor: design.NEW_SCHEME_BLACK,
        padding: 10,
        marginRight: 10,
    },
    bigPicture: {
        backgroundColor: design.NEW_SCHEME_BURGUNDY,
        width: 400,
        height: 200,
        marginBottom: 10,
    },
    imageStyle: {
        transform: [{scale: 1}],
        resizeMode: 'cover'
    },
    textVisibility: {
        color: design.COLOR_WHITE,
        marginBottom: 2,
        fontSize: 16,
    },
    textItalics: {
        fontStyle: 'italic',
    },
    textContainer: {
        width: 400,
    }
})