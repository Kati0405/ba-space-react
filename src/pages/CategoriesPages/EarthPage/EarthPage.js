import React from 'react'
import articlesArray from '../../../components/Articles/articlesArray'
import Grid from '@material-ui/core/Grid'
import ArticlesListItem from '../../../components/Articles/ArticlesListItem'

const EarthPage = () => {
    const newArr = articlesArray.filter((x) => x.category === 'Earth')
    return (
        <>
            <div>Category: Earth</div>

            <div>
                {newArr.map(
                    ({ id, image, category, text, date, likes, comments }) => (
                        <Grid key={id} item xs={12} sm={6} md={4}>
                            <ArticlesListItem
                                id={id}
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
            </div>
        </>
    )
}

export default EarthPage
