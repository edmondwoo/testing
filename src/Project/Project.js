import React from 'react';
import { Link } from 'react-router-dom';
import '../Project/Project.css'

import Navbar from '../ProtfolioContainer/Navbar/Navbar';

export default function Project() {
  return (
    <div>
        <Navbar/>

    <div  className='profile-container'>


    <div  >
            <div class="box">
                <div>
                    <h2>First React Project</h2>
                    <span className='card'>
                    <iframe  src="https://learning-react-amber-zeta.vercel.app/" title="myFrame" scrolling="no">title="myFrame"</iframe>
                    </span>
                </div>
                <a href='https://learning-react-amber-zeta.vercel.app/'>
                <button class="btn1">Visit</button>
                </a>
            </div>
            
            
            
            <div class="box">
                <div >
                    <h2>To Do list</h2>
                    <span className ='card'>
                    <iframe src="https://to-do-list-sooty-rho.vercel.app/" title="myFrame" scrolling="no">title="myFrame"</iframe>  
                    </span>  
                </div>
                
                <a href='https://to-do-list-sooty-rho.vercel.app/' >
                <button class="btn1">Visit
                
                </button>
                </a>
            </div>
      

            <div class="box ">
                <div>
                    <h2>ShoppingList</h2>
                    <span className ='card'>
                    <iframe  src="https://basir.github.io/react-18-shopping-cart/" title="myFrame"scrolling="no" >title="myFrame"</iframe>
                    </span>
                </div>
                <a href='https://basir.github.io/react-18-shopping-cart/'>
                <button class="btn1">Visit</button>
                </a>
            </div>
            
    </div> 
</div> 

<div class="footer">
    <div className='mid'>
        <Link to='/'>
            <button className='btn2 btn3' >
                    Home
            </button>
        </Link>
    </div>
      
  </div>
    </div>
  )
}
