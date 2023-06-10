import { MovieModel } from "./movie.model"

export class MovieListModel {
  public content?: Array<MovieModel>;
  public pageable?: PageObject

  public totalElements?: number;
  public last?: boolean;
  public totalPages?: number;
  public first?: boolean;
  public sort?: SortObject;
  public number?: number;
  public numberOfElements?: number;
  public size?: number;
}

class PageObject {
  public sort?: SortObject;
  public pageSize?: number;
  public pageNumber?: number;
  public offset?: number;
  public paged?: boolean;
  public unpaged?: boolean;

}

class SortObject {
  public sorted?: boolean;
  public unsorted?: boolean;
}