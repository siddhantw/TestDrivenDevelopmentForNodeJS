var expect = require('chai').expect;


//******************Async testing using Callbacks*******************
function myAsyncFunction(callback){
    setTimeout(function () {
        callback("blah");
    },50);
}

it("test_async", function (done) {
    myAsyncFunction(function (str) {
        expect(str).to.equal("blah");
        done();
    });
});

//*******************************************************************
//*******************************************************************

//******************Async testing with Promises**********************
function myPromiseFunction(){
    return new Promise(function () {
    setTimeout(function () {
        resolve("blah");
        },50);
    });
}

it("test_promise", function () {
    return myPromiseFunction().then(function (res) {
        expect(res).to.equal("blah");
    });
});

//*******************************************************************
//*******************************************************************

//******************Async testing with Async/Await*******************
function myPromiseFunction(){
    return new Promise(function () {
        setTimeout(function () {
            resolve("blah");
        },50);
    });
}

it("test_async_await", async function () {
    var result = await myPromiseFunction();
        expect(result).to.equal("blah");
});

//*******************************************************************
//*******************************************************************