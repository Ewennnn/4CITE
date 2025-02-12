import { describe } from "mocha";
import { BankUser } from "./user/user";
import { expect } from "chai";
import { save } from "./bank-controller";

describe("Bank user tests", () => {
    it("should save new user", () => {
        const bankUser = new BankUser(
            "name",
            "user",
            "user.name@mail.com"
        )

        const result = save(bankUser)

        expect(result).to.be.true
    })
})