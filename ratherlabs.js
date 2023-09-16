var CHATBOT_EMAIL = "apssouza22@gmail.com"
var APP_KEY ='96270075'

function loadChatScript(url) {
    let script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    document.head.appendChild(script);
}
loadChatScript("https://apps.newaisolutions.com/assets/js/chatbot-plugin.js");
