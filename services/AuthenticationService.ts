import Api from "~/services/Api";

export default {
  register (credentials: { password: string, email: string }) {
    return Api().post("register", credentials);
  }
};
