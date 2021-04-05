import Cookies from "universal-cookie";

class DataProvider {
  baseURL = "https://finalyearbackend.herokuapp.com";
  //baseURL = "http://localhost:5000";
  cookies = new Cookies();
}

export default new DataProvider();