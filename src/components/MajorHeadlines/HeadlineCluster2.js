import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import design from '../../constants/newglobal'
import { test400_2 } from '../../images/imageExport2'
import { useFonts } from 'expo-font'

const HeadlineCluster2 = ({ mTitle, mDate, navigate }) => {

    const [fontsLoaded] = useFonts({
        'Roboto': require('../../fonts/RobotoRegular-3m4L.ttf'),
        'ItalicRoboto': require('../../fonts/RobotoItalic-W0gE.ttf')
    })

    // sanity check to see if fonts even loaded
    if (!fontsLoaded) return null

    // navigate to top story page on click
    const navigateToTopStory = () => navigate.navigate('TopStory', {topTitle: mTitle})


  return (
    <Pressable onPress={navigateToTopStory}>
        <View style={styles.container}>
            <View style={styles.bigPicture}>
                <Image source={test400_2} style={styles.imageStyle}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.textVisibility, {fontFamily: 'Roboto'}]}>{mTitle}</Text>
                <Text style={[styles.textVisibility, styles.textItalics, {fontFamily: 'ItalicRoboto'}]}>Published: {mDate}</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default HeadlineCluster2

const styles = StyleSheet.create({
    container: {
        backgroundColor: design.NEW_SCHEME_BLACK,
        padding: 10,
        marginRight: 10,
        marginLeft: 3,
        marginTop: 2,
        marginBottom: 2,
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
        fontSize: 15,
    },
    textItalics: {
        fontStyle: 'italic',
    },
    textContainer: {
        width: 400,
    }
})