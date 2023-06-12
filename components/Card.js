import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import { Text, Image,View, ImageBackground } from 'react-native'
 

function Card(){
    const styles = {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            display:'flex',
            height: '15%',
            width: '13%'
        },
        card: {
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            backgroundColor: '#fff',
            shadowColor: 'black',
          },
        profileBox: {
            height: '10%',
            width: '100%',
            backgroundColor: 'black',
            alignItems: 'center'
        },
        boxText: {
            height: '50%',
            fontWeight: 'bold',
            alignItems: 'center',
            color: 'white',
        }
    }
    const collegeData = [
        {
            name: "Marist College",
            url: "https://www.fmsp.com/wp-content/uploads/2018/02/Marist-College-Student-Center-Rotunda-_1.jpg",
            location: "Poughkeepsie,"
        },
        {
            name: "Vassar College",
            url: "https://fthmb.tqn.com/PRssHaaQCKT8iUQvj2XeC-0FBnU=/2022x1264/filters:fill(auto,1)/vassar-college-Notermote-wiki-56a188f23df78cf7726bd130.jpg",
            location: "Poughkeepsie, NY"
        },
        {
            name: "Cornell University",
            url: "https://media4.s-nbcnews.com/j/newscms/2017_38/2161786/170920-cornell-university-campus-1-ew-108p_3a5b26bb6e87ef580d5b037d08c7f518.nbcnews-ux-2880-1000.jpg",
            location: "Ithaca, NY"
        },
        {
            name: "Columbia University",
            url: "https://th.bing.com/th/id/OIP.BLaFnXpRl7dyl8MXCMI_NQHaE8?pid=ImgDet&rs=1",
            location: "New York, NY"
        },
        {
            name: "Fordham University",
            url: "https://th.bing.com/th/id/R.b279e8e3831db2759b7dca6d0fa579c2?rik=34WCZbRzf1TFBQ&riu=http%3a%2f%2fstatic4.businessinsider.com%2fimage%2f5254166c6bb3f7c0212c9bc5%2ftour-fordham-universitys-stunning-campus-in-the-bronx.jpg&ehk=T692MHDDKNOqxHwpmZBHrPFn8qsTkuB3qwuKc8MVheM%3d&risl=&pid=ImgRaw&r=0",
            location: "Bronxville, NY"
        }
    ]
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
       
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <>
            <View style={styles.container}>
                {collegeData.map((collegeProfiles) =>     
                    <TinderCard key={collegeProfiles.name} onSwipe={(dir) => swiped(dir, collegeProfiles.name)} onCardLeftScreen={() => onCardLeftScreen('fooBar')}>
                        <View style={styles.card}>
                            <ImageBackground style = {{width: 350, height: 350}} source= {{uri: collegeProfiles.url}}></ImageBackground>
                            <View style={styles.profileBox}>
                                <Text style={styles.boxText}>{collegeProfiles.name}</Text>
                                <Text style={styles.boxText}>Location: {collegeProfiles.location}</Text>
                            </View>
                        </View>
                    </TinderCard> 
                )}
            </View>
        </>
           
    )
}
export default Card; 