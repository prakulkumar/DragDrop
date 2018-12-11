import { Component, OnInit } from '@angular/core';

let data = [{
  'name': 'Item 1',
  'showChildren': false,
  'children': [{
    'name': 'Child 1',
    'showChildren': false,
    'children': [{
      'name': 'SubChild 1',
      'showChildren': false,
      'children': []
    }]
  }, {
    'name': 'Child 2',
    'showChildren': false,
    'children': [{
      'name': 'SubChild 2',
      'showChildren': false,
      'children': []
    }]
  }]
}, {
  'name': 'Item 2',
  'showChildren': false,
  'children': [{
    'name': 'SubItem 1',
    'showChildren': false,
    'children': []
  }, {
    'name': 'SubItem 2',
    'showChildren': false,
    'children': []
  }]
}, {
  'name': 'Item 3',
  'showChildren': false,
  'children': [{
    'name': 'Infant 1',
    'showChildren': false,
    'children': []
  }, {
    'name': 'Infant 2',
    'showChildren': false,
    'children': []
  }, {
    'name': 'Infant 3',
    'showChildren': false,
    'children': []
  }]
}];

@Component({
  selector: 'app-tree-layout',
  templateUrl: './tree-layout.component.html',
  styleUrls: ['./tree-layout.component.css']
})
export class TreeLayoutComponent implements OnInit {
  public treeData;
  constructor() { }

  ngOnInit() {
    this.treeData = data;
  }

}
