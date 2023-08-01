// chatbot.component.ts
import { Component } from '@angular/core';

interface Message {
  content: string;
  isUserMessage: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  messages: Message[] = [];
  userInput = '';

  botResponses = [
    "Hello! How can I assist you?",
    "I'm here to help.",
    "Feel free to ask any questions.",
    "Sorry, I didn't understand that."
  ];

  sendMessage() {
    const userMessage: Message = {
      content: this.userInput,
      isUserMessage: true
    };
    this.messages.push(userMessage);

    // Simulate bot response (replace this with your actual bot logic)
    const randomResponseIndex = Math.floor(Math.random() * this.botResponses.length);
    const botMessage: Message = {
      content: this.botResponses[randomResponseIndex],
      isUserMessage: false
    };
    this.messages.push(botMessage);

    this.userInput = '';
  }
}
