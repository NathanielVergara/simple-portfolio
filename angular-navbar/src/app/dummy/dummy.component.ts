import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  @Input() data: string = '';  // Data passed from the parent component
  @Input() messagePrefix: string = 'Default Prefix: ';  // Optional input to customize message prefix

  @Output() action = new EventEmitter<string>();  // Event to send data back to the parent

  dynamicMessage: string = '';  // Local dynamic message that will be sent to the parent
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];  // Sample list for ngFor

  constructor() { }

  ngOnInit(): void {
    // If needed, initialize the dynamicMessage or process input data here
    this.dynamicMessage = `${this.messagePrefix} ${this.data}`;
  }

  // Method to send a message to the parent component
  sendMessageToParent(): void {
    this.action.emit(this.dynamicMessage);
  }

  // Optional: You can also customize the dynamic message through some logic
  updateMessage() {
    this.dynamicMessage = `${this.messagePrefix} Updated Message from Dummy Component!`;
  }
}
