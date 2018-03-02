import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
messages: string[] = [];

/* service expose son cache messages et deux méthodes add et clear la memoire cache  */
add(message: string){
  this.messages.push(message);
}


clear(){
  this.messages = [];
}
  constructor() { }

}
