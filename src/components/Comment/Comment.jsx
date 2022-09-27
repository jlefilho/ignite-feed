import { Avatar } from '../Avatar/Avatar'

import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
    //HANDLING COMMENTS
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            {/* AVATAR */}
            <Avatar
                hasBorder={false}
                src="https://github.com/diego3g.png"
            />            
            <div className={styles.commentBox}>

                {/* COMMENT HEADER */}
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
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                           <Trash size={24}/> 
                        </button>
                    </header>
                    
                    {/* COMMENT TEXT */}
                    <p>
                        {content}
                    </p>
                </div>

                {/* LIKES SECTION */}
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