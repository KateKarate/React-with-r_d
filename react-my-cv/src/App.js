import './App.css';
import ProfilePicture from './components/Picture';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Counter from './components/Counter';
import GithubRepos from './components/GithubRepos';

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
      <div className='repos'>
        <GithubRepos />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
