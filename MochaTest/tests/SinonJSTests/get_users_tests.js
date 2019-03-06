var expect = require("chai").expect;
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var request = require("request");
chai.should();
chai.use(sinonChai);

var getUsers = require('./get_users.js');
var spy;

beforeEach(function () {
    spy = sinon.spy();
    sinon.stub(request,'get').callsFake(function (url, callback) {
        callback({},{body:'{"users":["user1","user2"]}'});
    });
});

afterEach(function () {
    sinon.restore();
});

describe('GetUsers Tests', function(){
    it('Calls the callback', function () {
        getUsers(spy);
        spy.calledOnce;
    });

    it('Calls the correct URL', function () {
        getUsers(spy);
        request.get.calledWith("https://www.mysite.com/api/users");
    });

    it('Returns correct data', function () {
       getUsers(spy);
       spy.calledWith({users:['user1', 'user2']});
    });
});