import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <div>
          {preload.shows.map((show) => {
            return (
              <ShowCard key={show.imdbID} show={show} />
            )
          })}
        </div>
      </div>
    )
  }
})

export default Search
