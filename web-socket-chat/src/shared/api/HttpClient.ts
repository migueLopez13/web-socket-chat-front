class HttpClient {
  myHeaders = new Headers()

  constructor(private baseUrl: RequestInfo, private token = "") { }

  setHeaders(name: string, value: string) {
    this.myHeaders.set(name, value)
  }

  async get(source: string, id = "") {
    const url = id ? `${this.baseUrl}${source}/${id}` : `${this.baseUrl}${source}`

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: this.myHeaders,
    })

    return response.json()
  }

  async post(source: string, data: any) {
    const response = await fetch(`${this.baseUrl}${source}`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: this.myHeaders,
      body: JSON.stringify(data),
    })

    return response.json()
  }

  async put(source: string, id: string, data: any) {
    const response = await fetch(`${this.baseUrl}${source}/${id}`, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: this.myHeaders,
      body: JSON.stringify(data),
    })

    return response.json()
  }

  async delete(source: string, id: string, data: any) {
    const response = await fetch(`${this.baseUrl}${source}/${id}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: this.myHeaders,
      body: JSON.stringify(data),
    })

    return response.json()
  }
}

const httpClient = new HttpClient("http://localhost:8000")

export default httpClient
