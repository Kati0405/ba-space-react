import React from 'react'
import { Grid } from '@material-ui/core'
import './HomeSection.css'
import Button from '../Button/Button'

const HomeSection = () => {
    return (
        <>
            <Grid container direction="row">
                <Grid item xs={12} sm={6}>
                    <div
                        className="home-section-font"
                        style={{
                            backgroundImage:
                                'url(/images/home_space_sectionbg1.jpg)',
                        }}
                    ></div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="text-font">
                        <div className="text">
                            <h5>New at Be Space</h5>
                            <h2>The new way of exploring space</h2>
                            <h6>
                                This is the premier source of space exploration,
                                innovation and astronomy news, chronicling and
                                celebrating humanity's ongoing expansion across
                                the final frontier. We transport our visitors
                                across the solar system and beyond through
                                accessible, comprehensive coverage of the latest
                                news and discoveries. For us, exploring space is
                                as much about the journey as it is the
                                destination. So from skywatching guides and
                                stunning photos of the night sky to rocket
                                launches and breaking news of robotic probes
                                visiting other planets, here you'll find
                                something amazing every day.
                            </h6>
                            <Button />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default HomeSection
