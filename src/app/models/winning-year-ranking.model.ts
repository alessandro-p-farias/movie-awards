export class WinningYearRankingModel {
  years?: Array<yearObject>;
}

class yearObject {
  public year?: number;
  public winnerCount?: number;
}
