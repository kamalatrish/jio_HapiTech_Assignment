// import logo from './logo.svg';
import './App.css';
import React from 'react';
import * as apiFunc from '../src/actions/action'

function App() {
  const [name, updateName] = React.useState("")
  const [dataList, updateList] = React.useState([]); // type array for iteration

  React.useEffect(()=>{
    let getList = apiFunc.getData();
    updateList(getList);
  },[])


  let submitName = () => {
    console.log("heuhiohi");
    let updateResponse = apiFunc.updateList(dataList,name);
    updateList(updateResponse);
    updateName("");
  }

  let deleteFriend = (index) => {
    console.log("deleteFunction",index);
  }

  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div >
        <div className="colorGray">Friend List</div>
        <div>
          <input type="text" value={name} onChange={(e) => updateName(e.target.value)} placeholder="Enter Your Friend Name" />
          <button onClick={() => submitName()}>Submit</button>
        </div>
        <div>
          {dataList.map((item, index) => {
            return (
              <div className="displayFlex" key={index}>
                <div className="divide">
                  <div>{item.name}</div>
                  <div>is your friend</div>
                </div>
                <div className="divide">
                  <button>Star button</button>
                  <button onClick={()=>deleteFriend(index)}>Delete button</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
