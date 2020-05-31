function speechRecognitionResultHandler(e) {
    const { transcript } = e.results[0][0];
    document.querySelector('.keyWord').value = transcript;
}
  
  function speechRecognitionInit(lang) {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  
    const recognition = new SpeechRecognition();
    recognition.lang = lang;
  
    let recognizing = false;
  
    document.querySelector('.voiceIcon').addEventListener('click', () => {
      if (!recognizing) recognition.start();
    });
  
    recognition.addEventListener('start', () => {
      recognizing = true;
      document.querySelector('.voiceIcon').classList.add('search--microphone-active');
    });
  
    recognition.addEventListener('end', () => {
      recognizing = false;
      document.querySelector('.voiceIcon').classList.remove('search--microphone-active');
    });
  
    recognition.addEventListener('result', speechRecognitionResultHandler);
  }
  
  speechRecognitionInit();