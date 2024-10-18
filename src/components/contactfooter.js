import React from "react";
import "./contactfooter.css";

function Contactfooter() {
  return (
    <div>
      <div>
        <div>
          <div className="footer-container">
            <div>
              <h1>ADDRESS</h1>
              <p>1245</p>
              <p>LESEDING</p>
              <p>TSWELELANG</p>
              <p>KIMBERLEY</p>
            </div>
            <div>
              <h1>CONTACT</h1>
              <p>0651518227</p>
              <p>info@hotel.com</p>
              <p>ytmotlhalane@gmal.com</p>
            </div>

            <div>
              <h1>LOCATION</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9229802106606!2d24.711653374761312!3d-28.721847671211712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b100a817a6cdf%3A0xacd6d3d2b14fb524!2sIbhotwe%20Guest%20House!5e0!3m2!1sen!2sza!4v1726216879523!5m2!1sen!2sza"
                width="600"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactfooter;
