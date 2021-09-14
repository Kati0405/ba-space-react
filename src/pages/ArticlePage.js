import React from 'react'
import { useParams } from 'react-router-dom'
import articlesArray from '../components/Articles/articlesArray'
import {
    Container,
    Grid,
    Typography,
    makeStyles,
    Card,
} from '@material-ui/core'

const useStyles = makeStyles({
    h3: {
        fontFamily: 'Lato',
        fontSize: '24px',
        color: 'black',
        fontWeight: '700',
        padding: '15px 0',
        textAlign: 'center',
    },

    h6: {
        fontFamily: 'Lato',
        fontSize: '16px',
        color: 'black',
        padding: '15px 0',
        lineHeight: '15px',
    },

    image: {
        overflow: 'scroll',
        textAlign: 'center',
        height: '300px',
    },

    wrapper: {
        margin: '2%',
        padding: '5%',
    },
})

const ArticlePage = () => {
    let { articleId } = useParams()
    const Article = articlesArray.find((x) => x.id === parseInt(articleId))
    const classes = useStyles()

    return (
        <>
            <Container>
                <Grid container direction="row">
                    <Card className={classes.wrapper}>
                        <Grid item xs={12}>
                            <Typography className={classes.h3}>
                                {Article.text}
                            </Typography>
                            <div className={classes.image}>
                                <img src={Article.image} alt="" />
                            </div>
                            <Typography className={classes.h6}>
                                {Article.fullText}
                            </Typography>
                        </Grid>
                    </Card>
                </Grid>
            </Container>
        </>
    )
}

export default ArticlePage
