import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, imageUrl, author, avatarUrl, topic, title} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="link-container">
      <div className="blog-item-container">
        <img src={imageUrl} alt="author" className="image-url-class" />
        <div>
          <p>{topic}</p>
          <h2>{title}</h2>
          <div className="avatar-container">
            <img src={avatarUrl} alt="avatar" className="avatar-image" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
