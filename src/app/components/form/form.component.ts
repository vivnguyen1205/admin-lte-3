import { Component } from '@angular/core';
import { ApiService } from '@services/api.service';
import { element } from 'protractor';
import {OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  TotalItemCount: number = 1;
  TotalInProgressItemCount: number = 1;
  TotalApprovedItemCount: number = 1;
  TotalRejectedItemCount: number = 1;
  TotalArchiveItemCount: number = 1;
}
  
  // constructor(private http: HttpClient, private apiService: ApiService, ) {
  //   getMethod() {
  //     this.http.get('https://api.example.com/data').subscribe(data => {
  //       console.log(data);
  //   });
    
  // }}}


