import {Component} from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
import {environment} from 'environments/environment';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(
        private http: HttpClient,
        private router: Router,
        protected $gaService: GoogleAnalyticsService
    ) {}
    title = 'app';
    ngOnInit(){
        let headers = new HttpHeaders({
            'Data-type': 'json',
            'accept': 'application/json, text/javascript',
            'accept-language': 'en-US,en;q=0.9',
            'Access-Control-Allow-Origin': '*',
            'Authen': '_gcl_au=1.1.41086137.1712723138; G_ENABLED_IDPS=google; _fbp=fb.1.1712723139383.1055553672; _ga=GA1.2.1519778588.1712723138; _ga_R7GBPLS86M=GS1.1.1714536189.6.1.1714536543.60.0.0; OpenIdConnect.nonce.I25az5DDoHDPPD9ZYSGwUKOkXJfEH3w2e%2BxRUH1CgK0%3D=dkRRNER5Y0tNQnpNNGNNa0JIRWFERkVoSkFab2ZRdEtsNmtzZ1o4MmJDV2NuaEVqbmFRV2NMeFhBVW4zVU9WanlPOHpvazZxLTRJWFZvZ0VOVXIyYk05OGF4NC1pUE40YkhrcUxaeFdfQVBSUFMyQUd6Yk9mNTZQWGJrcXNQODFGQjg2VFRsOGlEXy1ibXVBcGF4T2ZZeU54THRSQ0gwcjc1TEE3elBjUVNnZ2xIYl82aWQ4TWlpUXU5bUVhTGxvMmVBTjAyemw1OTAxV1ZTbVNkT1ZwRHp0aGJKaXVPVDhSM2h4NnhaMzNjZw%3D%3D; .AspNet.Cookies=_hOWd8kLeAXn5OPkON5sb5XtGk_Fpxgqa0IZ8cfyTBw6P2OwdyPMT-d7LcT9VJl0-yLDYTmNNjs7oz53wCI-TWlv-16Q-hvRYeRQVpObT4YCQS2xPUbvsf3leFbeY0BUrbAilEk4ZxgJfkb670v54KtGD53cznREmEJ9TzmoDxzAnhwvGrcBVT7Up9jL1dNItY9Lpgc8AY7xzG3_ynIUnJD8aEow2Wq7T6VenWr7OvOKSfYvXuVxhBqS_M5v-dDWolQDKjiSHIH1PcKzvYnr7SuJr40SMKy99CNqQyj14LSB8dvg_Jd_luwhv9R0hDqUzaN2Z_TF1X0Ckjz8ztWNWO0MdfxRzQfs2aX3MoqZugIiFqPbGosG86uK8uajt0MRfiBmMeIwR1bz-uplDk0GrRFOoG8VsxSbkik6BlPaAX6SGVI9u6qVHODRC95opmo2BmhRrVUNMQtmNxSeWNVbpdDx5JSJXyLWO_SSG65C7gUHJn00gwqDFUVAJcFChKUUobFxZVJS0XcTYY6UFALUbyH8WGAYnKXhBg7mVC_s52iFp-4yhKs3oTsnw4vt_S7Qgj61OHycMpKedE86Le8CLKjvq5pEaKTMCFIFEQEaMANj3GMamgKHeBQsQkJC_GZTpJnUlUaDHvilyEx9FRqfHbyRzQWl1uVk2fSD1BDAWM6NrDq-_ExiizhZ_b6-xs3lxFwxvUwl1_-gbiD53rvCtHPlmuWuaqrn3qh0Bfetduj0wBS0RC7Hvouv9IV3ZxxoG5vcqzAEl83lhnb-DLrLv6JmtsfBN6LkVJBTRpc9hMvBjSDPFxv636gddYwJO4h6xxOMK-RIghixIA9rivIDABan7UF9gUWISqjfFxUJUPG-Jp1PwbbVBwBiOZPJPLUijJB6C5vMuRdsJiFCAdnJUcFepgqAOp40gsnKfCMnSzZMyw72By5vSIw7AWDKjo5UekcRT_0zoGMYTd3qIvRX5wZAGVZdFMDQOTMp1HLzX_xJVWnQSXbdF-33IKirPah2mtVgt21JpWCT27dRS_EGtAJFZh-2eh6rbTIx0vgMQIsCyp_XuDr3UtbzKqFDhDQr8GgOZSSP3w_FNC7KggnyBJ_f0Sd9NqjdLkPXKQ1cv4tWl86p3pcpGFvTPRZd_RDgLkLJPselikmVb2f0K3KMzT91G3F7jTqsD3zHezjSXBz4bkO6xDZ64Vcv-dtKK0_ZVQDFuwFDnk1RZ84I72M5lyhAexuoEh3gFxX4zC-y4UQDshZlarTapNZI5z-bsKd049BtZa1BIsVEZWet3ZZsDSHuqSdFsfMEbwxns8J5LcKGx7cfCtI5DuefMFl-gKiK9AF__4YRuHvdJ5uSEH_Ub9tcFIPN_N6eJZHjt5haCFc',
            'priority': 'u=1, i',
            // 'referer': 'https://edoc-stg.genesolutions.vn/my-submission',
        }),
        withCredentials: false;

     
       
        this.http
            .get<any>('https://edoc-stg.genesolutions.vn/api/GetTotalTabStatus?page=MySigner', {
                headers: headers
            })
            .subscribe(data => {
                console.log(data);
            });
    }
  
    
    // {
    //     this.router.events.subscribe((event: Event) => {
    //         if (
    //             event instanceof NavigationEnd &&
    //             environment.NODE_ENV === 'production'
    //         ) {
    //             this.$gaService.pageView(event.url);
    //         }
    //     });
    // }
}
