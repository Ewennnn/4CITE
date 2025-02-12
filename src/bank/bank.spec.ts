import { describe } from "mocha";
import { BankUser } from "./user/user";
import { expect, use } from "chai";
import { save } from "./bank-controller";
import { clear } from "./bank-repository";
import { isValidEmail } from "./bank-service";

describe("Bank user tests", () => {

    let user: BankUser;

    beforeEach(() => {
        clear()

        user = new BankUser(
            "name",
            "user",
            "user.name@mail.com"
        )
    })

    it("should save new user", () => {
        const result = save(user)

        expect(result).to.be.true
    })

    it("should save two users", () => {
        save(user)

        const newUser = new BankUser(
            "name1",
            "user1",
            "user1.name1@mail.com"
        )

        const result = save(newUser)

        expect(result).to.be.true
    })

    it("should not save same user twice", () => {
        save(user)
        const result = save(user)


        expect(result).to.be.false
    })

    it("should not save if email not contains '@'", () => {
        user.email = "user.namemail.com"

        const result = save(user)

        expect(result).to.be.false
    })

    it("should not save if email contains spaces", () => {
        user.email = "user.name @mail.com"

        const result = save(user)

        expect(result).to.be.false
    })

    it("should not save if no email is entered", () => {
        user.email = ""

        const result = save(user)

        expect(result).to.be.false
    })

    it("should not save if username field is missing", () => {
        user.firstname = ""

        const result = save(user)

        expect(result).to.be.false
    })

    it("should not save if lastname field is missing", () => {
        user.lastname = ""

        const result = save(user)

        expect(result).to.be.false
    })
})

describe("Email checks tests", () => {
    it("should validate email 'jean@122.31.5.21'", () => {
        const result = isValidEmail("jean@122.31.5.21")

        expect(result).to.be.true
    })

    it("should validate email 'jean@gmail.com'", () => {
        const result = isValidEmail("jean@gmail.com")

        expect(result).to.be.true
    })

    it("should validate email 'jean+spam@gmail.com'", () => {
        const result = isValidEmail("jean+spam@gmail.com")

        expect(result).to.be.true
    })

    it("should validate email 'jean@justice.gouv.fr'", () => {
        const result = isValidEmail("jean@justice.gouv.fr")

        expect(result).to.be.true
    })
})