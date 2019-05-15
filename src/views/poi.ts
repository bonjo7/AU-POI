export class Poi {
  attractionName: string;
  attractionType: string;
  atractionDesc: string;
  pois: any[] = [];

  addPoi(){
    const poi = {
      attractionName: this.attractionName,
      attractionType: this.attractionType,
      attractionDesc: this.atractionDesc
    };
    this.pois.push(poi);
    console.log(poi);
  }

}
