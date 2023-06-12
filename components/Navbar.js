import { Text, Image,View, ImageBackground } from 'react-native'
import React from 'react'

function Navbar(){
    const styles ={
        navbar: {
            width: '100%',
            height: '5%',
            backgroundColor: 'black',
            alignItems: 'center'
        },
        navbarText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
        }
    }
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>CollegeMatchMaker</Text>
        </View>
    )
}
export default Navbar;