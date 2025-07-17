import profileImage from '../assests/me.png';


function Home(){
    return (
        <div className="page-container">
            {/* <img src={profileImage}className="profile-image"/> */}
            <div className="profile-content">
                <p className='intro-text'>Hi, I am</p>
                <h3 className='name-text'>Kert John Pagula</h3>
                <div className="skills-container">
                    <div className="skill-box">
                        <h3>Developer</h3>
                    </div>
                    <div className="skill-box">
                        <h3>Developer</h3>
                    </div>
                    <div className="skill-box">
                        <h3>Developer</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;