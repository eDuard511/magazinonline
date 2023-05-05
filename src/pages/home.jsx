import NavBar from '../components/Navbar';
import AddedRecent from '../components/AddedRecent';
import video100 from '../images/video100.mp4'
import styles from '../styles/home.module.css';

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <video autoPlay loop muted width="100%" src={video100} data-ll-status="loaded" id={styles.video}></video>
      <AddedRecent />
    </div>
  );
}

export default Home;