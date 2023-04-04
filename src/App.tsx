// import React from "react";
// import Header from "./components/Pages/Header/Header";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "./components/Pages/AboutUs/AboutUs";
// import NotFound from "./components/Pages/NotFound/NotFound";
// import Main from "./components/Pages/Main/Main";
// import FormPage from "./components/Pages/FormPage/FormPage";

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/main" element={<Main />} />
//         <Route path="/" element={<AboutUs />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/forms" element={<FormPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;

import React from "react";
import Header from "./components/Pages/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import NotFound from "./components/Pages/NotFound/NotFound";
import Main from "./components/Pages/Main/Main";
import FormPage from "./components/Pages/FormPage/FormPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forms" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
