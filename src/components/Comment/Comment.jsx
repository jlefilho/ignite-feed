import { Avatar } from '../Avatar/Avatar'

import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/diego3g.png"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time
                                title="26 de Setembro às 16:51"
                                dateTime="2022-09-26 16:51:00"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button
                            title="Deletar comentário"
                        >
                           <Trash size={24}/> 
                        </button>
                    </header>
                    <p>
                        Aqui vai um exemplo de comentário
                    </p>
                </div>
                <footer>
                    <button>
                       <ThumbsUp />
                        Curtir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}