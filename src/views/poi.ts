import { inject } from 'aurelia-framework';
import { Pois } from "../services/poi-types";
import { PoiService } from "../services/poi-service";

@inject(PoiService)
export class Poi {
  pois: Pois[];
  admissionFee: string[];

  constructor(private ds: PoiService) {
    this.pois = ds.pois;
    this.admissionFee = ds.admissionFee;
  }

}
