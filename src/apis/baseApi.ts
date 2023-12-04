import axios from "axios";

export abstract class BaseApi {
  protected dispatch: any;
  protected axios = axios;
  constructor(useDispatch: any) {
    this.dispatch = useDispatch();
  }
}
