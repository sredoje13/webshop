import React from 'react';
import Products from './Products'
function Aromaticnaso(props) {
    return (
        
          <Products
          items={props.items}
          handleExpandClick={props.handleExpandClick}
          expanded={props.expanded}
          />  
       
    );
}

export default Aromaticnaso;