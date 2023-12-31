import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();
  ////////////////////////Waiting////////////////////
  if (waiting) {
    return <SetupForm />;
  }

  ////////////////////Loading////////////////
  if (loading) {
    return <Loading />;
  }

  ///////////////////final result///////////////////

  const { question, incorrect_answers, correct_answer } = questions[0];
  const answers = [...incorrect_answers, correct_answer];
  return (
    <main>
      {/* <Modal /> */}
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question">next question</button>
      </section>
    </main>
  );
}

export default App;
