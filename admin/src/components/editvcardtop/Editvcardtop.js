import { Button } from 'antd'
import React from 'react'
import NavTabs from '../editvcard/maintab'


const Topedit = () => {
  return (
    <div className='editvcard-container'>
        <div className='edit-back'>
            <h5>EDIT VCARD</h5>
            <Button type='sucess'>Back</Button>
            </div>
            
        <div className='edit-next'>
            
            <NavTabs/>

        </div>

    </div>
  )
}

export default Topedit