import "/public/style.css";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import { ShoppingProvider } from "./ShoppingContext";

function App() {
  return (
    <ShoppingProvider>
      <div className="container">
        <Header />
        <ShoppingList />
      </div>
    </ShoppingProvider>
  );
}

export default App;
