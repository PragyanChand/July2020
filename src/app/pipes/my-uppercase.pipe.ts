import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;

    //Pipes are meant for changing the way how the value should look like not the UI
    //return 'Testing pipes transform method'
    //return value.toUppercase();
    // return '<h1>'+ value.toUppercase() + '</h1>'
  }

}
