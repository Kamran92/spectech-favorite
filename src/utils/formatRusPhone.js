export default (phone) => {
  return {
    // на вход =  71111111111, +71111111111, 1111111111, +7 (111) 111 11-11
    // на выход = +7 111 111 11 11
    add: () => {
      if (phone.length === 0) return "";
      if (phone.endsWith("7")) return "";

      const x = phone
        .replace(/\D/g, "")
        .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

      x[1] = "+7";

      return !x[3]
        ? x[1] + " " + x[2]
        : x[1] +
            " " +
            x[2] +
            " " +
            x[3] +
            (x[4] ? " " + x[4] : "") +
            (x[5] ? " " + x[5] : "");
    },
    reset: () => phone.replace(/\D/g, ""),
  };
};
