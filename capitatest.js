var CHATBOT_EMAIL = "apssouza22@gmail.com" 
var APP_KEY ='87644985'

function loadChatScript(url) {
    let script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    document.head.appendChild(script);
}
loadChatScript("https://giovannismokes.github.io/chatbot-plugin.js");
