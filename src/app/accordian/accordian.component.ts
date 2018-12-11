import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  public panelOpenState = false;
  public dataArray;
  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getUsers().subscribe((response) => {
      this.dataArray = response;
    })
  }

}
