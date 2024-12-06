import { APIRequestContext, expect } from '@playwright/test';

export class APITester {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(url: string, headers?: Record<string, string>) {
    const response = await this.request.get(url, {headers});
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async post(url: string, data: object, headers?: Record<string, string>) {
    const response = await this.request.post(url, { 
        data, headers 
    });
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async put(url: string, data: object, headers?: Record<string, string>) {
    const response = await this.request.put(url, { data, headers });
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async delete(url: string, headers?: Record<string, string>) {
    const response = await this.request.delete(url, {headers});
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async validateResponseStatus(response: any, expectedStatus: number) {
    expect(response.status()).toBe(expectedStatus);
  }

  async validateResponseBody(response: any, expectedBody: object) {
    const responseBody = await response.json();
    expect(responseBody).toEqual(expectedBody);
  }
}
