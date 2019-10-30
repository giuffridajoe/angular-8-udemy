/** this import gives the ability to decorate this class with the Component decorator. This will ensure Angular sees this class as a Component type class.*/
import { Component } from '@angular/core';

@Component({
    /** this is the html element that allows the class to be used in the html template code. 
     * ensures default html elements arent overridden
     * should be a string and unique
     * "app-" is a typical prefix */
    selector: 'app-server',
    templateUrl: './server.component.html'
})
/** the 'export' allows this class to be used elswhere */
export class ServerComponent {

}