import "../styles/Home.css";
import pic from '../assets/moks.jpg';

const Home = () => {
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
                        <p>ABOUT ME</p>
                    </div>
                    <div className="image">
                        <img src={pic} alt='image of Mokshada' />
                    </div>
                </div>


            </div>
        </main>
    );
}

export default Home;
