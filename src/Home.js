import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="container_content">
          <div className="container_content_inner">
            <a href="https://speech-to-textconvertor.netlify.app/">
              <button class="glow-on-hover" type="button">
                Let's Get Started!
              </button>
            </a>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img
              src="https://nordicapis.com/wp-content/uploads/5-Best-Speech-to-Text-APIs-2-e1615383933700.png"
              alt=""
              className="container_img"
            />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};
export default Home;
