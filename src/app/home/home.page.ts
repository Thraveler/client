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

    // this.messageService.getMessages()
    //   .subscribe(res => {
    //     console.log(res);
    //   });

    // this.messageService.getMessage('5c04b73880159ab69b1e29a9')
    //   .subscribe(res => {
    //     console.log(res);
    //   });

    const user = {
      name: 'Daniel',
      lastName: 'Méndez',
      age: 23
    }

    this.messageService.createMessage(user)
      .subscribe(res => {
        console.log(res);
      });

  }

}
