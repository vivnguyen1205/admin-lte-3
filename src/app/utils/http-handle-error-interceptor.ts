import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpHandleErrorInterceptor implements HttpInterceptor {
  refreshTokenInProgress = false;
  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
  constructor() { }

  async handleResponseError(error, request?, next?) {

    // Business error
    if (error.status === 400) {
      const errMessage = await (new Response(error.error)).text();
    }

    // Invalid token error
    // else if (error.status === 401) {
    //   return this.authService.refresh().pipe(
    //     switchMap(() => {
    //       request = this.addAuthenticationToken(request);
    //       return next.handle(request);
    //     }),
    //     catchError(e => {
    //       if (e.status !== 401) {
    //         return this.handleResponseError(e);
    //       } else {
    //         this.logout();
    //       }
    //     }));
    // }

    // Access denied error
    // else if (error.status === 403) {
    //   // Logout
    //   this.logout();
    //   this.boardCastService.httpError.next(true);

    // }
    // // Maintenance error
    // else if (error.status === 500) {
    //   this.alertService.showError('Hệ thống có lỗi xảy ra. Vui lòng liên hệ admin');
    //   this.boardCastService.httpError.next(true);
    // }

    // if (!navigator.onLine)
    //   this.alertService.showError('No Internet Connection !');
    // if (error?.error && error?.error.data && error?.error.data.message) {
    //   this.alertService.showError(`${error.error.data.message}`);
    // }

    // if (error.status === 0) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   this.alertService.showError(error?.message);
    //   // this.router.navigate(['']);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong.
    //   console.log(
    //     `Backend returned code ${error.status}, body was: `, error.error);
    // }

    return throwError(error);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Handle request
    debugger
    request = this.addAuthenticationToken(request);

    // Handle response
    return next.handle(request).pipe(catchError(error => {
      return this.handleResponseError(error, request, next);
    }));
  }

  addAuthenticationToken(request: any) {
    // Get access token from Local Storage
    const accessToken = '_gcl_au=1.1.41086137.1712723138; G_ENABLED_IDPS=google; _fbp=fb.1.1712723139383.1055553672; _ga=GA1.2.1519778588.1712723138; _ga_R7GBPLS86M=GS1.1.1714536189.6.1.1714536543.60.0.0; .AspNet.Cookies=oLrC1_gM33ixGHbREnQDmH1Sa2YFpXS3gwpSaeUWCvuNPYNHL9RxIeWesq0AsByAcglHT06_gWF_ulGo6i7LB502M60f0qjTdIOA41YOPndRMAHvXDAqwXA7_sYdDqoabFIu8sGNNzBcBWllQe-5uhqOshs86DeMlic2Mnj9F2WzvVu4Z3bIZivJg6ZVKR6kuwEqjqqfDm-sMUwr6mfSxWWIqcfqkB2-f5dXVsnuuyfKVpNokddVaTCbFtpg71IURoUe2ldYgpE6jtHe1mCJZN1hwQOIkauqnJ1xy3k05LEba_KwlNexOw2UsWzoxg0SHW4_QQQvz3rLzwFJnr4TYIMQjC-dx_VApSUw9MojeZ5XVsRKvrKu7dNTHUFgTjMzfCOt5-W2rWnfwt6pMu9rVoRprtHnu77aQIXLV6dpsKnn6_FxrSVeR671wUrgi-pTJolae_IIdUeGIoXzvHHL0dfA7DnNyBPdeHlrOODbiR4dXMnL8lF6YQwbY41c9q-Q2u0YGOeFJkI7vGqXUsnoEgF2DZAjxBqbqL9OLITi8s4NFz0LWG3pnFSVVSMJUdPE8tLlxv6D0_JjKqwByvZvBuJP2K84J97p7iFOq1O05blXxuE1i9r3MYdhcOOkBzUddJlB8WTI4goUdcLHUUgcMau5mpBUocKyEN_AdofpwFQU21OA7VNpJsVHIkRux-Su-btsV99_3J1tXIue_wRBE0a2TRjuHYMZCXsb2iwVYH4PUdVaUN6MM23kn59kErMs-phChM-4WH6VN1b0BYVBT71ld2T1XShQa4ZkJsu93L-3JCfjQ8q99splgDfHkgP-pP84Y2oK_P8C9YflTHa4eFVvqzzU0QoiWu4HPtV8-ZWLVsVUjAh9GxwP8u6nUpLCgs_A7wb085Bt93oJ73jskxsdRIgVog0FB6hOyK6kFK_XU6vrUf_9QfnUdL6GuKISrfzoDtxPcw8X9GTHB5f1NLFmotES1rx9u_2nxGNqgkXmmG8TKjtOckm_kRS5otDqgeDuxLgRcGKMY6Nkrmg_sr1optLZmEZz_SKLW1ivz_Ial-7v8nREJkYtH9D3NQ8ITcYlORwhuDc_E_Mx8lVonsFS6c2rf39PDGPWdFScN_avwLFuRIhTJFjydS9MTR8AZ71rtzzCnGneN5l8WuZLIjQCGj3nTWmX7lBjBuW-LhNVS3u1jiHha6uR3onXxZtrSmcgO7xu74loeO-SN6tDSvnGh79YHjF4-NI8DSIeDHaKtq6uP-03T9lkobM9sUbu4xbHeOkaT5rnqSKg4WZnjsQIEZO24aymrphrWYfatBFDQkPNuhGfPaaV79e4Xl-rBlEbLFUN3NZlwamUf1hJ01n_E22aQ5kjc4A4IOvqoYoPrADvnJo7KYh1palXOlsH';

    // If access token is null this means that user is not logged in
    // And we return the original request
    if (!accessToken) {
      return request;
    }
    // We clone the request, because the original request is immutable
    return request.clone({
      setHeaders: {
        Cookie: accessToken
      }
    });
  }

}
