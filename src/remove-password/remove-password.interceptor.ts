import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class RemovePasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(value => {
        if (value?.password)
          Reflect.deleteProperty(value, "password");
        // value.password = undefined;
        return value;
      })
    );
  }
}
