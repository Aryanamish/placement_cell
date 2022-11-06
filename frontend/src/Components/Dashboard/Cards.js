import React, {useEffect, useState} from 'react';
import SingleCard from './SingleCard';
import Container from '../Basics/Container';
import Flex from '../Basics/Flex'
import instance from "../axios";
import Loading from '../Loading';


const Cards = () => {
    // TODO add API call for fetching cards detail
    const [loading, setLoading] = useState(false);
    const [Post, setPost] = React.useState([]);
    useEffect(()=>{
        async function getData(){
            setLoading(true);
            const data = await instance.get('jobs/all/');
            setLoading(false);
            setPost(data.data);
            console.log(data.data);
        }
        getData();
    }, [])
    if(loading === true){
        return (
            <Loading></Loading>
        )
    }
  return (
    <Container>
        <Flex>

        {Post.map((curElem)=>{
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
