import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jlefilho.png',
      name: 'Jorge Espindola',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera',
      },
      {
        type: 'paragraph',
        content: 'Aqui é um exemplo de post',
      },
      {
        type: 'link',
        content: 'Link exemplo',
      },
      // {
      //   type: 'link',
      //   content: '#tag1'
      // },  
      // {
      //   type: 'link',
      //   content: '#tag2'
      // },  
      // {
      //   type: 'link',
      //   content: '#tag3'
      // }    
    ],
    publishedAt: new Date('2022-09-27 09:15:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala dev',
      },
      {
        type: 'paragraph',
        content: 'Aqui é um exemplo de post',
      },
      {
        type: 'link',
        content: 'Link exemplo',
      },
      // {
      //   type: 'link',
      //   content: '#tag1'
      // },  
      // {
      //   type: 'link',
      //   content: '#tag2'
      // },  
      // {
      //   type: 'link',
      //   content: '#tag3'
      // }    
    ],
    publishedAt: new Date('2022-09-27 09:17:00')
  }
]

export function App() { 
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
     
    </div>
  )
}

