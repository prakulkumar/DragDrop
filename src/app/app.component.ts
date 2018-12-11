import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public list = [
    { label: 'Login Form', componentName: 'LoginFormComponent' },
    { label: 'Feedback Form', componentName: 'FeedbackFormComponent' },
    { label: 'Accordian Block', componentName: 'AccordianComponent' },
    { label: 'News Feed Block', componentName: 'NewsFeedComponent' },
    { label: 'Tree', componentName: 'TreeLayoutComponent' }
  ];

  public componentList;

  constructor() {
    this.componentList = JSON.parse(JSON.stringify(this.list));
  }

  models = [];

  drop(event: CdkDragDrop<string[]>) {
    this.componentList = JSON.parse(JSON.stringify(this.list));

    if (event.previousContainer === event.container) {
      moveItemInArray(this.models, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        this.models,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
