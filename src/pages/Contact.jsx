import React from 'react'
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  let params = useParams();
  console.log(params);
  const navigate = useNavigate();
  return (
    <div style={{color:"white"}}>
      Contact Page Param = {params.id}
      <button onClick={()=>navigate("/")}>GO TO HOME</button>

    </div>
  )
}

export default Contact
