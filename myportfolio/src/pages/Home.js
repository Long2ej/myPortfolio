import Profilepic from '../pages/Images/Profilepic.jpg';
export default function Home() {
    return (

        <>
            <div className="homebox">


                <img src={Profilepic} className='profilepic'></img>


                <div className="Messagebox">
                    <div className="Welcometxt">
                        <h1>Hello,</h1>
                    </div>
                    <div className="txtbox">
                        <p> Currently a senior at James Madison University, I'm pursuing a major in Healthcare Administration complemented by a minor in General Business. My academic foundation has given me a thorough understanding of healthcare systems,
                            but my true passion lies in the realms of entrepreneurship, startups, and technology. In addition to my formal education, I've dedicated time to teach myself coding, seeking ways to integrate this skill with healthcare innovation.
                            I'm actively looking for opportunities to blend my healthcare background with the dynamic world of tech and startups.
                            I welcome connections with professionals who share a similar vision.
                        </p>
                    </div>
                </div>





            </div>
        </>
    )
}

