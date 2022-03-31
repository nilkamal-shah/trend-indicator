import TransactionSummary from './components/TransactionSummary';
import { fetchTrendData } from './services/TransactionService';
import { useEffect } from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <TransactionSummary  />
    </div>
  );
}

export default App;
