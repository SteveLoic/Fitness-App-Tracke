import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  availableExercises: Exercise[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.availableExercises = this.trainingService.getAvailableExercise();
  }

  onStartTraining({value, valid}: {value:string, valid:boolean}){
    if(valid){
      this.trainingService.startExercise(value)
    }

  }
}
