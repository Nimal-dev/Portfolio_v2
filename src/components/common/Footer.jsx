import React from "react";



function Footer() {
    return(
        <>
         {/* <!-- Footer --> */}
        <footer className="footer" style="align-items: center;">
            <div className="footer-left"  data-aos-duration="800">
                <h1 className="ektha-footer-text">EKTHA'25</h1>
                <div className="social-icons">
                    <a href="https://www.instagram.com/ektha.25?igsh=MWlvNXhkNHpyZDhsNA=="><i
                            className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                </div>
                <p>2025 © All Rights Reserved</p>
            </div>
    
            {/* <!-- Google Map Location of the EVENT --> */}
            <div className="evntloc text-center" data-aos="fade-left" data-aos-duration="800">
                <h3>Event Location</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2353.900921398768!2d76.739573!3d8.800327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e6737fb08e1d%3A0xe9a7bc5ee867b5af!2sUKF%20College%20of%20Engineering%20and%20Technology!5e1!3m2!1sen!2sus!4v1740565553929!5m2!1sen!2sus"
                    width="600" height="300" style="border:0;" allowfullscreen="true" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </footer>
        </>
    )
    
}
export default Footer;