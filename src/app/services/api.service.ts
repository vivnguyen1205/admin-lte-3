import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private API_URL = 'https://edoc-stg.genesolutions.vn/api/GetTotalTabStatus?page=MySigner';
    private options= {
        headers: new HttpHeaders({
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-type': 'application/json;charset=utf-8',
        'Cookie': '_gcl_au=1.1.41086137.1712723138; G_ENABLED_IDPS=google; _fbp=fb.1.1712723139383.1055553672; _ga=GA1.2.1519778588.1712723138; _ga_R7GBPLS86M=GS1.1.1714536189.6.1.1714536543.60.0.0; .AspNet.Cookies=eNYVr2_Um9Q2G9xAMYtqo2PfMjjP5EjTS6Za_Q2qdCrNV5vwxXHBR1mEfUran69vxkndeoLNChJLghoOzCTUNaOdlM01JsEeb3aNwOYQrpT9E7iDo3O-QGxz_PafopZclc3pfn7Dhm1BFA9yAvTooq60Zrs4SlijVtraAnbG4l0fAh2R1BGeTSd4gxc4wuC-mrDEgVyRzlIMskxNKzGjUCua-I9L4nQJJ2YObXBDJswp0daTkJmJrw6cOsgHlqyzQDadkrys3jmtLfBGcp5TgHHvF5cgz2OfgnGwoomHHOo2lRNacw-dI-HG-cyrkuEl3om16CXCe3-iqB32f8bICkds6h8uy3OIuxIo2pZOFi1SPZC3XtRVcxAI7OC9f9KHPq5HWnui35genYfTB44kvAJKBNoP12uVIWnFhGHMsp99oj8D4SF2JPhyMrjwz9n8hX_QCvMez7SkClRuA1eH2PCJZIKW6QdGKP-GPNWuP8_v_AP6TN-z6bQ8l6F5nvpmoQ9Al2Dpb-os33kLWWnKMYWjIY8Enw5zhe1YdsyaU-vpB5NQijCPEYOtYf3iy9VJY6DLaUccTOtlon1cq5fzU6I847hJcEKutkBnBGdGfgFbzGa6j6klWodYuiT7izYfbD0x-kTY2uyRcsBFoinMRbocYfxgQiIs8yf-klpEfxi_cVSO2YCjpCRYkrvT_Ip1bQ9WirMNClECoOKTM-g-6kcsITzbxicE6cN5KgVMU9Ej_BC88tVZ9Zu1GA89rUNjHaU9AckTx0QmfvgxzeVkAekBsaOhptrUzgL8sas6hV9pp9uBh-3Jobi2ZGn3uLYZ5zpk-_N6ao-z6ZyKmvUIZi1ixPhC4tEKgp2OVVlPbRbNNL10fzdC2ZwoFfT3ZbDwnT0hnNNvqeLkkzHyq01Q23OkCzEN1xYWiO1_1pNteckLQsN9aP-uKLmesLpTm7mKMGR6nRaoJlDIW5AIMkI4bgmuCorkArVaXYCg4ibgAtPCY4yWAgDWzPIzdbI9I74OLseMb9Zu69_lFf1SaYJiFR6OeHEyBb-P02iQydx7zC3nQi51S2h-x4uWC31T7PjqkeTXHyKlqhW2Lk-_jmWDUym3Vc372fAXocZo888qm4q2XBqIafDOYik-SIoH7GtThF979wqwHLEFilnGdd9UUKbtcsN4fEYMRNE7AhsEqDP6NcPaFqxIIgms7bBYn8eKIrMYoz7Qy6GCA4iJrsDBsB1gVRK8Zl7TU6hhkh27HUxKIuMOPBVN-VPE3V8Xh9VBaAh7ZIKypC7ftbqXsSSR9YVqA3njkSY52YxP78OivA4',
        'Accept-Language': 'en-US,en;q=0.9',
        'Access-Control-Allow-Origin': '*',
    }),
    datatype: 'json',
    withCredentials: false,
   
  };

  constructor(private http: HttpClient) {}
    public getMethod(): Observable<any>{
        const headers = new HttpHeaders({
            'Content-type': 'application/json',
            'Cookie': '_gcl_au=1.1.41086137.1712723138; G_ENABLED_IDPS=google; _fbp=fb.1.1712723139383.1055553672; _ga=GA1.2.1519778588.1712723138; _ga_R7GBPLS86M=GS1.1.1714536189.6.1.1714536543.60.0.0; .AspNet.Cookies=eNYVr2_Um9Q2G9xAMYtqo2PfMjjP5EjTS6Za_Q2qdCrNV5vwxXHBR1mEfUran69vxkndeoLNChJLghoOzCTUNaOdlM01JsEeb3aNwOYQrpT9E7iDo3O-QGxz_PafopZclc3pfn7Dhm1BFA9yAvTooq60Zrs4SlijVtraAnbG4l0fAh2R1BGeTSd4gxc4wuC-mrDEgVyRzlIMskxNKzGjUCua-I9L4nQJJ2YObXBDJswp0daTkJmJrw6cOsgHlqyzQDadkrys3jmtLfBGcp5TgHHvF5cgz2OfgnGwoomHHOo2lRNacw-dI-HG-cyrkuEl3om16CXCe3-iqB32f8bICkds6h8uy3OIuxIo2pZOFi1SPZC3XtRVcxAI7OC9f9KHPq5HWnui35genYfTB44kvAJKBNoP12uVIWnFhGHMsp99oj8D4SF2JPhyMrjwz9n8hX_QCvMez7SkClRuA1eH2PCJZIKW6QdGKP-GPNWuP8_v_AP6TN-z6bQ8l6F5nvpmoQ9Al2Dpb-os33kLWWnKMYWjIY8Enw5zhe1YdsyaU-vpB5NQijCPEYOtYf3iy9VJY6DLaUccTOtlon1cq5fzU6I847hJcEKutkBnBGdGfgFbzGa6j6klWodYuiT7izYfbD0x-kTY2uyRcsBFoinMRbocYfxgQiIs8yf-klpEfxi_cVSO2YCjpCRYkrvT_Ip1bQ9WirMNClECoOKTM-g-6kcsITzbxicE6cN5KgVMU9Ej_BC88tVZ9Zu1GA89rUNjHaU9AckTx0QmfvgxzeVkAekBsaOhptrUzgL8sas6hV9pp9uBh-3Jobi2ZGn3uLYZ5zpk-_N6ao-z6ZyKmvUIZi1ixPhC4tEKgp2OVVlPbRbNNL10fzdC2ZwoFfT3ZbDwnT0hnNNvqeLkkzHyq01Q23OkCzEN1xYWiO1_1pNteckLQsN9aP-uKLmesLpTm7mKMGR6nRaoJlDIW5AIMkI4bgmuCorkArVaXYCg4ibgAtPCY4yWAgDWzPIzdbI9I74OLseMb9Zu69_lFf1SaYJiFR6OeHEyBb-P02iQydx7zC3nQi51S2h-x4uWC31T7PjqkeTXHyKlqhW2Lk-_jmWDUym3Vc372fAXocZo888qm4q2XBqIafDOYik-SIoH7GtThF979wqwHLEFilnGdd9UUKbtcsN4fEYMRNE7AhsEqDP6NcPaFqxIIgms7bBYn8eKIrMYoz7Qy6GCA4iJrsDBsB1gVRK8Zl7TU6hhkh27HUxKIuMOPBVN-VPE3V8Xh9VBaAh7ZIKypC7ftbqXsSSR9YVqA3njkSY52YxP78OivA4'
       

        });
        return this.http.get(this.API_URL);
    }

    
}