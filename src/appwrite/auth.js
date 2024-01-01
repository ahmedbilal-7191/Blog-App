import conf from "../configvar/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    //we could have do it here but waste of resource that's why we used constructor
    client = new Client()
    account;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        //obj hai ACC
    }

    async createAccount({ email, password, name }) {
        try {
            const userAcccount = await this.account.create(ID.unique(), email, password, name);
            if (userAcccount) {
                //use another methjod like we could do login
                return this.login({ email, password })
            } else {
                return userAcccount

            }

        } catch (error) {
            throw error

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }
    //ask who is current user Yeh login ke baad ka haai 
    async getCUrrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("App write user currentuser error", error)
        }
        return null;
    }

    async logout() {
        try {
            //will delete the sesssion whereever user has logged in 
            await this.account.deleteSessions()
        } catch (error) {
            console.log("logout issue", error)
        }
    }




}
//whenever new is called constructor is called
const authservice = new AuthService()
export default authservice