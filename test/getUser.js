const expect = require('chai').expect;
const chai = require('chai');
const { App_Url, createUser } = require('./test.utils');
const should = chai.should();
const axios = require('axios')
const { before } = require('mocha');
const { response } = require('express');
// describe('Check Two Number', () => {
//     it('should match two number', async () => {
//         let num1 = 10;
//         let num2 = 10

//         expect(num1).to.be.equal(num2)
//     })

//     it('should not match two number', async () => {
//         let num1 = 10;
//         let num2 = 20

//         expect(num1).not.to.be.equal(num2)
//     })

//     it('should match two number', async () => {
//         let num1 = 20;
//         let num2 = 20

//         expect(num1).to.be.greaterThanOrEqual(num2)
//         expect(num1).to.be.a('Number')
//     })
// })


let userId = undefined;

before(async () => {
    userId = await createUser();
})

describe("Get User", () => {
    it('should get all user info', async () => {
        const response = await axios.get(App_Url + "/getUserInfo")
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an('Array')
    })
    it('should get single user info', async () => {
        const response = await axios.get(App_Url + "/getSingleUserInfo/" + userId._id)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an('object')
    })
    it('should have all the property of user', async () => {
        const response = await axios.get(App_Url + "/getSingleUserInfo/" + userId._id)
        response.data.should.have.property("name")
        response.data.should.have.property("email")
        response.data.should.have.property("age")

        expect(response.data.name).to.be.equal("Puja Kumari")

        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an('object')
    })
})
