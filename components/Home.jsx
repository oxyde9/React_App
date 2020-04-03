import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import background from '../assets/bg.jpg';


export default function Home(props) {
   let date = new Date();
    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [month, setMonth] = useState(date.getMonth());
    const [jour, setDate] = useState(date.getDate());
    const [fullYear, setFullYear] = useState(date.getFullYear());

    setInterval(() => {
        date = new Date();
        if(date.getMonth() < 10){
         setMonth('0' + (date.getMonth() + 1))
     } else {
      setMonth('0' + (date.getMonth() + 1))
     }
     if(date.getDate() < 10){
      setDate('0' + date.getDate());
  } else {
      setDate(date.getDate());
  }
        if(date.getHours() < 10){
            setHours('0' + date.getHours());
        } else {
            setHours(date.getHours());
        }
        if(date.getMinutes() < 10){
            setMinutes('0' + date.getMinutes())
        } else {
            setMinutes(date.getMinutes());
        }
    }, 100);
    const [Temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    const [ville, setVille] = useState('');
    const [Icon, setIcon] = useState('');
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=48.853&lon=2.35&units=metric&lang=fr&appid=76df089514d3a7c19f777445eec48401`
        )
        
        
            .then((response) => response.json())
            .then(data => {console.log(data); 
                setTemp(data.main.temp);
                setDescription(data.weather[0].description);
                setIcon(data.weather[0].icon);
                setVille(data.name);
            });

   return (
    <ImageBackground style={styles.bg}
    resizeMode='cover'
    source={background}
    >
 
     <View style={styles.view}>
        <Text style={{color: '#fff', fontSize: 25}}>
      {hours}:{minutes}
      </Text>
      <Image
        style={styles.icon}
        source={{
            uri: `http://openweathermap.org/img/wn/${Icon}@2x.png`,
          }}
      />
      <Text style={{color: '#fff', fontSize: 25}}>
   {jour}/{month}/{fullYear}
      </Text>
    
     <Text style={{color: '#fff', fontSize: 28}}> 
     {Temp}°C
      </Text>
     <Text style={{color: '#fff', fontSize: 20}}> 
     The weather now is : {description}
      </Text>
      <Text style={{color: '#fff', fontSize: 30}}> 
      {ville}
      </Text>
      </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   icon: {
      width: 140,
      height: 100,

      
   },
   view: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
   },
   bg:{
   width: '100%', 
   height: '100%',
   flex: 1
}
});