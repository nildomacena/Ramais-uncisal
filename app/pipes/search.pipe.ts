import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    transform(value,input){
        let retorno;
        if(value && input){ 
           retorno = value.filter((item)=> item.setor.toUpperCase().includes(input.toUpperCase()) );
           if(retorno.length != 0)
                return retorno;
            else{
                retorno = value.filter((item)=> item.responsavel.toUpperCase().includes(input.toUpperCase()) );
                return retorno;
            }
        }
        else
            return value;
    }
}