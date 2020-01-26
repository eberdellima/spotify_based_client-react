
const client_id = '0b97f61b99c84fd3bf562b4217d01323'
const client_secret = '898a777c0f9b4002a4848e31c4858b66'

export const getRedirectURL = () => {
  return `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=http://localhost:3000/content/categories&scope=user-read-private%20user-read-email&show_dialog=true`;
}