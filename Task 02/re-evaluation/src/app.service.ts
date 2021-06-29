import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getreverseNumber(number: number): number {
    let revease = '';
    const numArr = [...number.toString()];
    for (let i = numArr.length - 1; i >= 0; i--) {
      revease = `${revease}${numArr[i]}`;
    }

    const num = parseInt(`${revease}`);

    return num;
  }
}
