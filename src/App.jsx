import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css'
import './global.css'
export function App() {
  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
      <Post author="Victor" content="lo sdf remk sdfjnfklw dffsdfe wefnfwe" />
      <Post author="Victor" content="lo sdf remk sdfjnfklw dffsdfe wefnfwe" />
        </main>
      </div>
    </div>
  );
}
