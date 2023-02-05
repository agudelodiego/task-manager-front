import { Component } from '@angular/core';
import { faCommentDots, faPaperPlane, faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  chatIcon = faCommentDots;
  sendIcon = faPaperPlane;
  messageIcon = faMessage;
}
