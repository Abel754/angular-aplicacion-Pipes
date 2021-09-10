import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform { // Assignem el nom que volem

    transform( valor: string, enMayusculas:boolean ):string { // És el que farà el Pipe creat
        if( enMayusculas === true ) {
            return valor.toUpperCase();
        } else {
            return valor.toLocaleLowerCase();
        }
    }

}