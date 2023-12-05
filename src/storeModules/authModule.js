export default {
  state() {
    return { userId: null, token: null, userEmail: null };
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.userEmail = payload.userEmail;
    },
  },
  actions: {
    async login(context, payload) {
      return context.dispatch("auth", { ...payload, mode: "login" });
    },
    async signup(context, payload) {
      return context.dispatch("auth", { ...payload, mode: "signup" });
    },
    async auth(context, payload) {
      const mode = payload.mode;
      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYerQPtCDNOfyXLK0ARCsCROV7L_8FhpY";
      if (mode === "signup") {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYerQPtCDNOfyXLK0ARCsCROV7L_8FhpY";
      }
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to authenticate."
        );
        throw error;
      }

      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("userEmail", responseData.email);

      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        userEmail: responseData.email,
      });
    },
    logout(context) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");

      context.commit("setUser", {
        userId: null,
        token: null,
        userEmail: null,
      });
    },
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    userEmail(state) {
      return state.userEmail;
    },
    token(state) {
      return state.token;
    },
  },
};
