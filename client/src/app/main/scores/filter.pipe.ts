import { Pipe, PipeTransform } from '@angular/core';
import { User } from "../../user";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<User>, searchStr: string): Array<User> {
    if (!value) { return value; }

    return value.filter(user => {
      return user.username.toLowerCase().includes(searchStr.toLowerCase()) || 
      user.score.toString().includes(searchStr) ||
      user.percentage.toString().includes(searchStr)
    })
  }

}
