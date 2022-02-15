export class Goal {
    showDescription: boolean;

    constructor(
        public id: number=0,
        public name: string="",
        public description: string="",
        public completeDate: Date=new Date(),
        public upvote: number=0, 
        public downvote: number=0,)
        {
          
      this.showDescription=false;
    }
}
