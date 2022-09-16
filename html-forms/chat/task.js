const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');

function chat () {
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});
chatWidget.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        input();
    }
})
}

function input() {
    if (chatWidgetInput.value != '') {
        writeMsg(chatWidgetInput.value, 1);
        writeMsg(chatBot(), 0);
    }
    chatWidgetInput.value = '';
}

function chatBot() {
   const msgBot = [
        'Чего надо?',
        'А можете больше не писать?',
        'Можете не прощаться',
        'Я больше не хочу с Вами разговаривать!',
        'Всего нехорошего!',
        'Чао' 
     ];
     return msgBot[Math.floor(Math.random() * (msgBot.length - 1))];
}

function writeMsg(value, color) {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    let divClass = '';
    if (color == 1) {
        divClass = 'message message_client';
    }
    else{
        divClass = 'message';
    }

    messages.innerHTML += ` 
<div class="`+divClass+`">
    <div class="message__time">${hours}:${minutes}</div>
    <div class="message__text">`+value+`</div>
 </div>`;
    };

    chat()
