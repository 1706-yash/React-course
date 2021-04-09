import React from 'react'

function NameList() {
   const names=['Yash','Atul','Nayan','Tejas']
//    const nameList=names.map(name=>{
//        return <h2>{name}</h2>
//    })
//    return nameList

   const nameList=names.map((name,index)=> <h2 key={index}>{name}</h2>)
   return <div>{nameList}</div>
}

export default NameList

