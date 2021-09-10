import { Grid } from '@material-ui/core'
import React from 'react'
import ArticlesListItem from './ArticlesListItem'
import articlesArray from './articlesArray'

const ArticlesList = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {articlesArray.map(
                    ({ id, image, category, text, date, likes, comments }) => (
                        <Grid key={id} item xs={12} sm={6} md={4}>
                            <ArticlesListItem
                                image={image}
                                category={category}
                                text={text}
                                date={date}
                                likes={likes}
                                comments={comments}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ArticlesList
