import React,{useState}  from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import cloudan from '../assets/prev.jpg';


export default function Previsions() {

  const [prevTemp1, setPrevTemp1] = useState('');
  const [prevTemp2, setPrevTemp2] = useState('');
  const [prevTemp3, setPrevTemp3] = useState('');
  const [prevDescription1, setPrevDescription1] = useState('');
  const [prevDescription2, setPrevDescription2] = useState('');
  const [prevDescription3, setPrevDescription3] = useState('');
  const [prevIcon1, setPrevIcon1] = useState('');
  const [prevIcon2, setPrevIcon2] = useState('');
  const [prevIcon3, setPrevIcon3] = useState('');
  const [prevDate1, setDate1] = useState('');
  const [prevDate2, setDate2] = useState('');
  const [prevDate3, setDate3] = useState('');
  fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=48.853&lon=2.35&units=metric&lang=fr&appid=76df089514d3a7c19f777445eec48401`
      )
      
      .then((response) => response.json())
          .then(data =>{console.log(data.list);
            
          setPrevTemp1(data.list[7].main.temp);
          setPrevDescription1(data.list[7].weather[0].description); 
        
          setPrevIcon1(data.list[7].weather[0].icon); 

          setPrevTemp2(data.list[15].main.temp);
          setPrevDescription2(data.list[15].weather[0].description); 
         
          setPrevIcon2(data.list[15].weather[0].icon); 

          setPrevTemp3(data.list[23].main.temp);
          setPrevDescription3(data.list[23].weather[0].description); 
         
          setPrevIcon3(data.list[23].weather[0].icon);
          
          
          });
     

            
    return (
    
        <View style={styles.container}>

<Text style={styles.temperature}>Les prochains jours</Text>

          <View style={{flex:1, flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2.5rem'}}>
          <Text style={styles.date}>{prevDate1}</Text>
          <Text style={styles.temperature}>{prevTemp1}°</Text>
          <Image
        style={styles.temps}
        source={{
            uri: `http://openweathermap.org/img/wn/${prevIcon1}@2x.png`,
          }}/>
          <Text style={styles.description}>{prevDescription1}</Text>
       
          </View>

          <View style={{flex:1, flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2.5rem'}}>
          <Text style={styles.date}>{prevDate2}</Text>
          <Text style={styles.temperature}>{prevTemp2}°</Text>
          <Image
        style={styles.temps}
        source={{
            uri: `http://openweathermap.org/img/wn/${prevIcon2}@2x.png`,
          }}/>
          
          <Text style={styles.description}>{prevDescription2}</Text>
          </View>
          <View style={{flex:1, flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', borderBottomWidth: 2, borderBottomColor: '#FEFEFE5f', paddingBottom:'1.5rem', paddingTop:'2.5rem'}}>
          <Text style={styles.date}>{prevDate3}</Text>
          <Text style={styles.temperature}>{prevTemp3}°</Text>
          <Image
        style={styles.temps}
        source={{
            uri: `http://openweathermap.org/img/wn/${prevIcon3}@2x.png`,
          }}/>
          <Text style={styles.description}>{prevDescription3}</Text>
          </View>

        </View>
 
      );
   }


   const styles = StyleSheet.create({
    container: {
        flex: 5,
        width: 100,
        height: 100,
     
    },
    box:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    temps: {
      width:50,
      height:42,
    },
    title: {
        padding: 8,
        fontSize: 28,
        fontWeight: 'bold',
    },
    label: {
        padding: 6,
        fontSize: 20,
    },
    date: {
      fontFamily: 'notoserif',
      fontWeight: 'regular',
      fontSize: 30,
      color: '#FEFEFE',
    },
    temperature: {
        fontFamily: 'notoserif',
        fontWeight: 'bold',
        fontSize: 38,
        color: '#FEFEFE',
    },
    description: {
      fontFamily: 'notoserif',
      fontWeight: 'thin',
      fontSize: 30,
      color: '#FEFEFE',
  },
  });