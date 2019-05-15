import { bindable } from 'aurelia-framework';

export class PoiForm {
  attractionType: string;
  atractionName: string;
  attractionDesc: string;
  @bindable
  pois: any[] = [];

  addPoi() {
    const poi = {
      attractionType: this.attractionType,
      attractionName: this.atractionName,
      attractionDesc: this.attractionDesc
    }
    this.pois.push(poi)
    console.log(this.pois);
  }
}
