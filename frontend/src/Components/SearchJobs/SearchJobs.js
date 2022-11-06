import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '../axios'
import './style.css'
import Flex from "../Basics/Flex";

const SearchJobs = () => {
  const [jobLists, setJobLists] = useState([])
  const [q, setQ] = useState('');
  useEffect(()=>{
    async function query(q){
      const data = await instance.get(`/jobs/search/?q=${q}`);
      setJobLists(data.data);
      console.log(data);
    }
    query(q);
  }, [q]);
  return (
    <div className='container'>
        <div className="search">
            <i className="fa fa-search"></i>
            <input type="text" className="form-control" placeholder="Search Jobs" />
            <button className="btn btn-primary">Search</button>
        </div>
        <div className='job-lists'>
          {jobLists.map(job=>{
            return (
              <div className="card " key={job.slug}>
                <div className="card-body">
                  <h5 className="card-title">{job.company_name}</h5>
                  <p className="card-text">{job.desc}</p>
                  <Flex>
                    <i className="fa-regular fa-calendar"></i>
                    <p className="card-text text-muted pl-2">{job.year}</p>
                  </Flex>
                  <Link className='btn btn-primary' to={'/dashboard/jobs/' + job.slug}>Read More</Link>
                </div>
              </div>
            )
          })}
          
        </div>
    </div>
  )
}

export default SearchJobs
