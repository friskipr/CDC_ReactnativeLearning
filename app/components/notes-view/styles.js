import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {      
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#2D4EFF'
  },
  footer: {
    height: 50, 
    alignItems: 'center'
  },
  content: {
    flex: 1,    
    marginTop: 60,
    padding: 10
  },
  title:{
    height: 50
  },
  noteField: {
    flex: 1,
    marginTop: 20
  },
  button: {
    height: 50,
    alignItems: 'flex-end'
  },
  textTitle: {
    height: 20
  },
  textInput: {
    flex: 1
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
  },
  save: {
    width: 100,
    color: '#000'
  },
  create: {
    flex: 0,
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 10
  },
  createNote: {
    width: 50,
    height: 50,
    backgroundColor: 'white'      
  },
  note: {
    borderBottomWidth: 1,      
    borderBottomColor: 'grey',
    padding: 5,
    marginTop: 5
  },
  notes: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10    
  },
  list: {
    flex: 1    
  },  
  noteDetail: {
    flex: 1,
    padding: 5,
    marginTop: 80    
  },
  editImg: {
    alignItems: 'flex-end',
    height: 50
  },
  viewForm: {
    flex: 1
  }
});

module.exports = styles;