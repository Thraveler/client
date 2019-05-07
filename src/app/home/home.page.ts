import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private messageService: MessagesService) {}

  ngOnInit() {

    this.messageService.getMessages()
      .subscribe(res => {
        console.log(res);
      });

    this.messageService.getMessage('34')
      .subscribe(res => {
        console.log(res);
      });

    const message = {
      content: 'Message content',
      submittedBy: 'Daniel'
    }

    this.messageService.createMessage(message)
      .subscribe(res => {
        console.log(res);
      });

  }

}
