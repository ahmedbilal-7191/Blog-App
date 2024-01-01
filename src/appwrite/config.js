import conf from "../configvar/conf";
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                //here we are using slug to each post we can also give id.unique
                conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                //what values to be create are given here
                title, content, featuredImage, status, userId,
            }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    // in appwrite doc slug is the unique identifier to target the particular 
    //post to get updated else unique.id
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(conf.appwriteCollectionId, conf.appwriteCollectionId, slug,
                {
                    //what values must be updated are here
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("appwrite service:: delepost error", error)
            return false
        }
    }
    //single user posts
    //apan posts likha
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("apprite service eroor get post ", error)
            return false
        }
    }

    //now query
    //we are getting post which are active
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                //we can write whole array here also
            )
        } catch (error) {
            console.log("eroore in all get post", error)
            return false
        }
    }

    //file upload services
    // we will recieve an id so while creating post we will pass it to featured image
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("file error", error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
        } catch (error) {
            console.log("eror while deleting the file", error)
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
    }






}
//weare creating obj here only(service)if not in a new file to acccess class we need to
//create obj there
const service = new Service()
export default service