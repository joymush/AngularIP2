
import { Component, Input,OnInit ,Output,EventEmitter} from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
@Input () goal:Goal =new Goal;


  @Output() isComplete = new EventEmitter<boolean>();

  upvote(){

    this.goal.upvote = this.goal.upvote +1;
  }
  downvote(){

    this.goal.downvote = this.goal.downvote + 1;
  }

    goalComplete(complete:boolean){
      this.isComplete.emit(complete);
    }
    goalDelete(complete:boolean){
      this.isComplete.emit(complete);
    }

    numberOflikes=0;
    numberOfDislikes=0;


    likeButtonclick() {
      this.numberOflikes++;
    }

    dislikeButtonclick() {
      this.numberOfDislikes++;
    }

    
  constructor() { }

  ngOnInit(): void {
  }

}
