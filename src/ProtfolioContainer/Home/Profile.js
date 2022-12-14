import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import './Profile.css';



export default function Profile() {
  return (
    <div className='profile-container'>
        <div className = 'profile-parent'>
            
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/profile.php?id=1048648725/'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/ho-cheung-tse-1a4379166/'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://www.instagram.com/tsehocheung/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCaF5nnyOi0CVYFUFQZs1yGg'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://twitter.com/tsehocheung2/with_replies'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    </div>
                </div>


            <div className='profile-details-name'>
                <span className='primary-text'>
                    {""}
                    Hello I'M <span className='highlighted-text'> Eric </span>
                    </span>
    
            </div>
            <div className='profile-details-role'>
                <span className='primary text'>
                    {''}
                     <h1>
                        {''}
                        <Typical
                            loop={Infinity}
                            steps={[
                                'Eric Tse🛩', 
                                3000,
                                'IT Field 🇮🇹' 
                                ,3000,
                                'Recruiter🤭',  
                                3000,
                                'React/React Native📷 ' ,
                                3000,

                            ]
                            }
                        />
                    </h1> 
                    
                        <span className='profile-role-tagline'>Recruit the IT Talent sssssssssssssssssssssssssssssssssssssss</span>

                    
                </span>


            </div>
            <div className='profile-options'>
            <Link to='/Project'>
                <button className='btn primary-btn' >
                    My Project
                </button>
                </Link>
                <a href='Ho_Cheung_Tse_-_Recruiter (1).pdf' download= 'Ho_Cheung_Tse_-_Recruiter (1).pdf '>
                <button className='btn highlighted-btn'> Get Resume</button>
                </a>
            </div>
                            
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>


                </div>

            </div>
        </div>
    </div>
  )
}
