import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detail.style.css"
import { useDispatch, useSelector } from "react-redux";
import { getById} from "../../Redux/Actions";



const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getById(id));
    },[dispatch,id]);

    // allUsers = useSelector((state)=>state.allUsers)
    const allUsers = useSelector((state) => state.allUsers);
    console.log(allUsers);
  
  return (
    <div className="container">
    {allUsers?.map((allUser) => {
  return (

    <div key={allUser.id}>
   <h1>{allUser?.name}</h1>
   <p>{allUser?.description}</p>
  <p>{allUser?.released}</p> 
  <p>{allUser?.rating}</p> 
  <img src={allUser?.background_image} alt="imagen allUser"/>
  <h2 >{allUser?.genres.join(" ")}</h2>
<p>{allUser?.platforms}</p>
    </div>
  );
})}
<Link to="/home"> 
             <button>Home</button>
            </Link>
          </div>
  )
}

export default Detail;


