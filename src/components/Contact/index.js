import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
// import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
        }, 3000);
            return () => {
        clearTimeout(timeoutId);
        };
    }, []);

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   // emailjs
  //     .sendForm('gmail', 'TEST', form.current, 'TEST-TOKEN')
  //     .then(
  //       () => {
  //         alert('Message successfully sent!')
  //         window.location.reload(false)
  //       },
  //       () => {
  //         alert('Failed to send the message, please try again')
  //       }
  //     )
  // }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
        <h1 className="contact-title">
          {isMobile ? 'Contact me' : (
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          )}
        </h1>

          <p className='text-style'>
          I am enthusiastic about pursuing a career as a software developer, 
          and I welcome any inquiries or discussions you may have regarding my interest and qualifications 
          in the field.
          </p>
          <p><b>shabboo.zamanian@gmail.com </b></p>
          {/* <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required/>
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div> */}
        </div>

          <div className="map-wrap">
            <MapContainer center={[59.33352, -341.93587]} zoom={10}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[59.33352, -341.93587]}>
                <Popup>Shabboo lives in Stockholm.</Popup>
              </Marker>
            </MapContainer>
          </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
