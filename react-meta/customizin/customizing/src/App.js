function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

function Intro1() {
  return(
    <div className="blog-post-intro">
      <h2>I've bcome a React developer!</h2>
      <div>
        <p>I am learning React from META's front end development course on COURSERA</p>
      </div>
    </div>
  );
};

function App() {
  return <Intro1 />;
};

export default App;