// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      title: data.title,
      content: data.content,
    }

    console.log(data)
    this.setState({blogItem: updatedData})
  }

  render() {
    const {blogItem} = this.state

    return (
      <div className="blog-item-details-container">
        <h1>{blogItem.title}</h1>
        <div className="avatar-container">
          <img src={blogItem.avatarUrl} alt="avatar" className="avatar-image" />
          <p>{blogItem.author}</p>
        </div>
        <img
          src={blogItem.imageUrl}
          alt={blogItem.title}
          className="blog-image"
        />
        <p className="content-para">{blogItem.content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
