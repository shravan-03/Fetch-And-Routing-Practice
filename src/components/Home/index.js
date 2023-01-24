import BlogList from '../BlogList/index'

import './index.css'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />
      <BlogList />
    </div>
  </div>
)

export default Home
