import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication";
import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.components";
import Shop from "./routes/shop/shop";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
