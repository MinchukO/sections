import { Component, OnInit } from '@angular/core';
import { ElementsOfFormService } from '../elements-of-form.service'
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent implements OnInit {
  builderForm = [
    'Transformers'
  ]
  constructor(private _element: ElementsOfFormService) { }
  fields: string[] = [];
  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    this._element.drop(event);
  }

}
