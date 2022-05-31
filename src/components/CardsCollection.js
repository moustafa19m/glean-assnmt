import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';


export default function CardsCollection({cardsData}) {
    const [cardsOrdered, setCardsOrdered] = useState(cardsData);
    const [showMore, setShowMore] = useState(false);

    useEffect(()=>{
        cardsData.sort((a, b) => b.votes - a.votes)
        // sortCards()
        const newCards = JSON.parse(JSON.stringify(cardsData));

        setCardsOrdered(newCards)
    }, [])

    const vote = (postId, value) => {
        let dataObject;
        let idx;
        cardsOrdered.forEach(element => {
            if (element.id === postId) {
                element.votes = element.votes + value
                dataObject = element
                idx = cardsOrdered.indexOf(element)
                return
            }
        });
        const newCards = JSON.parse(JSON.stringify(cardsOrdered));
        newCards.sort((a, b) => b.votes - a.votes)
        setCardsOrdered(newCards)
    }

    const showMoreClick = (newState) => {
        setShowMore(newState)
    }

    const pinCard = (postId, value) => {
        let dataObject;
        let idx;
        cardsOrdered.forEach(element => {
            if (element.id === postId) {
                element.pinned = value
                dataObject = element
                idx = cardsOrdered.indexOf(element)
                return
            }
        });
        const newCards = JSON.parse(JSON.stringify(cardsOrdered));
        newCards.sort((a, b) => b.votes - a.votes)
        setCardsOrdered(newCards)
    }

    const createPostCard = (data) => {
        return  <PostCard key={data.id} postData={data[0]} vote={vote} setPin={pinCard} />
    }


    // const sortCards = (cards) => {
    //     const pinned = cards.filter(card => card.pinned);
    //     const notPinned = cards.filter(card => !card.pinned);
    //     pinned.sort((a, b) => b.votes - a.votes)
    //     notPinned.sort((a, b) => b.votes - a.votes)
    //     console.log(pinned, notPinned, pinned.push(...notPinned))
    //     setCardsOrdered(pinned.push(...notPinned))
    // }

    return (
        <div className='collections-container'>
            {
                cardsOrdered.length > 2?
                    <>
                        {/* {createPostCard(cardsOrdered[0])} */}
                        <PostCard key={cardsOrdered[0].id} postData={cardsOrdered[0]} vote={vote} setPin={pinCard}/>
                        <PostCard key={cardsOrdered[1].id} postData={cardsOrdered[1]} vote={vote} setPin={pinCard}/>
                        
                        {
                            showMore? 
                            <>
                                {
                                    cardsOrdered.slice(2).map(data => <PostCard key={data.id} postData={data} vote={vote} setPin={pinCard}/>)
                                }
                                <button onClick={()=>showMoreClick(false)}>show less</button>
                            </>
                            : <button onClick={()=>showMoreClick(true)}> show more</button>
                            
                        }

                    </>:
                    cardsOrdered.map(data => <PostCard key={data.id} postData={data} vote={vote} setPin={pinCard}/>)
            }
        </div>
    )

}