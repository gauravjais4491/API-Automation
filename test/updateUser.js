const expect = require('chai').expect;
const chai = require('chai');
const { App_Url, createUser } = require('./test.utils');
const should = chai.should();
const axios = require('axios')
const { before } = require('mocha');


let userId = undefined;

before(async () => {
    userId = await createUser();
})

describe('Update User', () => {

    it('should update user profile with username, email, age', async () => {
        const payload = {
            name: "kuldeep Yadav",
            email: "kuldeep@example.com",
            age: 34
        }
        const response = await axios.put(App_Url + "/updateUserInfo/" + userId._id, payload)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an('object')
    });

    it('should update user profile with e-mail', async () => {
        const payload = {
            email: "sarukh@example.com",
        }
        const response = await axios.put(App_Url + "/updateUserInfo/" + userId._id, payload)
        expect(response.status).not.to.be.equal(201)
        expect(response.data).to.be.an('object')
    });

    it('should update user profile with age', async () => {
        const payload = {
            age: 120
        }
        const response = await axios.put(App_Url + "/updateUserInfo/" + userId._id, payload)
        expect(response.status).not.to.be.equal(201)
        expect(response.data).to.be.an('object')
    });

    it('should update user profile with name', async () => {
        const payload = {
            name: "Salman Khan",
        }
        const response = await axios.put(App_Url + "/updateUserInfo/" + userId._id, payload)
        expect(response.status).not.to.be.equal(201)
        expect(response.data).to.be.an('object')
    });

    it('should update user with wrong user id', async () => {
        try {
            const payload = {
                name: "Virat Kohli",
                email: "virat@example.com",
                age: 34
            }
            const response = await axios.put(App_Url + "/updateUserInfo/" + 1234567, payload)
            expect(response.status).not.to.be.equal(200)
            expect(response.data).to.be.an('object')

        } catch (error) {
            if (error.response) {
                expect(error.response.status).not.to.be.equal(200)
            }
            else {
                throw error;
            }
        }

    });

    it('should update user profile with new e-mail', async () => {
        const payload = {
            email: "sarukh@example.com",
        }
        const response = await axios.put(App_Url + "/updateUserInfo/" + userId._id, payload)
        expect(response.status).not.to.be.equal(201)
        expect(response.data.email).to.be.equal("sarukh@example.com")
    });
})