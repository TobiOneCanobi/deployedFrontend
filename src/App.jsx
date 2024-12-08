import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Endpoints from "./pages/Endpoints";
import Links from "./pages/Links";

const Layout = () => {
  return (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
  )
};

const RecipeUrl = "https://gigarecipe.biswebsite.dk/api/recipes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/endpoints" element={<Endpoints />} />
        <Route path="/links" element={<Links />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
