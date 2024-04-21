import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./components/layout";
import About from "./pages/about/about";
import Education from "./pages/education/education";
import Projects from "./pages/projects/projects";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="project" element={<Projects />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
