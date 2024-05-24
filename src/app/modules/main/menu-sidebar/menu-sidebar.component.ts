import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {User} from 'firebase/auth';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user?: User;
    public menu = MENU;

    constructor(
        public appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'Dynamic Approval Process',
        iconClasses: 'fas fa-list',
        children: [
            {
                name: 'Submission',
                iconClasses: 'far fa-circle nav-icon',
                path: ['/sub-menu-1']
            },
            {
                name: 'My Approval',
                iconClasses: 'far fa-circle nav-icon',
                // path: ['']
            },
            {
                name: 'My Copy To',
                iconClasses: 'far fa-circle nav-icon',
                // path: ['']
            },
            {
                name: 'Doc Templates ',
                iconClasses: 'far fa-circle nav-icon',
                // path: ['']
            },
            {
                name: 'Report',
                iconClasses: 'far fa-circle nav-icon',
                // path: ['']
            },
            {
                name: 'Organization Chart',
                iconClasses: 'far fa-circle nav-icon',
                // path: ['']
            },
            {
                name: 'User Management',
                iconClasses: 'fas fa-list',
                children: [
                        {
                            name: 'User',
                            iconClasses: 'far fa-circle nav-icon',
                            path: ['']
                        },
                        {
                            name: 'Group',
                            iconClasses: 'far fa-circle nav-icon',
                            path: ['']
                        },
                        {
                            name: 'User Group',
                            iconClasses: 'far fa-circle nav-icon',
                            path: ['']
                        },
                    ]
            }
        ]
    },
    {
        name: 'Logout',
        iconClasses: 'nav-icon fas fa-sign-out-alt',
        path: ['/'],
        
    },
    // {
    //     name: 'Blank',
    //     iconClasses: 'far fa-circle nav-icon',
    //     path: ['/blank']
    // },
    
];
