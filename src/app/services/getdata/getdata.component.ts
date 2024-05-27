
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrl: './getdata.component.css',
})
export class GetdataComponent implements OnInit{
  httpClient = inject(HttpClient);
  data: any[] = [];
  ngOnInit(): void {
    this.fetchData();
  }
 fetchData(){
    this.httpClient.get('https://edoc-stg.genesolutions.vn/api/GetTotalTabStatus?page=MySigner').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }

}
