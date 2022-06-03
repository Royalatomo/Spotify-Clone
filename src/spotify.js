const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000";
// const redirectUrl = "http://192.168.1.3:3000";

const clientId = "3556c36c01da46ecb72c4c35965c51d2";
const scopes = [
  "user-read-playback-state",
  "user-read-recently-played",
  "user-modify-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  const hash = window.location.hash;
  window.location.hash = "";

  if (!hash) return;
  const values = hash.split("&");
  const token = values[0].split("=")[1];
  const expiry = values[2].split("=")[1];
  if (!token) return;

  const date = new Date();
  const TOKEN = {
    value: token,
    expiry: date.getTime() + expiry * 1000,
  };
  localStorage.setItem("token", JSON.stringify(TOKEN));

  return TOKEN.value;
};

export const tokenExpired = () => {
  const token = localStorage.getItem("token");
  if (!token) return true;
  const date = new Date();
  const parsedToken = JSON.parse(token);

  if (date.getTime() < parsedToken.expiry) {
    return false;
  }
  localStorage.removeItem("token");
  return true;
};
