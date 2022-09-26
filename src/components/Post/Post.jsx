import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

import styles from './Post.module.css'

export function Post(){
    return(        
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar                       
                        src={"https://github.com/jlefilho.png"}
                    />
                    <div className={styles.authorInfo}>
                        <strong>Jorge Espindola</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    title="26 de Setembro às 15:49"
                    dateTime="2022-09-26 15:49:00"
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>            
                <p>Fala galera</p>
                <p>Aqui é um exemplo de post</p>
                <p><a href="#">Link exemplo</a></p>
                <p>
                    <a href="#">#tag1</a>{' '}
                    <a href="#">#tag2</a>{' '}
                    <a href="#">#tag3</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
        
    )
}

