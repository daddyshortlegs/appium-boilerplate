const { Given, When, Then } = require('cucumber');

Given(/^the following login details$/, function() {
    console.log("got some details");
});

When(/^the user logs in$/, function() {
    console.log("Attempt login");
    browser.$("~signIn").click();
    browser.$("~Sign Up").click();

    browser.$("~firstName").addValue("Ema0000109");
    browser.$("~lastName").addValue("Password1");
    browser.$("~dateOfBirth").addValue("1970-01-01");
    browser.$("~primaryPhoneNumber").addValue("1234567890");
    browser.$("~submitButton").click();

});

Then(/^they are logged in successfully$/, function() {
    console.log("Success");
});

