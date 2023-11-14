import './aboutUs.css'

export default function AboutUs() {


    return(
        <>
        <main className='about-us'>
            <div className="content">
                <div className="container">
                    <p className="msg">About Us</p>
                </div>
                <div className="parent">
                    <div className="story">
                        <h2>Our Story</h2>
                        <div className="storyText">
                           <p>Compass was founded on the belief that a haircut is not just a service but a personal experience. With 4+ years of dedicated service to our community, we have become more than just a barbershop. We're a destination where style and tradition meet.</p>
                        </div>
                    </div>
                    <div className="secondaryInfo">
                        <div className="experience">
                            <h2>Years of Experience</h2>
                            <div className='experienceNumber'>
                                <p>4+</p>
                            </div>
                        </div>
                        <div className="Location">
                            <h2>Location</h2>
                        </div>
                    </div>

                </div>
            </div>
  </main>

        </>
    );
}