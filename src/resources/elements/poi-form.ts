import { inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';
import { Pois } from "../../services/poi-types";
import { PoiService } from "../../services/poi-service"

@inject(PoiService)
export class PoiForm {
  @bindable
  pois: Pois[] = [];
  @bindable
  admissionFee: string[];

  attractionType = '';
  attractionName = '';
  attractionDesc = '';
  selectedAdmission = '';

  constructor (private ds: PoiService) {}

  addPoi() {
    const poi = {
      attractionType: this.attractionType,
      attractionName: this.attractionName,
      attractionDesc: this.attractionDesc,
      admissionFee: this.selectedAdmission
    }
    this.pois.push(poi)
    console.log(this.pois);
  }
}
