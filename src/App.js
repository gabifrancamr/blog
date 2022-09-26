import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Post title="Meu primeiro post" readingTime={1}>
          <p>Introdução...</p>
          <p>Desenvolvimento da ideia...</p>
          <p>Conclusão...</p>
        </Post>

        <Post title="Meu segundo post" readingTime={2}>
          <p>
            <em>Texto em itálico</em>
          </p>
        </Post>
      </main>

      <Footer />
    </>
  );
}

export default App;
