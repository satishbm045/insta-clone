import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import ImageList from './components/ImageList/ImageList';
import PreviewModel from './components/PreviewModel/PreviewModel';
import { addAllPost } from './redux/action/action';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json")
    .then(response => response.json())
    .then(data => dispatch(addAllPost(data)));
  },[])

  return (
    <div className="App">
      <div className='heading'>Instagram</div>
      <div className='main'>
        <div className='leftSide'>
          <ImageList />
        </div>
        <div className='rightSide'>
          <PreviewModel />
        </div>
      </div>
    </div>
  );
}

export default App;
