import React, {useEffect, useState} from 'react'
import './style.css'
import instance from "../axios";
import parse from 'html-react-parser';
import Flex from "../Basics/Flex";
import Center from "../Basics/Center";
const axios = instance


const Post = () => {

  const [jobDetail, setJobDetail] = useState({});

  useEffect(()=>{
    async function getData(){
      let path = window.location.pathname.split('/');
      let data = await axios.get('jobs/'+path[path.length - 1] + '/');
      data = data.data
      console.log(data);
      data.round_detail = data.round_detail
      setJobDetail(data);
    }
    getData();
  }, []);
  const parse = require('html-react-parser');
  return (
    <div className='container'>
      <Center>
        <strong>Company Name :</strong>{jobDetail.company_name}
      </Center>
      <Center>
        <strong>Job Title :</strong>{jobDetail.job_title}
      </Center>
      <Center>
        <strong>Placement Year :</strong>{jobDetail.year}
      </Center>
      <Center>
        <strong>Job Description :</strong>{jobDetail.desc}
      </Center>
        <br/><br/>
      {jobDetail.round_detail !== undefined ? jobDetail.round_detail.map((round)=>{
        let id = "round" + round.round_no;
        return (
          <section key={round.round_no}>

            <div className="panel" data-bs-toggle="collapse" data-bs-target={"#" + id}>
              <div className="title">{round.heading}</div>
              <div className='float-right'>
                    <i className="fa-solid fa-caret-down" data-bs-toggle="collapse" data-bs-target={"#" + id }></i>
                </div>
            </div>
            <div className="collapse round-collapse" id={id}>
              <div className="round-title"><h4>{round.heading}</h4></div>
              <div className="round-content">{parse(round.content)}</div>
            </div>

          </section>
        )
      }): ''}
        
        
    </div>
  )
}

export default Post
