const expect = require('chai').expect;
const chai = require('chai');
const { App_Url } = require('./test.utils');
const should = chai.should();
const axios = require('axios')
const { before } = require('mocha');
const { response } = require('express');


describe('Create User', () => {
    it('should create user profile with username, email, age', async () => {
        const payload = {
            name: "Rohit Sharma",
            email: "rohit@example.com",
            age: 34
        }

        const response = await axios.post(App_Url + "/postUserInfo", payload)
        expect(response.status).to.be.equal(201)
        expect(response.data).to.be.an('object')
    });

    it('should create user profile without username', async () => {
        try {
            const payload = {
                email: "rohit@example.com",
                age: 34
            }

            const response = await axios.post(App_Url + "/postUserInfo", payload)
            expect(response.status).not.to.be.equal(201)
            expect(response.data).to.be.an('object')
        } catch (error) {
            if (error.response) {
                expect(error.response.status).not.to.be.equal(201)
            }
            else {
                throw error;
            }
        }
    });

    it('should create user profile without e-mail', async () => {
        try {
            const payload = {
                name: "Rohit Sharma",
                age: 34
            }

            const response = await axios.post(App_Url + "/postUserInfo", payload)
            expect(response.status).not.to.be.equal(201)
            expect(response.data).to.be.an('object')
        } catch (error) {
            if (error.response) {
                expect(error.response.status).not.to.be.equal(201)
            }
            else {
                throw error;
            }
        }
    });

    it('should create user profile without age name', async () => {
        try {
            const payload = {
                name : "Rohit Sharma",
                email: "rohit@example.com"
            }

            const response = await axios.post(App_Url + "/postUserInfo", payload)
            expect(response.status).not.to.be.equal(201)
            expect(response.data).to.be.an('object')
        } catch (error) {
            if (error.response) {
                expect(error.response.status).not.to.be.equal(201)
            }
            else {
                throw error;
            }
        }
    })
})
