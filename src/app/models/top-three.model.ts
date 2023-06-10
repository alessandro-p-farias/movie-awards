export class TopThreeModel {
  public studios?: Array<StudioObject>;
}

class StudioObject {
  public name?: string;
  public winCount?: number;
}