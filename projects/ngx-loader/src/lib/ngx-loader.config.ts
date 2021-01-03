import { InjectionToken } from "@angular/core";

export class NgxLoaderConfig {
  type: NgxLoaderType = NgxLoaderTypeEnum.AUDIO;
}


export type NgxLoaderType = 'audio' |
'ball-triangle' |
'bars' |
'circles' |
'grid' |
'hearts' |
'oval' |
'puff' |
'rings' |
'spinning-circles' |
'tail-spin' |
'three-dots';


export enum NgxLoaderTypeEnum {
  AUDIO = 'audio',
  BALL_TRIANGLE = 'ball-triangle',
  BARS = 'bars',
  CIRCLES = 'circles',
  GRID = 'grid',
  HEARTS = 'hearts',
  OVAL = 'oval',
  PUFF = 'puff',
  RINGS = 'rings',
  SPINNING_CIRCLES = 'spinning-circles',
  TAIL_SPIN = 'tail-spin',
  THREE_DOTS = 'three-dots'
}
