import React from 'react'
import { Grid } from '@material-ui/core'
import StaffListItem from './StaffListItem'
import staffArray from './staffArray'

const StaffList = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {staffArray.map(({ id, image, name, description }) => (
                    <Grid key={id} item xs={12} sm={4}>
                        <StaffListItem
                            image={image}
                            name={name}
                            description={description}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default StaffList
