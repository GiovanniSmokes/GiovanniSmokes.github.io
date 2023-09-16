var CHATBOT_EMAIL = "apssouza22@gmail.com"
/////change/////
var APP_KEY ='96270075'
var APP_COLOR="black"
var APP_URL = "https://apps.newaisolutions.com/chat-commander-ui/"

function loadChatScript(url) {
    let script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    document.head.appendChild(script);
}
window.addEventListener("load", (event) => {
    loadChatScript("/chat-commander-ui/js/chatbot-plugin.js");
});