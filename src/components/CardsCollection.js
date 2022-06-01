import React, { useState } from 'react';
import PostCard from './PostCard';


export default function CardsCollection({cardsData, sortData}) {
    const [showMore, setShowMore] = useState(false);

    const vote = (postId, value) => {
        cardsData.forEach(element => {
            if (element.id === postId) {
                element.votes = element.votes + value
                return
            }
        });
        sortData(cardsData)
    }

    const showMoreOnClick = (newState) => {
        setShowMore(newState)
    }

    const pinCard = (postId, value) => {
        cardsData.forEach(element => {
            if (element.id === postId) {
                element.pinned = value
                return
            }
        });
        sortData(cardsData)
    }

    const createPostCard = (data) =>{
        return <PostCard key={data.id} postData={data} vote={vote} setPin={pinCard}/>
    }

    return (
        <div className='collections-container'>
            {
                cardsData.length > 2?
                    <>
                        {createPostCard(cardsData[0])}
                        {createPostCard(cardsData[1])}
                        
                        {
                            showMore? 
                            <>
                                {
                                    cardsData.slice(2).map(data => createPostCard(data))
                                }
                                <a className='show-btn' href="#" onClick={()=>showMoreOnClick(false)}>show less</a>
                            </>
                            : <a className='show-btn'  href="#" onClick={()=>showMoreOnClick(true)}> show more</a>
                            
                        }

                    </>:
                    cardsData.map(data => createPostCard(data))
            }
        </div>
    )

}