import React from 'react'

const NewsItem = ({item, setItem, setOverlay}) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <a href={item.url}><img src={item.urlToImage} alt='' /></a>
            </div>
            <div className="card-text">
                <h1>{item.title}</h1>
                <button onClick = {()=>{setOverlay(true); setItem(item)}}>Read more...</button>
            </div>
        </div>
    )
}

export default NewsItem
