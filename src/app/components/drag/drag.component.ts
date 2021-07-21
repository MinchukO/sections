import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ElementsOfFormService } from '../elements-of-form.service'
import { CdkDragDrop } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss'],
})
export class DragComponent implements OnInit {
  elements = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  constructor(private _element: ElementsOfFormService) {}

  ngOnInit(): void {}

  onDrop(event: CdkDragDrop<string[]>) {
    this._element.drop(event);
  }
}
