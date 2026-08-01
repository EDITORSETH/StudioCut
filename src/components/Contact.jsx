import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">


      <div className="work-process">

        <p className="section-tag">
          WORK PROCESS
        </p>


        <h2>
          Simple Process.
          <br />
          Professional Results.
        </h2>



        <div className="process-grid">


          <div className="process-card">
            <span>01</span>
            <h3>Share Your Project</h3>
            <p>
              Send your footage and requirements.
            </p>
          </div>



          <div className="process-card">
            <span>02</span>
            <h3>Editing Begins</h3>
            <p>
              We edit with storytelling and retention in mind.
            </p>
          </div>



          <div className="process-card">
            <span>03</span>
            <h3>Review & Revisions</h3>
            <p>
              Review the edit and request changes if needed.
            </p>
          </div>



          <div className="process-card">
            <span>04</span>
            <h3>Final Delivery</h3>
            <p>
              Receive your final video in high quality.
            </p>
          </div>


        </div>

      </div>





      <p className="section-tag">
        CONTACT
      </p>


      <h2>
        Let's Create Something
        <br />
        Amazing Together.
      </h2>



      <p className="contact-text">
        Looking for a professional video editor for your content?
        Let's connect and create videos that people actually watch.
      </p>





      <div className="contact-buttons">



        <a
          href="https://wa.me/919236549214?text=Hi%20Editor%20Seth!%20I%20need%20video%20editing%20services."
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          💬 WhatsApp
        </a>




        <a
          href="https://www.instagram.com/editor_seth.17?igsh=d2Rob2FtbXhwMDk4"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          📸 Instagram
        </a>





        <a
          href="https://youtube.com/@editor_seth.17?si=rs-ecaAoxwfrx1GC"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          ▶ YouTube
        </a>





        <a
          href="https://www.linkedin.com/in/editor-seth-43b806424?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          💼 LinkedIn
        </a>



      </div>



    </section>
  );
}


export default Contact;