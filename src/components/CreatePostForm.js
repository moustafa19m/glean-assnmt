import React, { useState } from 'react';

export default function CreatePostForm({addPost}) {

    const [postText, setPostText] = useState("");

    const updatePostText = (e) => {
        const val = e.target.value
        setPostText(val)
    }

    const submit = () => {
        addPost(postText)
        setPostText("")
    }
    
    return (
        <div className="form-container">
            <h2 className='form-header'>Add new post</h2>
            <textarea className='post-input' name='post' autoFocus 
                onChange={(e) => updatePostText(e) }
                placeholder="What's on your mind">
            </textarea>
            <div className='form-footer'>
                <button className='post-btn' disabled={postText.length === 0} onClick={submit}>Post</button>
            </div>
        </div>
    )

}