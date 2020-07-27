import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
})
export class StreamsComponent implements OnInit {
  token: any;

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit(): void {
    this.token = this.tokenService.GetPayload();
    console.log(this.token);
  }
}
