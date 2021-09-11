import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import './ArticlesListItem.css'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ArticlesListItem = ({
    image,
    category,
    text,
    date,
    likes,
    comments,
    isLiked = false,
}) => {
    return (
        <>
            <div className="article-item">
                <div className="preview">
                    <img src={image} alt="" />
                </div>
                <button className="category-btn">
                    <Link to={'/' + category}>{category}</Link>
                </button>
                <div>
                    <Button>
                        {isLiked ? (
                            <FavoriteIcon className="like" />
                        ) : (
                            <FavoriteBorderIcon className="like" />
                        )}
                    </Button>
                </div>
                <h3 className="article-text">{text}</h3>
                <div className="info-block">
                    <span className="date">{date}</span>
                    <span className="likes">
                        <FontAwesomeIcon icon={faHeart} />
                        {likes}
                    </span>
                    <span className="comments">
                        <FontAwesomeIcon icon={faComment} />
                        {comments}
                    </span>
                </div>
            </div>
        </>
    )
}

ArticlesListItem.propTypes = {
    image: PropTypes.string,
    category: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
}

const mapStateToProps = (state, { id }) => ({
    isLiked: state[id],
})

export default connect(mapStateToProps)(ArticlesListItem)
