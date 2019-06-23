import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseInterceptor } from './request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ],
  imports: [CommonModule]
})
export class InterceptorModule {}
