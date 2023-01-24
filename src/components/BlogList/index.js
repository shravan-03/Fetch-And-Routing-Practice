import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoaded: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      author: each.author,
      id: each.id,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      topic: each.topic,
      title: each.title,
    }))
    // console.log(updatedData)
    this.setState({blogData: updatedData, isLoaded: false})
  }

  renderBlogItems = () => {
    const {blogData} = this.state
    return (
      <div>
        {blogData.map(each => (
          <BlogItem blogItem={each} key={each.id} />
        ))}
      </div>
    )
  }

  render() {
    const {isLoaded} = this.state

    return (
      <div>
        {isLoaded ? (
          <div testid="loader">
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={50}
              width={50}
            />
          </div>
        ) : (
          this.renderBlogItems()
        )}
      </div>
    )
  }
}
export default BlogList
