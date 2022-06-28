import React from 'react'
import { Link } from 'react-router-dom'

const ResidentsList = ({residents, people}) =>{

  const ids = residents.map(url => url.slice(0,-1).split('/').pop())
  const filteredResidents = ids.map(id=>{
    const foundResident = people.find(person=> Number(person.id)=== Number(id))
    
    return {
      ...foundResident
    }
  })
  
   const List = () => {
    return filteredResidents.map((item) => {
      return (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <Link to={`/people/${item.id}`}>View Detail </Link>
        </div>
      )})} 
   
  return(
    <div>
       <List/> 
    </div>
  )
}

/* const ResidentsList = ({residents, people}) => {
  

  const List = ()=>{
    return filteredResidents.map(resident=>{
      return(

        <div key={resident.id}>
          Name: {resident.name}
        </div>
      )
    }
    )} 

  
    
  return (
    <div>
      {List()}
    </div>
  )
} */

export default ResidentsList