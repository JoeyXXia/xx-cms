let BASE_URL = ''
if (import.meta.env.PROD) {
  // production environment
  BASE_URL = 'http://152.136.185.210:4000'
} else {
  //  development environment
  BASE_URL = 'http://123.207.32.32:5000'
}

export const TIME_OUT = 100000
export { BASE_URL }
