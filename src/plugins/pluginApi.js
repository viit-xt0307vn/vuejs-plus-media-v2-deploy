export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    },
    params: {
      api_key: process.env.API_KEY,
      website_id: process.env.WEBSITE_ID,
    }
  })

  // Set baseURL to something different
  api.setBaseURL(process.env.API_END_POINT)

  // Inject to context as $api
  inject('api', api)
}