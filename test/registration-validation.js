const assert = require('chai').assert;
const {validUserName,validEmail,validPassword,matchPassword} = require( '../model/registration-validate.js')

describe('validRegistration Tests', ()=> {

    describe('username test', ()=> {

        it('username is valid with only letters', function () {
            const name = "Addyson";
            assert.isTrue(validUserName(name));
        });

        it('username is valid with uppercase lowercase and numbers', function () {
            const name = "ayyYYJSHD1982";
            assert.isTrue(validUserName(name));
        });

        it('username contains !', function () {
            const name = "!";
            assert.isFalse(validUserName(name));
        });

        it('username contains @', function () {
            const name = "@";
            assert.isFalse(validUserName(name));
        });

    });
    describe('email tests', () => {

        it('valid email', () => {
            const email = "200dumplings@gmail.com";
            assert.isTrue(validEmail(email));
        });

        it('invalid email contains !', () => {
            const email = "200dumplings@gma!il.com";
            assert.isFalse(validEmail(email));
        });

        it('invalid email missing domain', () => {
            const email = "200dumplingsmail.com";
            assert.isFalse(validEmail(email));
        });

        it('invalid email has no username', () => {
            const email = "@mail.com";
            assert.isFalse(validEmail(email));
        });

    });
});