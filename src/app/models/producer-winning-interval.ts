export class ProducerWinnnigIntervalModel {
  public min?: Array<Producer>;
  public max?: Array<Producer>;
}

class Producer {
  public producer?: string;
  public interval?: number;
  public previousWin?: number;
  public followingWin?: number;
}