import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {      
    flex: 1,
    //flexDirection: 'row',    
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  header: {    
    //flex: 1,
    //height: 100,      
    backgroundColor: '#2D4EFF'
  },
  footer: {    
    //flex: 1,    
    height: 50, 
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  content: {
    flex: 1,
    padding: 10
  },
  row: {
    /*height: 30,
    flexDirection: 'row',
    alignItems: 'stretch',*/
    //flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  time: {
    color: 'blue',
    fontSize: 20
  }
});

module.exports = styles;