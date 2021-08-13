import React from 'react'
import "./WishCard.css"
import DeleteIcon from '@material-ui/icons/Delete';
function WishCard({id,image,title,price}) {
    return (
        <div className="wishCard">
            <div className="wishCard_image">
                <img src={image} alt={title} />
            </div>
            <div className="wishCard_content">
                <h1>{title}</h1>
                <p>Price $ {price}</p>
               
               {/* <DeleteIcon className="deleteIcon" /> */}
                
            </div>
        </div>
    )
}

export default WishCard
