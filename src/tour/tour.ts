class TourConstruct {
  public active: boolean;
  public categories: string[];
  public id: number;
  public minSeats: number;
  public maxSeats: number;
  public titleImage: string;
  public slug: string;
  public summary: string;
  public title: string;
}
class Tour extends TourConstruct {
  constructor(construct: TourConstruct) {
    super();
    Object.keys(construct)
      .forEach(k => {
        this[k] = construct[k];
      });
  }
}

export { Tour };