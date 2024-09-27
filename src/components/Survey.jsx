import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [surveyData, setSurvey] = useState({colour: 0, timeSpent: [], review: '', username: '', email: ''})
  const changeColourRating = (rating) => {
    surveyData.colour = rating
    setSurvey({...surveyData})
  }
  const addActivity = (activity) => {
      if(surveyData.timeSpent.includes(activity)){
        surveyData.timeSpent = surveyData.timeSpent.filter((e) => e !== activity)
      }else{
        surveyData.timeSpent.push(activity)
      }
      setSurvey({...surveyData})
  }
  const [answers, setAnswers] = useState([])
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList ={answers}/>
      </section>
      <section className="survey__form">
        {/* a form should be here */}
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onClick={() => changeColourRating(1)} checked={1===surveyData.colour}/>
                  <label
                  htmlFor="color-one"
                  >1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onClick={() => changeColourRating(2) } checked={2===surveyData.colour}/><label
                  htmlFor="color-two"
                  >2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onClick={() => changeColourRating(3)} checked={3===surveyData.colour}/><label
                  htmlFor="color-three"
                  >3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onClick={() => changeColourRating(4)} checked={4===surveyData.colour}/><label
                  htmlFor="color-four"
                  >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                  ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={() => addActivity("swimming")}
                    checked={surveyData.timeSpent.includes("swimming")}
                  />Swimming</label>
              </li>
              <li>
                <label
                  ><input name="spend-time" type="checkbox" value="bathing" onChange={() => addActivity("bathing")} checked={surveyData.timeSpent.includes("bathing")}/>Bathing</label>
              </li>
              <li>
                <label
                  ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={() => addActivity("chatting")}
                    checked={surveyData.timeSpent.includes("chatting")}
                  />Chatting</label>
              </li>
              <li>
                <label
                  ><input name="spend-time" type="checkbox" value="noTime" onChange={() => addActivity("noTime")} checked={surveyData.timeSpent.includes("noTime")}/>I don't like to
                  spend time with it</label>
              </li>
            </ul>
          </div>
          <label>
              What else have you got to say about your rubber duck?<textarea
              name="review"
              cols="30"
              rows="10"
              value={surveyData.review}
              onChange={(event) => {
                surveyData.review = event.target.value
                setSurvey({...surveyData})}
              }
            ></textarea></label>
            <label>
              Put your name here (if you feel like it):<input
              type="text"
              name="username"
              value={surveyData.username}
              onChange={(event) => {
                surveyData.username = event.target.value
                setSurvey({...surveyData})}
              } /></label>
              <label>
                Leave us your email pretty please??<input
              type="email"
              name="email"
              value={surveyData.email}
              onChange={(event) => {
                surveyData.email = event.target.value
                setSurvey({...surveyData})}
              }  /></label>
            <input className="form__submit" type="submit" value="Submit Survey!" onClick={() => {
              console.log(surveyData)
              answers.push(surveyData)
              setAnswers([...answers])
              setSurvey({colour: 0, timeSpent: [], review: '', username: '', email: ''})
              }}  />
      </form>
      </section>
    </main>
  );
}

export default Survey;
