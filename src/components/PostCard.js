import React from 'react';

export default function PostCard({postData, vote, setPin}) {
    // console.log(setPin)
    return (
        <>
            <div className="post-container">
                <div className="post-header">
                    <img className='profile-pic' alt="user profile pic" src={postData.profilePic}></img>
                    <h3 className='username'> {postData.userName}</h3>
                    <img onClick={()=> {setPin(postData.id, !postData.pinned)}} className={postData.pinned? "pin-visible" : "pin"} alt="pin icon" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/pin-icon.png"></img>
                </div>
                <div className='post-body'>
                    {postData.postText}
                </div>
                <div className='post-footer'>
                    <button onClick={()=> {vote(postData.id, 1)}}>Up Vote</button>
                    <div>{postData.votes}</div>
                    <button onClick={()=> {vote(postData.id, -1)}}>Down Vote</button>
                </div>
            </div>
        </>
    )

}