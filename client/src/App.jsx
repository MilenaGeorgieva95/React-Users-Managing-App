import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pagination from "./components/user-section/Pagination";
import SearchBar from "./components/user-section/SearchBar";
import UserTable from "./components/user-section/UserTable";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <SearchBar />

          <UserTable />

          <Pagination />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
