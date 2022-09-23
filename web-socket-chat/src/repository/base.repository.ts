import { FakeResponse } from "../types/fake-response.type";
import httpClient from "./HttpClient";

export default class BaseRepository<T> {
  constructor(private source: string) { }

  async get(id = ""): Promise<T | T[] | FakeResponse> {
    return httpClient.get(this.source, id)
  }

  async post(data: T): Promise<T | FakeResponse> {
    return httpClient.post(this.source, data)
  }

  async put(id: string, data: T): Promise<T | FakeResponse> {
    return httpClient.put(this.source, id, data)
  }

  async delete(id = "", data: T): Promise<T | FakeResponse> {
    return httpClient.delete(this.source, id, data)
  }
}