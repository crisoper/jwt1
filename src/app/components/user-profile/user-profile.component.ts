import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';


export interface User {
  name: string,
  email: string
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

	currentUser: User = {
    name : null,
    email: null
  };

  constructor(
  	public authService: AuthService,
    private actRoute: ActivatedRoute
    ) { 
  	
      
    }
    
    ngOnInit() {
      let id = this.actRoute.snapshot.paramMap.get('id');
      
      this.authService.getUserProfile(id).subscribe( (res) => {
        this.currentUser = res.user;
      })
  }

}
