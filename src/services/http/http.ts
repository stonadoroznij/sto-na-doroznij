const BASE_URL = process.env.NEXT_PUBLIC_NEST_SERVER

export class Http {
  static async Get<T>(url: string, params?: Record<string, any>) {
    if (params) {
      const queryParams = new URLSearchParams(params)
      url = `${url}?${queryParams}`
    }

    return fetch(`${BASE_URL}${url}`)
  }

  static async Post<T>(url: string, data: T) {
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}
