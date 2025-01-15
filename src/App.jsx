import './App.css';
import Profile from './components/Profile/Profile.jsx';
import userData from './components/Profile/userData.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}
