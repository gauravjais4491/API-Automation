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


describe("Delete User", () => {
    it('should delete user', async () => {
        const response = await axios.delete(App_Url + "/deleteUserInfo/" + userId._id)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an('object')
    })
})