import { Component, OnInit } from '@angular/core';
import {MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

//Angular se lie uniquement aux propriétés des composants publics .
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
