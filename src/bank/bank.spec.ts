import { describe } from "mocha";
import { BankUser } from "./user/user";
import { expect } from "chai";
import { save } from "./bank-controller";
import { clear } from "./bank-repository";
import { isValidEmail } from "./bank-service";

describe("Bank user tests", () => {

    beforeEach(() => {
        clear()
    })

    it("should save new user", () => {
        const bankUser = new BankUser(
            "name",
            "user",
            "user.name@mail.com"
        )

        const result = save(bankUser)

        expect(result).to.be.true
    })

    it("should save two users", () => {
        const bankUser1 = new BankUser(
            "name",
            "user",
            "user.name@mail.com"
        )
        save(bankUser1)

        const bankUser2 = new BankUser(
            "name1",
            "user1",
            "user1.name1@mail.com"
        )

        const result = save(bankUser2)

        expect(result).to.be.true
    })

    it("should not save same user twice", () => {
        const bankUser = new BankUser(
            "name",
            "user",
            "user.name@mail.com"
        )

        save(bankUser)
        const result = save(bankUser)


        expect(result).to.be.false
    })

    it("should not save if email not contains '@'", () => {
        const bankUser = new BankUser(
            "name",
            "user",
            "user.namemail.com"
        )

        const result = save(bankUser)

        expect(result).to.be.false
    })

    it("should not save if email contains spaces", () => {
        const bankUser = new BankUser(
            "name",
            "user",
            "user.name @mail.com"
        )

        const result = save(bankUser)

        expect(result).to.be.false
    })

    it("should not save if no email is entered", () => {
        const bankUser = new BankUser(
            "name",
            "user",
            ""
        )

        const result = save(bankUser)

        expect(result).to.be.false
    })

    it("should not save if username field is missing", () => {
        const bankUser = new BankUser(
            "",
            "user",
            "user.name@mail.com"
        )

        const result = save(bankUser)

        expect(result).to.be.false
    })

    it("should not save if lastname field is missing", () => {
        const bankUser = new BankUser(
            "name",
            "",
            "user.name@mail.com"
        )

        const result = save(bankUser)

        expect(result).to.be.false
    })
})

describe("Email checks tests", () => {
    it("should validate email 'jean@122.31.5.21'", () => {
        const result = isValidEmail("jean@122.31.5.21")

        expect(result).to.be.true
    })
})