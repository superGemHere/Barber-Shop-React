"use client"

import "./galleryDetails.css"
import { useContext, useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import * as postService from "../../services/postService"
import * as commentService from "../../services/commentService"
import AuthContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm"

export default function GalleryDetails() {
  const { userId, username, isAuthenticated } = useContext(AuthContext)
  const [photo, setPhoto] = useState({})
  const [comments, setComments] = useState([])
  const [isError, setIsError] = useState(false)
  const { photoId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    postService
      .getOnePhotos(photoId)
      .then((result) => setPhoto(result))
      .catch(() => navigate("/404"))

    commentService.getAll(photoId).then(setComments)
  }, [photoId])

  const onCommentSubmit = async () => {
    try {
      if (values.commentInput === "") {
        throw new Error("Cannot submit empty comment")
      }
      const newComment = await commentService.addComent(photoId, username, values.commentInput)
      values.commentInput = ""
      setComments((state) => [...state, newComment])
    } catch (error) {
      setIsError(true)
      setTimeout(() => setIsError(false), 3000)
    }
  }

  const { values, onChange, onSubmit } = useForm(onCommentSubmit, {
    commentInput: "",
  })

  const deleteHandler = async () => {
    if (confirm("Are you sure you want to delete this photo?")) {
      await postService.deletePhoto(photoId)
      navigate("/gallery")
    }
  }

  const isOwner = photo._ownerId === userId
  const canComment = isAuthenticated && !isOwner

  return (
    <main className="gallery-details">
      <div className="details-container">
        <Link to="/gallery" className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
          </svg>
          Back to Gallery
        </Link>

        <div className="details-content">
          <div className="image-section">
            <div className="main-image-container">
              <img
                src={photo.imageUrl || "/placeholder.svg?height=600&width=800"}
                alt={photo.caption}
                className="main-image"
              />
              <div className="image-overlay-info">
                <h1 className="image-title">{photo.caption}</h1>
                <div className="image-stats">
                  <span>👁 1.2K views</span>
                  <span>💬 {comments.length} comments</span>
                  <span>❤️ 89 likes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-section">
            <div className="photo-header">
              <h2 className="photo-title">{photo.caption}</h2>
              <div className="photo-meta-info">
                <div className="meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                  </svg>
                  <span>By {photo.ownerName}</span>
                </div>
                <div className="meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                  </svg>
                  <span>
                    {new Date(photo._createdOn).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="meta-item">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                  <span>Barber Shop Studio</span>
                </div>
              </div>
            </div>

            {isOwner && (
              <div className="photo-actions">
                <Link to={`/gallery/edit/${photoId}`} className="action-button edit-button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                  </svg>
                  Edit Photo
                </Link>
                <button className="action-button delete-button" onClick={deleteHandler}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                  </svg>
                  Delete Photo
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="comments-section">
          <div className="comments-header">
            <h3 className="comments-title">Comments</h3>
            <span className="comments-count">{comments.length}</span>
          </div>

          <div className="comments-list">
            {comments.length > 0 ? (
              comments.map((currentComment) => (
                <div className="comment-item" key={currentComment._id}>
                  <div className="comment-header">
                    <span className="comment-author">{currentComment.username}</span>
                    <span className="comment-date">{new Date(currentComment._createdOn).toLocaleDateString()}</span>
                  </div>
                  <p className="comment-text">{currentComment.commentInput}</p>
                </div>
              ))
            ) : (
              <div className="no-comments">
                <svg className="no-comments-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
                </svg>
                <h4 className="no-comments-title">No comments yet</h4>
                <p>Be the first to share your thoughts about this photo!</p>
              </div>
            )}
          </div>

          {isError && <div className="error-message">Cannot submit empty comment. Please write something!</div>}

          {canComment && (
            <form className="comment-form" onSubmit={onSubmit}>
              <textarea
                className="comment-input"
                name="commentInput"
                onChange={onChange}
                value={values.commentInput}
                placeholder="Share your thoughts about this amazing transformation..."
                rows="4"
              />
              <button type="submit" className="comment-submit">
                Post Comment
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
