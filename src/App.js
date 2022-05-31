import logo from './logo.svg';
import './App.css';
import CardsCollection from './components/CardsCollection';


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
    userName: "Jane Doe", 
    profilePic: "https://picsum.photos/200", 
    postText: "Happy new year! 2", 
    votes: 3, 
    pinned: false
  }, 
  {
    id: 3,
    userName: "Jane Doe", 
    profilePic: "https://picsum.photos/200", 
    postText: "Happy new year! 3", 
    votes: 5, 
    pinned: false
  }, 
  {
    id: 4,
    userName: "Jane Doe", 
    profilePic: "https://picsum.photos/200", 
    postText: "Happy new year! 4 ", 
    votes: -1, 
    pinned: false
  }, 
  {
    id: 5,
    userName: "Jane Doe", 
    profilePic: "https://picsum.photos/200", 
    postText: "Happy new year! 5", 
    votes: 0, 
    pinned: false
  }, 
  {
    id: 6,
    userName: "Jane Doe", 
    profilePic: "https://picsum.photos/200", 
    postText: "Happy new year! 6", 
    votes: 2, 
    pinned: false
  }, 
  {
    id: 7,
    userName: "Jane Doe", 
    profilePic: "https://picsum.photos/200", 
    postText: "Happy new year! 7", 
    votes: 2, 
    pinned: false
  }, 
  
]

function App() {
  return (
    <div className="App">
      <CardsCollection cardsData={dummyData}/>
    </div>
  );
}

export default App;
