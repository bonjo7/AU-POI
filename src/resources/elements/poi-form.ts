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
  location = { lat: 53.2734, lng: -7.7783203 };

  constructor (private ds: PoiService) {}

  addPoi() {
    const poi = {
      attractionType: this.attractionType,
      attractionName: this.attractionName,
      attractionDesc: this.attractionDesc,
      admissionFee: this.selectedAdmission,
      location: this.location
    }
    this.pois.push(poi)
    console.log(this.pois);
  }
}
