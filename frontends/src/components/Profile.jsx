import React, { useEffect } from 'react';
import "./Profile.css"
import { useState } from 'react';
const Profile = () => {
    const [userdata, setuserdata] = useState(null)
    useEffect(() => {
        const fetchdata = () => {
          
            
            setuserdata(JSON.parse(localStorage.getItem("user")))
            console.log(JSON.parse(localStorage.getItem("user")))
        }
        fetchdata()
      
    }, [])
    if(!userdata){
        return <div>loading</div>
    }
    return (
        <div className="wrapper w-96 bg-green-300">
            <div className="left h-[30vh]  ">
                <div className='flex justify-evenly items-center gap-2'>
                    <div>
                        <img
                            src="https://t4.ftcdn.net/jpg/06/29/35/69/240_F_629356922_KB0F6hwZpSItiNyolBXflK2rb46iaeBx.jpg"
                            alt="user"
                            width="100"
                        />
                    </div>
                    <div>

                <h4>{userdata.name}</h4>
                <p>{userdata.role}</p>
                    </div>

                </div>
            </div>
            <div className="right h-[70vh]">
                <div className="info">
                    <h3>Information</h3>
                    <div className="info_data">
                        <div className="data">
                            <h4>Email</h4>
                            <p>{userdata.email}</p>
                        </div>
                        {/* <div className="data">
                            <h4>Phone</h4>
                            <p>0001-213-998761</p>
                        </div> */}
                    </div>
                    <div>
                        <div className="data">
                            <h4>Skills</h4>
                            <p>HTML, CSS, JS</p>
                        </div>
                        {/* <div className="data">
                            <h4>Github</h4>
                            <p><a href="https://github.com/Souravrai2005">SouravRai2005</a></p>
                        </div>
                        <div className="data">
                            <h4>Address</h4>
                            <p>XYZ New Delhi near Golden Gate</p>
                        </div> */}
                    </div>
                </div>
                {/* <div className="projects">
                    <h3>Projects</h3>
                    <div className="projects_data">
                        <div className="data">
                            <h4>Recent</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="data">
                            <h4>Most Viewed</h4>
                            <p>dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="social_media">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/brock._.lesnar/?hl=en">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                                    className="instagram"
                                    alt="Instagram"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/BillGates/">
                                <img
                                    src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png"
                                    className="facebook"
                                    alt="Facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
                                    className="linkedin"
                                    alt="LinkedIn"
                                />
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Profile;
