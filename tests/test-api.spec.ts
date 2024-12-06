import {test, expect} from '../utilities/custom-fixtures' 

const BASEURL: string = 'https://reqres.in/api'

test('API GET test example', async ({ apiTest }) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const response = await apiTest.get(`${BASEURL}/users/2`, headers);
    const responseBodyJson = await response.json();
    const responseBody = await response.text();
    console.log(`${responseBody}`)
    console.log(responseBodyJson.data.id)
});

test('API POST test example', async ({ apiTest }) => {
    const data = { id: 1000 }
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    const response = await apiTest.post(`${BASEURL}/user`, data, headers);
    const responseBodyJson = await response.json();
    const responseBody = await response.text();
    console.log(`${responseBody}`)
    console.log(responseBodyJson.id)
});

test('API PUT test example', async ({ apiTest }) => {
    const data = { 
                name: 'John',
                job: 'Developer' 
                }
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    const response = await apiTest.put(`${BASEURL}/users/2`, data, headers);
    const responseBodyJson = await response.json();
    const responseBody = await response.text();
    console.log(`${responseBody}`)
    console.log(responseBodyJson.name)
});

test('API DELETE test example', async ({ apiTest }) => {
    const data = { 
                name: 'John',
                job: 'Developer' 
                }
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    const response = await apiTest.delete(`${BASEURL}/users/2`, headers);
    expect(response.status()).toBe(204);
});