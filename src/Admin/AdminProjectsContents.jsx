import React, { useEffect, useState } from 'react';
import SearchIcon from '../assets/icons/Search.svg';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/firebase';

function AdminProjectsContents() {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjectList(data);
      } catch (error) {
        console.log('Error fetching projects:', error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchProjectList();
  }, []);

  return (
    <>
      <section className='m-2'>
        <div className='searchbar'>
          <img src={SearchIcon} alt="" className='size-6' />
          <input type='search' placeholder='Search' />
        </div>
      </section>

      {loading ? (
        <div className="animate-pulse p-5 text-center text-gray-500 font-medium">
          Loading projects...
        </div>
      ) : (
        <section className='project-contents'>
          <div className='project-contents-container'>
            {projectList.map((project) => (
              <div key={project.id} className="project-card">
                <span className='project-image'>
                  <img src={project.image} alt={project.name} loading="lazy" />
                </span>
                <label className='font-semibold '>{project.name}</label>
                <button className='w-full'>View</button>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default AdminProjectsContents;
