import '../css/styles.css';
import callPokemon from './callPokemon';
import showPokemon from './showPokemon';

const id = prompt('Que pokemon quieres ver??')

callPokemon(id)
  .then(response => {
    showPokemon(response)
  })
  .catch(() => {
    console.log('error, El pokemon aun no se descubrio')
  })




