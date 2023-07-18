import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Platform, KeyboardAvoidingView, Keyboard,TouchableWithoutFeedback} from 'react-native';
import{FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding': 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false}/>
      <Image
      source={require('./src/assets/logo.png' )}
      style={styles.logo }
      />
      <TextInput
      placeholder='Celular, username ou email'
      style={styles.input}
      />
      <TextInput
      placeholder='Sua senha'
      style={styles.input}
      />
      <View style={styles.forgotContainer}>
      <TouchableOpacity>
        <Text style={styles.forgotText} >Esqueceu sua senha? </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff"/>
        <Text style={styles.facebookText}>Continue como lucas </Text>
      </TouchableOpacity>
      
      <View style={styles.divisor}>
      <View style={styles.divisorLine}></View>
      <Text style={{marginHorizontal:'3%'}}>OU</Text>
      <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.signUpContainer}>
      <Text style={styles.signUpText}>Não possui uma conta?</Text>
      <TouchableOpacity>
        <Text style={styles.signUpButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      </View>
    </View> 
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFF',
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    marginTop: Platform.OS === 'android' ? '13%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '13%',

    
  },
  input:{
    flexDirection:'row',
    width:'90%',
    alignItems:'center',
    height:42,
    backgroundColor:'#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent:'center',
    borderBottomColor: '#E0E0E0'
  },
  forgotContainer:{
    width:'90%',
    alignItems:'flex-end'
  },
  forgotText:{
    color:'#399fff',
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  loginText:{
    color: '#FFF',
    fontSize: 17
  },
  facebookContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:'15%',
    width:'90%',
    justifyContent:'center',
    
    
  },
  facebookText:{
    color:'#399fff',
    paddingLeft:8,
    fontSize:15
    
  },
  divisor:{
    marginTop: '10%',
    flexDirection:'row',
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
  },
  divisorLine:{
    width:'45%',
    height:2,
    backgroundColor:'#EFEDED',
    borderRadius:5,
  },
  signUpContainer:{
    flexDirection:'row',
    marginTop:'10%',
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
  },
  signUpText:{
    color:'#C4c4c4',
    paddingRight:5,
  },
  signUpButton:{
    color:'#399fff',
    fontWeight:'bold'
  }
});
