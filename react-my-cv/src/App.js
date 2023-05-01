import './App.css';
import ProfilePicture from './components/Picture';
import Contacts from './components/Contacts';
import Experience from './components/Experience';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <span className='profile-pic'>
        <ProfilePicture alt="My profile picture" />
        </span>
        <div className='contact-info'>
          <Contacts />
        </div>
      </div>
      <div className='content'>
        <Experience />
      </div>
    </div>
  );
}

export default App;
