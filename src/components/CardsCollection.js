import React, { useState } from 'react';
import PostCard from './PostCard';


export default function CardsCollection({cardsData, sortData}) {
    const [showMore, setShowMore] = useState(false);

    const vote = (postId, value) => {
        let dataObject;
        let idx;
        cardsData.forEach(element => {
            if (element.id === postId) {
                element.votes = element.votes + value
                dataObject = element
                idx = cardsData.indexOf(element)
                return
            }
        });
        sortData(cardsData)
    }

    const showMoreClick = (newState) => {
        setShowMore(newState)
    }

    const pinCard = (postId, value) => {
        let dataObject;
        let idx;
        cardsData.forEach(element => {
            if (element.id === postId) {
                element.pinned = value
                dataObject = element
                idx = cardsData.indexOf(element)
                return
            }
        });
        sortData(cardsData)
    }

    return (
        <div className='collections-container'>
            {
                cardsData.length > 2?
                    <>
                        {/* {createPostCard(cardsData[0])} */}
                        <PostCard key={cardsData[0].id} postData={cardsData[0]} vote={vote} setPin={pinCard}/>
                        <PostCard key={cardsData[1].id} postData={cardsData[1]} vote={vote} setPin={pinCard}/>
                        
                        {
                            showMore? 
                            <>
                                {
                                    cardsData.slice(2).map(data => <PostCard key={data.id} postData={data} vote={vote} setPin={pinCard}/>)
                                }
                                <a className='show-btn' href="#" onClick={()=>showMoreClick(false)}>show less</a>
                            </>
                            : <a className='show-btn'  href="#" onClick={()=>showMoreClick(true)}> show more</a>
                            
                        }

                    </>:
                    cardsData.map(data => <PostCard key={data.id} postData={data} vote={vote} setPin={pinCard}/>)
            }
        </div>
    )

}