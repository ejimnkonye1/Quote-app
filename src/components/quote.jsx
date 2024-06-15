import React,{useState, useEffect} from "react";
import '../css/quote.css'
import axios from "axios";
const MyQuote = ({quotesId}) => {
    const [text, setText] = useState('')
    const [quotes,setQuotes] = useState("")
    const [quoteAuthor, setQuoteAuthor] = useState("")
    const [error, setError] = useState("");
    const [copySuccess, setCopySuccess] = useState('');
    const speakText = () => {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = quotes;

        // Optionally, you can customize speech properties here
        // For example: speech.volume = 1; speech.rate = 1; speech.pitch = 1;

        // Speak the text
        window.speechSynthesis.speak(speech);
    } else {
        alert('Speech synthesis is not supported in your browser.');
    }
}
const copyToClipboard = () => {
    navigator.clipboard.writeText(quotes);
    setCopySuccess('Copied!');
    alert("copied")
  };
const fectchQuote = async ()  => {
    axios.get(`https://quote-api-ihpt.onrender.com//get_quote`)
        .then(response =>{
            setQuotes(response.data.quote);
            setQuoteAuthor(response.data.quote_author);
        })
        .catch(error => {
            console.error("Error fetching quoutes:", error);
            setError("Error fetching quotes. Please try again later.");
        })
    

}
// useEffect(() => {
//     // fetch the quote from api
//     axios.get(`http://localhost:8000/get_quote/quote1`)
//     .then(response =>{
//         setQuotes(response.data.quote1);
//         setQuoteAuthor(response.data.quote_author);
//     })
//     .catch(error => {
//         console.error("Error fetching quoutes:", error);
//         setError("Error fetching quotes. Please try again later.");
//     })
// }, [quotesId])
return(
    <div className="app">
        <div className="big-border">
            <div>
                <h1>Quoute of the day</h1>
                <div className="">
                {error && <div className="error">{error}</div>}
                    <p className="quotes">{quotes}</p>
                    
                    <p className="author">{quoteAuthor}</p>
                </div>
                <div class="button-container">
  <div class="button-left">
    <i class="material-icons" onClick={speakText} style={{ cursor: 'pointer' }}>volume_up</i>
    <i class="material-icons" onClick={copyToClipboard} style={{ cursor: 'pointer' }}>content_copy</i>
  </div>
  <button class="button-right" onClick={fectchQuote}>New quote</button>
</div>
            </div>
            
        </div>
    </div>
)
}
export default MyQuote;