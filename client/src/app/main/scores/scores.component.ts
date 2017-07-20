import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  allScores: Array<User>;
  searchText: string = '';

  constructor(private _router: Router, private _user: UserService) { 
  }

  ngOnInit() {
    this._user.getAllScores()
    .then((users) => { this.allScores = users; })
    .catch((err) => { console.log(err); });
  }
  
  play() {
    this._router.navigate(['/play']);
  }

}
