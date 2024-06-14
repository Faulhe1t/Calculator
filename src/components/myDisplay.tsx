import React, { FunctionComponent } from 'react'
import "../Style.css"

interface ViewContent {
  value: string
}


export const Qsc: FunctionComponent<ViewContent> = ({value}) => {

  return <div className='inputField'>
    <div className='inputField__inputContent'>
      { value }
    </div>
  </div>
};

export default Qsc;