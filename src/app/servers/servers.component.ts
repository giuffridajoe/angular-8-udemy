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
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
