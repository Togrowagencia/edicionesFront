export const baseurl = "https://backediciones.com/api";
export const baseurl2 = "https://backediciones.com/";

export const token = () => {
  const token = localStorage.getItem("authResponse");
  if (!token) {
    return Error("Token no encontrado");
  }

  const config = {
    headers: {
      tgwr_token: token,
    },
  };
  return config;
};
