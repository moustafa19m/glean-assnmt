import { useState, useEffect } from 'react';
import './App.css';
import CardsCollection from './components/CardsCollection';
import CreatePostForm from './components/CreatePostForm';


const dummyData = [
  {
    id: 1,
    userName: "Jane Doe", 
    profilePic: "https://picsum.photos/200", 
    postText: "Happy new year! 1", 
    votes: 2, 
    pinned: false
  }, 
  {
    id: 2,
    userName: "Drake Kayne", 
    profilePic: "https://picsum.photos/300", 
    postText: "Happy new year! 2", 
    votes: 3, 
    pinned: false
  }, 
  {
    id: 3,
    userName: "Michelle Obama", 
    profilePic: "https://picsum.photos/400", 
    postText: "Happy new year! 3", 
    votes: 5, 
    pinned: false
  }, 
  {
    id: 4,
    userName: "Random Dude", 
    profilePic: "https://picsum.photos/500", 
    postText: "Happy new year! 4 ", 
    votes: -1, 
    pinned: false
  }, 
  {
    id: 5,
    userName: "Zucker Berg", 
    profilePic: "https://picsum.photos/600", 
    postText: "Happy new year! 5", 
    votes: 0, 
    pinned: false
  }, 
  {
    id: 6,
    userName: "Gates Open", 
    profilePic: "https://picsum.photos/700", 
    postText: "Happy new year! 6", 
    votes: 2, 
    pinned: false
  }, 
  {
    id: 7,
    userName: "Bill is that you?", 
    profilePic: "https://picsum.photos/800", 
    postText: "Happy new year! 7", 
    votes: 9, 
    pinned: false
  }, 
  
]


function App() {
  const [counter, setCounter] = useState(8);
  const [data, setData] = useState(dummyData);

  useEffect(()=>{
    sortData(data)
  }, [])

  const addPost = (post) => {
    const postObject = {
      id: counter, 
      userName: "Anonymous", 
      profilePic: "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5vbnltb3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", 
      postText: post,
      votes: 0, 
      pinned: false,
    }
    let newData = [postObject]
    newData.push(...data)
    sortData(newData)
    setCounter(counter + 1)
  }

  const sortData = (cards) => {
    cards.sort((a, b)=> b.votes - a.votes)
    let pinned = [];
    let notPinned = [];
    cards.forEach((card) => {
            if (card.pinned) {
                pinned.push(card)
            } else {
                notPinned.push(card)
            }
        }
    )
    pinned.push(...notPinned)
    setData(pinned)
}

  return (
    <div className="App">
      <CreatePostForm addPost={addPost}/>
      <CardsCollection cardsData={data} sortData={sortData}/>
    </div>
  );
}

export default App;
