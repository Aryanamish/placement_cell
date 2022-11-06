import React, {useEffect, useState} from 'react'
import './style.css'
import {Editor, tinymce} from '@tinymce/tinymce-react';
import Input from "../Basics/Input";
import instance from "../axios";
import getCookie from "../utils";


const add_new_round = (round, setRounds)=>{
    setRounds(prev_val=>{
        let new_obj = JSON.stringify(prev_val);
        new_obj = JSON.parse(new_obj);
        new_obj.push({
            round_no: new_obj[new_obj.length - 1].round_no + 1,
            heading: '',
            content: '',
        });
        return new_obj;
      });
}

const changeHeading = (input, setRounds, e)=>{
    setRounds(prev_val=>{
        let new_obj = JSON.stringify(prev_val);
        new_obj = JSON.parse(new_obj);
        for(let i=0; i<new_obj.length; i++){
            if (new_obj[i].round_no === e.round_no){
                new_obj[i].heading = input.target.value;
            }
        }
        return new_obj;
    })
    // console.log(round)
}

const removeJob = (setRounds, round)=>{
    setRounds(prev_val=>{
        let new_val = [];
        let count = 1;
        for(let i=0; i<prev_val.length; i++){
            if(prev_val[i].round_no !== round.round_no){
                new_val.push(prev_val[i]);
            }
        }
        return new_val;
    })
}

const EditJob = () => {
    const [round, setRounds] = useState([
        {
            round_no: 1,
            heading: '',
            content: '',
        },
        {
            round_no: 2,
            heading: '',
            content: '',
        },
    ])
    const [jobTitle, setjobTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [year, setYear] = useState('');
    const [companyName, setCompanyName] = useState('');
    useEffect(()=>{
        async function get_data() {
            let path = window.location.pathname.split('/');
            let data = await instance.get('jobs/' + path[path.length - 1] + '/');
            data = data.data;
            console.log(data);
            setRounds(data.round_detail)
            setjobTitle(data.job_title)
            setDesc(data.desc)
            setYear(data.year)
            setCompanyName(data.company_name)
        }
        get_data();
    },[])
    const save_change = async (event)=>{
        const bodyFormData = new FormData();
        bodyFormData.append('job_title', jobTitle);
        bodyFormData.append('desc', desc);
        bodyFormData.append('year', year);
        bodyFormData.append('company_name', companyName);
        bodyFormData.append('round_detail', JSON.stringify(round));
        bodyFormData.append('csrfmiddlewaretoken', getCookie('csrftoken'));
        let path = window.location.pathname.split('/');
        let data = await instance.post(`jobs/${path[path.length - 1]}/edit/`, bodyFormData);
        console.log(data);
    }
    const handleChange = (value, editor, round_no)=>{
        setRounds(prev_val=>{
            let new_val = JSON.stringify(prev_val);
            new_val = JSON.parse(new_val);
            for(let i=0; i<new_val.length; i++){
                if(new_val[i].round_no === round_no){
                    new_val[i].content = editor.getContent();
                }
            }
            return new_val;

        })
    }

  return (
    <div className='container'>
        <div className={'row'}>

            <div className="col-lg-6">
                <label htmlFor='job_title'>Job Title</label>
                <Input value={jobTitle} setValue={setjobTitle} placeholder={'Job Title....'} name='job_title'/>
                <br/>
                <label htmlFor='job_desc'>Job Description</label>
                <Input value={desc} setValue={setDesc} placeholder={'Job Description....'} name={'job_desc'}/>
            </div>
            <div className="col-lg-6">
                <label htmlFor='year'>Placement Year</label>
                <Input value={year} setValue={setYear} placeholder={'Year....'} name={'year'}/>
                <br/>
                <label htmlFor='company_name'>Company Name</label>
                <Input value={companyName} setValue={setCompanyName} placeholder={'Company Name....'} name={'company_name'}/>
            </div>
        </div>
        <p />
        {round.map((e, counter) =>{
            const id = 'round' + e.round_no;
            return (
            <>

            <section key={id} className={'round-section'}>
            <div className="panel" >
                { e.heading === '' ? 'Round ' + (counter + 1) : e.heading }
                <div className='float-right'>

                    <i className="fa-solid fa-caret-down" data-bs-toggle="collapse" data-bs-target={"#" + id} />
                    {round.length > 1 ? <i className="fa-sharp fa-solid fa-trash" onClick={(event)=>{
                        removeJob(setRounds, e);
                    }} />: ''}
                    
                </div>
                
            </div>
            <div className="collapse round-collapse" id={id}>
                    <input placeholder="Heading" className="form-control heading" value={e.heading} onChange={(event)=>{changeHeading(event, setRounds, e)}} />
                    <br></br>
                <Editor
                    textareaName='content'
                    initialValue={e.content}
                    onChange={(value, editor)=>handleChange(value, editor, e.round_no)}
                />
            </div>
            </section>
                </>
            )
        })}
        <div className='float-circle-button' onClick={()=>{add_new_round(round, setRounds)}}>
            <i className="fa-solid fa-plus add-plus fa-2x" />
        </div>
        <input type={'button'} value={'Update'} className={'btn btn-success'} onClick={save_change}/>
    </div>
  )
}

export default EditJob;
