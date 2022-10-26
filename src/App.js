import React from "react";
import AddForm from "./components/AddForm";
import Details from "./components/Details";
import EditForm from "./components/EditForm";
import TwitsList from "./components/TwitsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TwitsContextProvider from "./twitsContext";

const App = () => {
  return (
    <>
      <TwitsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/twits"
              element={
                <>
                  <AddForm />
                  <TwitsList />
                </>
              }
            />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/edit/:id" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
      </TwitsContextProvider>
    </>
  );
};

export default App;

// Создать микроблог(twitter), используя useContext, ContextProvider, db.json, react-router-dom. Создайте страницу отображения твитов (удаление будет находится в самом твите), добавления, и редактирования. Дизайн минимальный, делайте больше акцент на функционал.
