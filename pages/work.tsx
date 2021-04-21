import Link from 'next/link'
import Header from '../components/Header'

const AboutPage = () => (
  <div>
    <Header />
      <h1>Work</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
  </div>
)

export default AboutPage
