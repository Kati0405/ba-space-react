import React from 'react'
import { Container } from '@material-ui/core/'
import { Grid, makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Button from '../Button/Button'
import StaffList from '../Staff/StaffList'

const useStyles = makeStyles({
    h3: {
        fontFamily: 'Lato',
        fontSize: '38px',
        color: 'black',
        fontWeight: '700',
        padding: '15px 0',
    },

    h6: {
        fontFamily: 'Lato',
        fontSize: '16px',
        color: 'black',
        padding: '15px 0',
        lineHeight: '15px',
    },
})

const StaffSection = () => {
    const classes = useStyles()
    return (
        <>
            <Container>
                <Grid container direction="row">
                    <Grid item xs={12} sm={4}>
                        <Typography className={classes.h3}>
                            Meet our team
                        </Typography>
                        <Button />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography className={classes.h6}>
                            Space.com launched in New York City on July 20,
                            1999, the 30th anniversary of the Apollo 11 moon
                            landing, with the goal of covering the latest
                            discoveries and missions in space like never before.
                            The company was originally founded by news anchor
                            Lou Dobbs and Rich Zahradnick, with Zahradnik
                            serving as our first President, a position later
                            filled by Sally Ride — the first American woman in
                            space. Apollo 11 commander Neil Armstrong, the first
                            man to walk on the moon, was on the board of
                            directors.
                        </Typography>
                        <StaffList />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default StaffSection
