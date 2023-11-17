import './contactUs.css'
import { SocialIcon } from 'react-social-icons'

export default function ContactUs() {


    return (

        <>

            <main className='contact-us'>
                <div className="content">
                    <div className="containerContact">
                        <p className="msg">Contact Us</p>
                    </div>
                    <div className="parent">
                        <div className="contacts">
                            <h2>Phone Number</h2>
                            <div className="contactText">
                            <p className='number'>+359 878 790 3566</p>
                            </div>
                        </div>
                        <div className="secondaryInfo">
                            <div className="social-media">
                                <h2>Social Media</h2>
                                <div className='social-media-links'>
                                <SocialIcon url="https://www.instagram.com/compass.barbershop/?hl=bg" />
                                <SocialIcon url="https://www.facebook.com/search/top?q=compass%20barber%20shop" />
                                </div>
                            </div>
                            <div className="location">
                                <h2>Google Maps</h2>
                                <div className='google-maps'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.0383933359235!2d25.539625576461372!3d41.9350263618475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad51c0c8b78051%3A0x150a8206749501f4!2sCompass%20Barber%20Shop!5e0!3m2!1sbg!2sbg!4v1700061297000!5m2!1sbg!2sbg" width="400" height="200" style={{border:0,  borderBottomRightRadius: 30}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </>

    );
}