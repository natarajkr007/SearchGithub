import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [GithubService]
})
export class UserComponent implements OnInit {

  public user;

  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params['userId'];
    this.githubService.getUserDetail(userId).subscribe(
      res => {
        this.user = res;
        console.log(this.user);
      }
    );
  }

}
