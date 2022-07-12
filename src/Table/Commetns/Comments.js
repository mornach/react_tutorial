import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export function Comments() {
    const initialCommentsList = []
    const [commentsList, setCommentsList] = useState(initialCommentsList)

    function AddCommentDiv() {
        const [name, setName] = useState('');

        function handleChange(event) {
            setName(event.target.value);
        }

        function handleAdd() {
            const newCommentsList = commentsList.concat({ text: name, id: uuidv4() });
            setCommentsList(newCommentsList);
            setName('');
        }

        return (
            <div class='add_comment_div'>
                <input class='add_comment_input' type="text" value={name} onChange={handleChange} />
                <button type="button" onClick={handleAdd}>
                    add comment
                </button>
            </div>
        )
    }

    function CommentsListDiv() {
        function handleRemove(id) {
            const newCommentsList = commentsList.filter((comment) => comment.id !== id);
            setCommentsList(newCommentsList);
        }

        return (
            <div class='comments_list_div'>
                <ul>
                    {commentsList.map((comment) => (
                        <li key={comment.id}>
                            <span>{comment.text}</span>
                            <button type="button" onClick={() => handleRemove(comment.id)}>
                                -
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <AddCommentDiv />
            <CommentsListDiv />
        </div>
    )
}