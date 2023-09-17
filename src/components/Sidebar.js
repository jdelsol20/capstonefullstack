import React, { useContext } from 'react';
//import link
import { Link } from 'react-router-dom';
//import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
//import components
import CartItem from '../components/CartItem';
//import sidebar context
import { SidebarContext } from '../context/SidebarContext';
//import cartcontext
import { CartContext } from '../context/CartContext';


const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const {cart} = useContext(CartContext);

  // const {} = useContext(CartContext);
  //console.log(useContext(CartContext));
  return <div>Sidebar
    <div>
      {cart.map((item) => {
        return <div>cart item</div>
      })}
    </div>
  </div>
  
}

export default Sidebar;