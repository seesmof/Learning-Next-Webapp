const app = document.getElementById("app");

const Header = () => {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
};

const HomePage = () => {
  return (
    <>
      <h2>Home Page</h2>
      <Header />
    </>
  );
};

ReactDOM.render(<HomePage />, app);
