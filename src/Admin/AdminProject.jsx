import React, { useState } from 'react'
import ProjectColored from '../assets/icons/ProjectColored.svg'
import Add from '../assets/icons/add.svg'
import trash from '../assets/icons/trash.svg'

import AdminProjectsContents from './AdminProjectsContents'
import Image from '../assets/icons/image.svg'
import {db,storage} from '../Config/firebase'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {collection,addDoc} from 'firebase/firestore'
function AdminProject() {
  const [modal, setModal] = useState(false);
  const showModal = ()=>{
    setModal(true);
  }
  const canceModal = ()=>{
    setModal(false)
  }

  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectLink, setProjectLink] = useState ("");
  const [projectImage, setProjectImage] = useState(null)
  const projectInfo = async (e)=>{
    e.preventDefault()
    try{
      let imageUrl="";
      if (projectImage){
        const uniqueName = `${Date.now()}-${projectImage.name}`;
        const imageRef = ref(storage, `project-image/${uniqueName}`);
        await uploadBytes(imageRef, projectImage);
        imageUrl = await getDownloadURL(imageRef);
      }
      await addDoc(collection(db,'projects'),{
        name:projectName,
        description:projectDescription,
        image:imageUrl,
        url:projectLink,
        date:new Date()
      })
      console.log('success');
      setProjectName('');
      setProjectDescription('');
      setProjectLink('');
      setProjectImage(null);
      canceModal();
    }catch (error){
      console.log("Error", error);
      alert("oh no");
    }

  }

  
  return (
    <>
    <section className='admin-section'>
      {modal && ( 
      <section className='modal'>
            <div className='modal-container'>
            <label className='admin-header'>Add Project</label>
              <div className="modal-layout">
                <span>
                <img src={Image } alt="" className='size-10' />
                <label className='text-gray-v1'>Add Image</label><br/>
                </span>
                <input type='file' className="file-ui" required
                
                onChange={(e)=>setProjectImage(e.target.files[0])}
                />
              </div>
              <form onSubmit={projectInfo}>
              <label>Project Name:</label>
              <input type="text" name="project name" required placeholder='Project Name'
              value={projectName}
              onChange={(e)=>setProjectName(e.target.value)}
              />
              <label>Website Link:</label>
              <input type='url' placeholder='Link' required
              value={projectLink}
              onChange={(e)=>setProjectLink(e.target.value)}
              />
              <label>Project Description:</label>
              <textarea className='textarea' required placeholder='Description'
              value={projectDescription}
              onChange={(e)=>setProjectDescription(e.target.value)}
              />
              
              
              <div className='modal-button-layout'>
                <button type='button' onClick={canceModal}>
                  Cancel
                </button>
                <button type='submit' className='button-save'>
                  Save
                </button>
              </div>
              </form>
            </div>
          </section>
    )}
      <div className='admin-header'>
        Project
      </div>
      <div className='dashboard-content '>
        <div className='summary-container'>
          <article className='summary-article'>Projects</article>
            <span className='flex flex-row items-center gap-2 lg:gap-5 font-semibold justify-center'>
              <img src={ProjectColored} alt="" />
              <label>0</label>
            </span>
        </div>
        <div className='summary-container-btn' onClick={showModal}>
          <article className='summary-article'>Add Projects</article>
            <span className='flex flex-row items-center gap-2 lg:gap-5 font-semibold justify-center'>
              <img src={ProjectColored} alt="" />
              <img src={Add} alt="" className=' button-w-bg'/>
            </span>
        </div>
        <div className='summary-container-btn'>
          <article className='summary-article'>Delete All</article>
            <span className='flex flex-row items-center gap-2 lg:gap-5 font-semibold justify-center'>
              <img src={ProjectColored} alt="" />
              <img src={trash} alt="" className=' button-w-bg'/>
            </span>
        </div>
        
      </div>
      <AdminProjectsContents/>
    </section>
    </>
  )
}

export default AdminProject
