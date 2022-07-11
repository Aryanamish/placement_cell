import React from 'react';
import SingleCard from './SingleCard';
import Container from '../Basics/Container';
import Flex from '../Basics/Flex'


const Cards = () => {
    // TODO add API call for fetching cards detail

    const [posts, setPost] = React.useState([
        {
            slug: 'abc123',
            title: 'First Job',
            desc: "This is my interview about google",
            view_count: '129',
            c_name: 'Google',
            date_posted: '28-06-2022',
        },
        {
            slug: 'abc1',
            title: 'First Job',
            desc: "This is my interview about google",
            view_count: '129',
            c_name: 'Google',
            date_posted: '28-06-2022',
        },
        {
            slug: 'abc2',
            title: 'First Job',
            desc: "This is my interview about google",
            view_count: '129',
            c_name: 'Google',
            date_posted: '28-06-2022',
        },
        {
            slug: 'abc3',
            desc: "This is my interview about google",
            view_count: '129',
            title: 'First Job',
            c_name: 'Google',
            date_posted: '28-06-2022',
        },
        {
            slug: 'abc4',
            desc: "This is my interview about google",
            view_count: '129',
            title: 'First Job',
            c_name: 'Google',
            date_posted: '28-06-2022',
        },
        {
            slug: 'abc5',
            desc: "This is my interview about google",
            view_count: '129',
            title: 'First Job',
            c_name: 'Google',
            date_posted: '28-06-2022',
        },
        {
            slug: 'abc6',
            desc: "This is my interview about google",
            view_count: '129',
            title: 'First Job',
            c_name: 'Google',
            date_posted: '28-06-2022',
        },
        {
            slug: 'abc7',
            desc: "This is my interview about google",
            view_count: '129',
            title: 'First Job',
            c_name: 'Google',
            date_posted: '28-06-2022',
        },
        {
            slug: 'abc8',
            desc: "This is my interview about google",
            view_count: '129',
            title: 'First Job',
            c_name: 'Google',
            date_posted: '28-06-2022',
        }
    ]);
    
  return (
    <Container>
        <Flex>

        {posts.map((curElem)=>{
            return (
                <SingleCard detail={curElem} key={curElem.slug}/>
                );
            })}
            <SingleCard.AddCard />
        </Flex>
        
    </Container>
  )
}

export default Cards
