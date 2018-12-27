import { Response } from "@angular/http";
import { Observable } from "rxjs/observable";

export class ErrorHandler
{
  static handleError(error: Response | any)
  {
    let errorMensage: string

    if(error instanceof Response)
      errorMensage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    else
      errorMensage = error.toString()
      
    console.log(errorMensage)
    return Observable.throw(errorMensage)
  }
}
