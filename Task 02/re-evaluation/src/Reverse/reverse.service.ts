import { Injectable } from '@nestjs/common';

@Injectable()
export class ReverseService {
  
  getreverseNumber(number:Number) : Number {

    var revease =''
    var numarr = [...number.toString()]
    for(var i = numarr.length -1; i >= 0;i--){
        revease = `${revease}${numarr[i]}`
    }
    
    var num = parseInt(`${revease}`)


    return num
  }
}
