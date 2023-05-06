import "./App.css";
import axios from "axios";

function App() {
  const client = axios.create({
    headers: {Authorization: `Bearer ${process.env.REACT_APP_CHATGPT_KEY}`}
  });

  const params = {
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 56,
    temperature: 0.5,
  };

  client
    .post("https://api.openai.com/v1/completions", params)
    .then((result) => console.log(result.data.choices[0].text))
    .catch((err) => console.log(err));
  
  return (
    <div className="App">
      <textarea className="answer-box" id="answer-box"></textarea>
      <textarea 
      className="text-box" 
      id="text-box"
      placeholder="Pergunte algo..."
      ></textarea>
    </div>
  );
}

export default App;
