import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform { // Assignem el nom que volem

    transform( vuela:boolean ):string { // És el que farà el Pipe creat
        if( vuela === true ) {
            return 'vuela';
        } else {
            return 'no vuela';
        }
    }

}