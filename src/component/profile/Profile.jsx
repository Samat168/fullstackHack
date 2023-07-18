import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContextProvider';
import { Avatar, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';
import { useProduct } from '../../context/ProductContextProvider';

const Profile = () => {
  const { currentUser, logout, checkAuth, users ,getUser,checkuserid,favorites,} = useAuth();
    const {togglefav} = useProduct()
  const navigate = useNavigate()
  useEffect(() => {getUser()} ,[])
  
  useEffect(() => {
      checkuserid();
    
  }, [users]);
    console.log(users);
  return (
    <div style={{ marginTop: '150px' ,}}>
        <div style={{width: '80%', display: 'flex',justifyContent: 'space-between', margin: 'auto',flexWrap: 'wrap'}} className="">
            <div style={{ width:  '40%'}} className="left">
             <Avatar sx={{width: '250px', height: '250px',}}  src={users.avatar}/>
             <Button variant='outlined' sx={{marginLeft: '50px', marginTop:"20px"}}>Изменить Фото</Button>
            </div>
            <div style={{width: '40%', marginTop: '25px'}}  className="right">
                <div style={{display: 'flex',marginBottom: '20px'}} className="userName">
                <h2>{users.first_name}</h2>
                <h2 style={{marginLeft: '20px'}}>{users.last_name}</h2>
                </div>
                <p>email : </p>
                <h3 style={{marginBottom:'10px'}}>{currentUser}</h3>
                <p>дата регистрации :</p>
                <span>{Date(users.date_joined).split(' ').slice(1,5).join(' ')}</span>
            </div>
        </div>
        <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: '20px'
      }}
      className=""
    >
     
      {favorites?.map((item) => (
        <div
          style={{ width: "230px", marginRight: "10%" }}
          className="product_card"
        >
          <img
            className="product_img"
            src={item.photo}
            alt=""
            onClick={() => navigate(`/details/${item.id}`)}
          />
          <div className="product_card_bottom">
           
          
            <p style={{ color: "black" }}>{item.title}</p>

            <span className="product_price">$ {item.price}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Profile