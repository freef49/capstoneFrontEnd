import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Thingy(){
    return (
      <h1>
        It's Alive!!!
      </h1>
    );
};


ReactDOM.render(
  <Thingy />,
  document.getElementById('root')
);
