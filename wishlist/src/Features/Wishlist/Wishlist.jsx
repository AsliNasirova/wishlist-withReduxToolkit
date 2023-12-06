import axios from 'axios';
import React, { useEffect, useState } from "react";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../WishlistSlice";
import './Wishlist.scss'

const Wishlist = () => {
  const [card, setCard] = useState([]);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const Baseurl = "https://northwind.vercel.app/api/categories";

  async function fetchDatas() {
    const res = await axios.get(`${Baseurl}`)
    setCard(res.data);
  }

  useEffect(() => {
    fetchDatas();
  }, []);





  return (
    <>
      <div className='main'>
        {wishlistItems &&
          wishlistItems.map((item) => (
            <div className='wishlist'>
              <p>{item.description}</p>
              <p>{item.name}</p>
              <button onClick={() => dispatch(removeItem(item))}>
              <RiEyeCloseLine />
              </button>
            </div>
          ))}
      </div>

      <div className='cardBox'>
        {card &&
          card.map((item) => (
            <div key={item.id} className='card'>
              <p>{item.description}</p>
              <p>{item.name}</p>
              <button onClick={() => dispatch(addItem(item))}>
              <RiEyeFill />
              </button>
          
            </div>
          ))}
      </div>
    </>
  );
};

export default Wishlist;
