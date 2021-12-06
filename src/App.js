// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'

import { BsTrash, BsStarFill, BsStar, BsSearch } from "react-icons/bs";
import * as apiFunc from '../src/actions/action'

function App() {
  const [name, updateName] = React.useState("")
  const [dataList, updateList] = React.useState([]); // type array for iteration

  React.useEffect(() => {
    let getList = apiFunc.getData();
    updateList(getList);
  }, [])


  let submitName = () => {
    if (name == 0) {
      alert("Enter name please !!")
    }
    else {
      let updateResponse = apiFunc.updateList(dataList, name);
      updateList(updateResponse);
      updateName("");
    }
  }

  let deleteFriend = (index) => {
    let deleteList = [...dataList];
    deleteList.splice(index, 1)
    updateList(deleteList);
  }

  let favFriend = (index) => {
    let favList = [...dataList];
    favList[index].isStarred = !favList[index].isStarred;
    updateList(favList);
  }

  return (
    <div>
      <div >
        <div className="displayFlex">
          <div className="title divide">Friend List</div>
          <div className="searchName title">
            <input type="text" value={name} onChange={(e) => updateName(e.target.value)} placeholder="search Friend Name" />
            <BsSearch />
          </div>
        </div>
        <div>
          {dataList.map((item, index) => {
            return (
              <div className="displayFlex" key={index}>
                <div className="divide">
                  <div>{item.name}</div>
                  <div className="supportText">is your friend</div>
                </div>
                <div className="divide">
                  {item.isStarred ?
                    <BsStarFill className="starFillIcon" onClick={() => favFriend(index)} /> :
                    <BsStar className="starIcon" onClick={() => favFriend(index)} />
                  }
                  <BsTrash onClick={() => deleteFriend(index)} className="trashIcon" />
                </div>
              </div>
            )
          })}
        </div>
        <div className="displayFlex addFriend">
          <input className="divide" type="text" value={name} onChange={(e) => updateName(e.target.value)} placeholder="Enter Your Friend Name" />
          <button className="submitBtn" onClick={() => submitName()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
