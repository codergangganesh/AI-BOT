let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voiceIndicator=document.querySelector("#voice-indicator")
const textInput = document.querySelector("#text-input");
const sendBtn = document.querySelector("#send-btn");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    
    text_speak.onstart = () => {
        voiceIndicator.classList.add("speaking");
    };

    text_speak.onend = () => {
        voiceIndicator.classList.remove("speaking");
    };

    text_speak.rate=1
    text_speak.pitch=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
}) 
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.textContent = `"${transcript}"`
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    content.textContent = "Listening..."
    recognition.start()
    voiceIndicator.classList.add("listening")
})

function handleTextInput() {
    const userText = textInput.value.trim();
    if (userText) {
        content.textContent = `"${userText}"`;
        takeCommand(userText.toLowerCase());
        textInput.value = "";
    }
}

sendBtn.addEventListener("click", handleTextInput);

textInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") handleTextInput();
})
function takeCommand(message){
    voiceIndicator.classList.remove("listening")

    if(message.includes("hello" )||message.includes("hey lee")){
        speak("hello sir,how can i help you?")
    }
    else if(message.includes("who are you")||message.includes("what is your name")){
        speak(" my name is lee chong wei an virtual assistant ,created by team vishnu Sir")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("open gmail")){
        speak("opening whatsapp..")
        window.open("gmail://")
    }
    
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else if(message.includes("what is your name")){
        speak("My name is Lee, your virtual assistant.")
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("lee","") || message.replace("lee","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("lee","")}`,"_blank")
    }
}