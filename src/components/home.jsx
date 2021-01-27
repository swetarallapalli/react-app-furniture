import { Link } from "react-router-dom"

const Home = () => {
    return <div className="home">
        <div className="left-container">
            <h1>Design Creates Culture</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et laoreet est. Ut libero felis, fringilla vitae tincidunt eu, vehicula ac mauris. Aliquam eu tortor ante. Vestibulum et dolor nunc. Aliquam commodo ligula nisl, quis pulvinar eros tempus non. Sed vel vulputate eros, et dictum magna. Quisque finibus sollicitudin mi in sodales.</p>
            <Link to="/products">SHOP NOW</Link>
        </div>
        <div className="right-container">
            <img src="https://i.pinimg.com/564x/d2/18/d8/d218d88932da2eaae8d38d1acfced574.jpg" alt="home" />
        </div>
    </div>
}
export default Home