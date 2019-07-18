import React from 'react';

import {useState} from 'react';
import Button from './Button';
import data from '../data/data.json'
import List from './List';
import cocacola from '../images/cocacola.jpg'
const App = () => {
  const [list,setList] = useState([])

   const openList = async (e) => {
    setList(data)
    const alerta = await import('../js/alert')
    alerta('Este modulo esta cargando dinamicamente');
  }
  const closeList = (e) => {
    setList([])
  }
  return(
    <div>
      <div>
        <img src={cocacola} alt="cocacola" />
      </div>
      <Button
        handleButton={openList}
      >
        Aprietame para cargar la lista
      </Button>
      {
        list.length &&
        <Button
          handleButton={closeList}
        >
          Aprietame para limpiar la lista
        </Button>
      }
      <List
        list={list}
      />
    </div>
  )
}

export default App;

