import React from 'react'
import { View, TextInput,Text, Button ,StyleSheet,FlatList} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }} >
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button style={styles.textinput} title='Rechercher' onPress={() => {}}/>
        <FlatList

          data={films}

          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item} />}

        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

    textinput: {
  
      marginLeft: 5,
  
      marginRight: 5,
  
      height: 50,
  
      borderColor: '#000000',
  
      borderWidth: 1,
  
      paddingLeft: 5
  
    }
  
  })

export default Search