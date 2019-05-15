import { bindable } from 'aurelia-framework';
import {Pois} from "../../services/poi-types";

export class PoiForm {
  attractionType = '';
  attractionName = '';
  attractionDesc = '';
  @bindable
  pois: Pois[] = [];
  @bindable
  admissionFee: string[];

  selectedAdmission = '';

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
