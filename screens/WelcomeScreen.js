import * as React from 'react';
import {Text,View,TouchableOpaicty,Alert,StyleSheet,TextInput,Image} from 'react-native';

export default class WelcomeScreen extends React.Component{

    constructor(){
        super();
        this.state={
            emailaddress:"",
            password:""
        }
    }
render(){
    return(
      <View style={styles.container}>
          <Text>Welcome To Santa Book</Text>
      </View>

    )
}

}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#f8be85",
    
}

})

