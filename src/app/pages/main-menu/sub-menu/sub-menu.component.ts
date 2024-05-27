import {Component, OnInit} from '@angular/core';
import { GetdataComponent } from '@services/getdata/getdata.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
