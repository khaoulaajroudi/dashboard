import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='dash-header'>
        <img src='https://img.freepik.com/vecteurs-premium/avatar-du-profil-utilisateur-feminin-est-femme-personnage-pour-economiseur-ecran-emotions_505620-617.jpg?w=740' alt='avatar'></img>
        <ion-icon name="notifications-outline"></ion-icon>
        <ion-icon name="chatbox-outline"></ion-icon>
      </div>
     <div className='content-box'>   
<div className='box-left'>
  <ul>
    <li><ion-icon name="people-outline"></ion-icon> Users List</li>
    <li><ion-icon name="list-outline"></ion-icon> Products List</li>
  </ul>
</div>
<div className='right-box'>

</div>
     </div>
     </div>
  );
}

export default App;
