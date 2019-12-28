
export const client_id = ''
export const client_secret = ''

export const getRedirectURL = (clientId) => {
  return `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=https://spotify-based-client-react.herokuapp.com/content/categories&scope=user-read-private%20user-read-email&show_dialog=true`;
}