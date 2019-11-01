import React from 'react'
import { Link } from 'react-router-dom'

const ItemIndexTile = props => {
  return (
    <div className="col-md-auto">
      <div className="item-index">
        <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTX6boDPytGugCm0cmKzvCHGeLsqzLeaP6BhxRbXt0ZcNKCgHnr8Q&usqp=CAc" className="card-img-top"/>
        <div className="card-body">
          <h4 className="card-title">
            {props.title}
          </h4>
          <p className="card-text">
            {props.description}
          </p>
          <Link className="btn btn-primary" to={`/items/${props.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemIndexTile
