import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { Container, Grid } from '@material-ui/core'
import React from 'react'
import './ContactsSection.css'

const ContactsSection = () => {
    return (
        <>
            <Grid className="contacts-section-font">
                <Container>
                    <Grid container direction="row">
                        <Grid item xs={12} sm={6}>
                            <h4>Find us here</h4>
                            <div className="social-media-item">
                                <a href="/#">
                                    {' '}
                                    <FontAwesomeIcon icon={faFacebook} />{' '}
                                    Facebook{' '}
                                </a>
                            </div>
                            <div className="social-media-item">
                                <a href="/#">
                                    {' '}
                                    <FontAwesomeIcon icon={faInstagram} />{' '}
                                    Instagram
                                </a>
                            </div>
                            <div className="social-media-item">
                                <a href="/#">
                                    {' '}
                                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                                </a>
                            </div>
                            <div className="social-media-item">
                                <a href="/#">
                                    {' '}
                                    <FontAwesomeIcon icon={faYoutube} /> Youtube
                                </a>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h4>Subscribe to our Newslatter</h4>
                            <form className="subscribe-form">
                                <div className="form-field">
                                    <div>Name</div>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="form-field">
                                    <div>Email</div>
                                    <input
                                        type="text"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <button className="subscribe-btn">
                                    Subscribe
                                </button>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}

export default ContactsSection
