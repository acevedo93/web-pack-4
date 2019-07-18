import React from 'react';
import Item from './Item'
export default (props) => (
  <div style={{
    background: 'white'
  }}>
    {
    props.list.map((item, key) => (
      <Item
        key={key}
        item={item}
      />
    ))
    }
  </div>
)