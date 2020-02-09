import React, { useState } from 'react'

const data = {
    "1" : 'text 1',
    "2" : 'text 2',
    "3" : 'text 3',
    "4" : 'text 4',
    "5" : {
        "6" : 'text 6',
        "7" : 'text 7',
        "8" : {
            "9" : 'text 9',
            "10" : 'text 10',
        },
    },
}

const Item = ({id , label , depth}) => {
    return <div style={{paddingLeft: depth*10}}>{id} - {label}</div>
}
const ParentItem = ({id , isOpen , data , openedIds , depth , isOpenHandler}) => {
    if(isOpen){
        return <div style={{paddingLeft: depth*10}}>{id} - <button onClick={() => isOpenHandler(id , false)}>-</button> <RenderTree data={data} openedIds={openedIds} depth={depth+1} isOpenHandler={isOpenHandler}/></div>
    }else{
        return  <duv style={{paddingLeft: depth*10}}>{id} - <button onClick={() => isOpenHandler(id , true)}>+</button></duv>
    }
}
const RenderTree = ({data,openedIds,depth=0 , isOpenHandler}) => {
    let items = [];
    for(let id in data){
        if(typeof data[id] == 'string'){
            items.push(<Item id={id} label={data[id]} depth={depth}/>)
        }else{
            items.push(<ParentItem id={id} isOpen={openedIds[id]} data={data[id]} openedIds={openedIds} depth={depth} isOpenHandler={isOpenHandler} />)
        }
    }
    return items
}
const GridTable = (props) => {
  const [openedIds , setOpenedKeys] = useState({});
  const isOpenHandler = (id,isOpen) => {
      let newOpenedIds = {...openedIds};
      if(isOpen){
          newOpenedIds[id] = true
      }else{
          delete newOpenedIds[id]
      }
      setOpenedKeys( newOpenedIds  )
  }
  return (
      <div>
          <RenderTree data={data}  openedIds={openedIds}  isOpenHandler={isOpenHandler}/>
     </div>)
}

GridTable.propTypes = {}
GridTable.defaultProps = {}

export default GridTable