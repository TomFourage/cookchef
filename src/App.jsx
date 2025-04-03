import Homepage from "./views/Homepage/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import { seedRecipes } from "./data/seed";

// seedRecipes();

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      {/* La div est pour éviter qu'étant donnée que l'outlet est en lazy loading le footer ne remonte un court instant le temps que le outlet se charge */}
      <div className="flex-fill d-flex flex-column">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
