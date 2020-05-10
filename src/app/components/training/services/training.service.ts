import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { Exercise } from '../models/exercise';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  exerciseChanged = new Subject<Exercise>();
  private availableExercises: Exercise [] = [];
  private runningExercise: Exercise;
  private exercices: Exercise[] = [];

  constructor() {
    this.availableExercises = [
      { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
      { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
      { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
      { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];
   }

  getAvailableExercise(): Exercise[] {
    return this.availableExercises.slice();
  }

  completedExercise(){
    this.exercices.push({... this.runningExercise, date: new Date(), state:'completed'});
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number){
    this.exercices.push({... this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration *(progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      state:'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }
  startExercise(selectedId: any){
    this.runningExercise = this.availableExercises.find(exercise => exercise.id === selectedId.selectedExercise);
    this.exerciseChanged.next({ ... this.runningExercise})
  }

  getRunningExercise(): Exercise{
    return { ... this.runningExercise}
  }

  getCompletedOrCancelledExercise(): Exercise []{
    return this.exercices.slice();
  }
}
