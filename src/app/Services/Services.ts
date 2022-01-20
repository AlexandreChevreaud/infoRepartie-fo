import {HttpErrorResponse} from "@angular/common/http";

export class Services {
  public getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        alert(`Not Found: ${error.message}`);
        return ''
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }
}
