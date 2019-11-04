import { Component, OnInit } from '@angular/core';

@Component({
  /** a selector can be defined a few ways:
   * 1. referring to the element of the component itself
   * 2. referring to an attrbiute of an html element
   * 3. or by class
   */
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  /** can declare a template URL (templateURL) or define the template in line within this file
   *  use backticks instead of single quotes if defining template here*/
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  toggleParagraph = false;
  buttonClicks = [];

  constructor() {
    /** this is a javascript method that will disable something after time passes
     * this takes no arguments
     * first param of the function body is the thing that you want to do after the time expires
     * second param of the function body is the time to wait
     *
     * this technique is called property binding
     */
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onResetUserName() {
    this.userName = '';
  }

  logButtonClick() {
    this.buttonClicks.push(this.buttonClicks.length + 1);
    this.toggleParagraph = !this.toggleParagraph;
  }
}
