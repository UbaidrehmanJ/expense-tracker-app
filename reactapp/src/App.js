import React from 'react';
import { Title } from './Title.js';
import { Balance } from './Balance.js';
import { Data} from './Data.js';
import { History } from './History.js';
import { AddTransaction } from './Changehistory.js';

import { GlobalProvider } from './context/GlobalState';

import './Style.css';

function App() {
  return (
    <GlobalProvider>
      <Title />
      <div className="appdiv">
        <Balance />
        <Data />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}


export default App;
