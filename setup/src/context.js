import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setquestions] = useState([]);
  const [index, setindex] = useState(0);
  const [correct, setcorrect] = useState(0);
  const [error, seterror] = useState(false);
  const [isModalOPen, setIsModalOpen] = useState(false);

  // fetching data function
  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios.get(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
    } else {
      setWaiting = true;
    }
  };

  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOPen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
