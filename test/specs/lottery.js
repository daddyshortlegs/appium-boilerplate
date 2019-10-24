const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.$("~signIn").click();
        browser.$("~signUp").click();

        browser.$("~firstName").addValue("Ema0000109");
        browser.$("~lastName").addValue("Password1");
        browser.$("~dateOfBirth").addValue("1970-01-01");
        browser.$("~primaryPhoneNumber").addValue("1234567890");
        browser.$("~submitButton").click();
    })
})
