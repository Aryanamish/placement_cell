import React from 'react'
import { Folder } from './Folder'

export const ManyFolder = () => {

    let CardDetails = [
        {
            id:"ab",
            desc:"This is a sample test",
            c_name:"Google",
            date_published:"10/07/2022",
            view_count:"45",

        },
        {
            id:"abc",
            desc:"This is a sample test",
            c_name:"Google",
            date_published:"10/07/2022",
            view_count:"45",

        },
        {
            id:"abcd",
            desc:"This is a sample test",
            c_name:"Google",
            date_published:"10/07/2022",
            view_count:"45",

        },
        {
            id:"abcde",
            desc:"This is a sample test",
            c_name:"Google",
            date_published:"10/07/2022",
            view_count:"45",

        }
    ]

  return (

    CardDetails.map{(Card)=>{
        
    }}

  )
}
