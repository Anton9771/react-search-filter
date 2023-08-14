import './App.css';
import React, {useState} from 'react';
import JSONDATA from "./MOCK_DATA.json"

function App() {

  const [searchItem, setSearch] = useState('');

  return (
    <div className="App">
      <input
        className='search_input'
        type="text"
        placeholder='Поиск...'
        onChange={
          event => {setSearch(event.target.value)}
        }
      />
      {JSONDATA.filter((value) => {
        if (searchItem === ""){
          return value
        } else if (value.first_name.toLowerCase().includes(searchItem.toLowerCase())) {
          return value
        }
      }).map((value, key) => {
        return (
          <div className='user_list' key={key}>
            <p className='user' key={key}>{value.first_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
