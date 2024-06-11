import { useState } from 'react';
import "../styles/Home.css";
import pic from '../assets/moks.jpg';

const Home = () => {
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    const handleAboutClick = () => {
        setIsAboutVisible(!isAboutVisible);
    };

    return (
        <main>
            <div className="full">
                <div className="header">
                    <span className="text">Mokshada</span>
                    <span className="text">Rana</span>
                    <p className="intro-text">
                        Hi, I&apos;m Mokshada Rana.<br />
                        Step into my journey, where creativity meets technology.
                        I&apos;m a passionate web developer dedicated to transforming ideas into dynamic digital experiences.
                        With a flair for coding and an eye for design, I bring a unique blend of technical expertise and artistic vision to every project I undertake.
                    </p>
                </div>

                <div className="content">
                    <div className="about">
                        <p onClick={handleAboutClick}>ABOUT ME</p>
                        <div className={`additional-content ${isAboutVisible ? 'visible-content' : 'hidden-content'}`}>
                            <p>
                                I have a strong background in web development with experience in various technologies including HTML, CSS, JavaScript, and React. 
                                I enjoy solving complex problems and creating intuitive, user-friendly interfaces. 
                                In my free time, I love exploring new technologies, reading, and hiking.
                            </p>
                        </div>
                    </div>
                    <div className="image">
                        <img src={pic} alt='image of Mokshada' />
                    </div>
                </div>

                <div className="work">
                    <p>Works</p>
                </div>

                <div className='education'>
                    <p>Education</p>
                </div>

                <div className='hobbies'>
                    <p>Hobbies</p>
                </div>
            </div>
        </main>
    );
}

export default Home;
