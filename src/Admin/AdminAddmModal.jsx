import React, { useState } from 'react'
import Image from '../assets/icons/image.svg'
function AdminAddmModal() {
  const [modal, setModal] = useState(true);

  const canceModal = ()=>{
    setModal(false)
  }
  return (
  <>
  {modal && ( 
    <section className='modal'>
      <div className='modal-container'>
      <label className='admin-header'>Add Project</label>
        <div className="modal-layout">
          <span>
          <img src={Image } alt="" className='size-10' />
          <label className='text-gray-v1'>Add Image</label><br/>
          </span>
          <input type='file' className="file-ui"/>
        </div>
        <form>
        <label>Project Name:</label>
        <input type="text" name="project name" required placeholder='Project Name'/>
        <label>Project Description:</label>
        <textarea className='textarea'>
        
        </textarea>
        <div className='modal-button-layout'>
          <button type='button' onClick={canceModal}>
            Cancel
          </button>
          <button className='button-save'>
            Save
          </button>
        </div>
        </form>
      </div>
    </section>
  )}
  </>
  )
}

export default AdminAddmModal
