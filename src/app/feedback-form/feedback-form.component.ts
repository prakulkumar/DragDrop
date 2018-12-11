import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  public iconList: Array<object>;
  public textAreaValue: string;
  constructor() { }

  ngOnInit() {
    this.iconList = [
      { iconName: 'mood', isIconSelected: false },
      { iconName: 'sentiment_satisfied', isIconSelected: false },
      { iconName: 'sentiment_dissatisfied', isIconSelected: false },
      { iconName: 'sentiment_very_dissatisfied', isIconSelected: false },
      { iconName: 'mood_bad', isIconSelected: false }
    ];
  }

  public selectedIcon(index) {
    this.iconList.forEach((icon) => {
      icon['isIconSelected'] = false;
    });

    this.iconList[index]['isIconSelected'] = true;
  }

}
