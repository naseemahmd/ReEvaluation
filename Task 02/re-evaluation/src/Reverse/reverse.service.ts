import { Injectable } from '@nestjs/common';

@Injectable()
export class ReverseService {
  getreverseNumber(number: number): number {
    let revease = '';
    const numarr = [...number.toString()];
    for (let i = numarr.length - 1; i >= 0; i--) {
      revease = `${revease}${numarr[i]}`;
    }

    const num = parseInt(`${revease}`);

    return num;
  }
}
