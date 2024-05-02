import React from 'react'
import requests from '../../../utils/requests'
import Row from '../Row/Row'

const RowList = () => {
  return (
    <>
    <Row 
    title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />
    <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Horro Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    
    </>
  )
}

export default RowList
