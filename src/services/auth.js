
import DataProvider from "./data";
class Auth {
  logout() {
    DataProvider.cookies.remove("authenticated");
  }

  isAuthenticated() {
    if (DataProvider.cookies.get("authenticated") === "true") {
      return true;
    } else {
      return false;
    }
  }
}

export default new Auth();