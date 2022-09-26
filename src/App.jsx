import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() { 
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          <Post />
        </main>
      </div>
     
    </div>
  )
}

