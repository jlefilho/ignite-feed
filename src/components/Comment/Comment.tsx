import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'

import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    //HANDLING COMMENTS
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    //HANDLING LIKES
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            {/* AVATAR */}
            <Avatar
                hasBorder={false}
                src="https://github.com/diego3g.png"
                alt=""
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
                    <button
                        onClick={handleLikeComment}
                    >
                        <ThumbsUp />
                        Curtir<span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}