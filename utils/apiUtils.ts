import { request, expect, APIRequestContext } from "@playwright/test"
import { testData } from "./dataset"

export class ApiUtils {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async createUser(url: string, email: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const createNewUser = await apiContext.post(url, {
            data: {
                firstName: testData.firstName,
                lastName: testData.lastName,
                userEmail: email,
                userRole: "customer",
                occupation: "Engineer",
                gender: "Male",
                userMobile: testData.phone,
                userPassword: testData.pass,
                confirmPassword: testData.pass,
                required:true
            }
        })
        expect(createNewUser.ok()).toBeTruthy()
        return {email}
    }

    async loginUser(url: string, email: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const loginUser = await apiContext.post(url, {
            data: {
                userEmail: email,
                userPassword: testData.pass
            }
        })
        expect(loginUser.ok()).toBeTruthy()
        const response = await loginUser.json()
        const token = response.token
        return {token}
    }
}