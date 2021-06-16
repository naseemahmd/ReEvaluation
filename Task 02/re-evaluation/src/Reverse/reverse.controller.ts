
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ReverseService } from './reverse.service';

@Controller('')
export class ReverseController {
  constructor(private readonly reverseService: ReverseService) {}

  @Get('reverse')
    reverseNumber(@Query() query){
      
      var reversenum = this.reverseService.getreverseNumber(query.num)
        return reversenum
    }

  
}


