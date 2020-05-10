import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.css']
})
export class StopTrainingComponent implements OnInit {
  data : any;

  constructor(@Inject(MAT_DIALOG_DATA) private passedData: any) { }

  ngOnInit(): void {
    this.data = this.passedData;
  }

}
