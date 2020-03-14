import { PipeTransform, Pipe } from'@angular/core';
import { User } from 'src/app/model/user.model';

@Pipe({
    
    name : 'userFilter'
})
export class UserFilterPipe implements PipeTransform {
    transform(users: User[],searchTerm: string, ):User[]{
        if (!users || !searchTerm){
            return users;
        }
       return users.filter(user=>
            user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1); 
            
    }
}