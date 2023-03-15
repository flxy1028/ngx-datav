export class DigitalFlopConfig {
  header: string[] = [];
  data: any[][] = [];
  rowNum: number = 5;
  headerBGC: string = '#00BAFF';
  oddRowBGC: string = '#003B51';
  evenRowBGC: string = '#0A2732';
  waitTime: number = 2000;
  headerHeight: number = 35;
  columnWidth: number[] = [];
  align: Array<'left' | 'right' | 'center'> = [];
  index: boolean = false;
  indexHeader: string = '#';
  carousel: 'single' | 'page' = 'single';
  hoverPause: boolean = true;
  constructor() {}
}
