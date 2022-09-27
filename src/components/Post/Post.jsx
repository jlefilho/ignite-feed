import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }){    
    // DATE
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })
    
    const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    //HANDLING COMMENTS
    const [comments, setComments] = useState([
        'Aqui é um exemplo de comentário (Padrão)',        
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment() {
        event.preventDefault()  

        setComments([...comments, newCommentText])
        setNewCommentText('')      
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment!== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    return(        
        <article className={styles.post}>
            {/* POST HEADER */}
            <header>
                <div className={styles.author}>
                    <Avatar                       
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedRelativeToNow}
                </time>
            </header>

            {/* POST */}
            <div className={styles.content}>            
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }                        
                })}
            </div>

            {/* FORM */}
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            {/* COMMENTS */}
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment
                        onDeleteComment={deleteComment}   
                        key={comment}
                        content={comment}
                    />
                    )
                })}
            </div>
        </article>
        
    )
}

