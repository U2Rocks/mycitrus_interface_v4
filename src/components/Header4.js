import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { useState } from 'react'
import design from '../constants/newglobal'


// not complete will be edited with search bar toggle***
// decorative header that becomes search bar when magnifying glass clicked

const Header4 = () => {

    // function that triggers when magnifying glass is pressed
    const searchPress = () => console.log("Search Button Pressed")

  return (
    <View style={styles.container}>
      <View style={[styles.center]}>
        <Text style={[styles.text]}>MYCITRUS NEWS</Text>
      </View>
    </View>
  )
}

export default Header4

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: design.COLOR_ORANGE,
        flex: 1,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        letterSpacing: 3,
        fontWeight: 'bold',
        color: design.NEW_SCHEME_WHITE,
    },
    buttonSearch: {
        fontSize: 30,
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
        backgroundColor: design.NEW_SCHEME_WHITE,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: design.NEW_SCHEME_BLACK,
        padding: 5,
    },
    border: {
        borderColor: design.COLOR_BLACK,
        borderWidth: 2,
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSearchBar: {
        padding: 5,
        backgroundColor: design.NEW_SCHEME_WHITE,
        borderColor: design.NEW_SCHEME_BLACK,
        borderWidth: 1,
        height: '100%',
        width: '80%',
    },
    textSearchView: {
        height: '100%',
        width: '50%',
        backgroundColor: design.NEW_SCHEME_WHITE,
        borderColor: design.NEW_SCHEME_BLACK,
    }
})