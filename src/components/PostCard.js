import React from 'react';

export default function PostCard({postData, vote, setPin}) {
    return (
        <>
            <div className="post-container">
                <div className="post-header">
                    <img className='profile-pic' alt="user profile pic" src={postData.profilePic}></img>
                    <div className='username'> {postData.userName}</div>
                    <img onClick={()=> {setPin(postData.id, !postData.pinned)}} className={postData.pinned? "pin-visible" : "pin"} alt="pin icon" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/pin-icon.png"></img>
                </div>
                <div className='post-body'>
                    {postData.postText}
                </div>
                <div className='post-footer'>
                    <img onClick={()=> {vote(postData.id, 1)}} className='vote-btn' src="https://icons.iconarchive.com/icons/pixelmixer/basic/64/up-icon.png"/>
                    <div className='votes-count'>{postData.votes}</div>
                    <img onClick={()=> {vote(postData.id, -1)}} className='vote-btn' src="https://icons.iconarchive.com/icons/visualpharm/must-have/256/Stock-Index-Down-icon.png"/>
                </div>
            </div>
        </>
    )

}