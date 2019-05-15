import { bindable } from 'aurelia-framework';
import {Pois} from "../../services/poi-types";

export class PoiList {
  @bindable
  pois : Pois[];
}
