import React from 'react'
import PropTypes from 'prop-types'
import './StaffListItem.css'

const StaffListItem = ({ image, name, description }) => {
    return (
        <>
            <div className="staff-item">
                <div className="staff-img">
                    <img src={image} alt="" />
                </div>
                <div className="staff-name">
                    <h5>{name}</h5>
                </div>
                <div className="staff-description">
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

StaffListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
}

export default StaffListItem
