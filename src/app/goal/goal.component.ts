import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';
import { AlertService } from '../alert-service/alert.service';
import {HttpClient} from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalService]
})
export class GoalComponent implements OnInit {
  goals: any;
  alertService: AlertService = new AlertService;
  quote: any;
  router: any;
  
  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }


  completeGoal(isComplete: any, index: any) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }
  goToUrl(id: any){
    this.router.navigate(['/goals',id])
  }
  deleteGoal(index:any){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  }



  constructor (alertService:AlertService, private quoteService:QuoteRequestService) {
    this.goals = GoalService.getGoals()
    this.alertService = alertService;
   }

  ngOnInit() {

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote


  }
}
