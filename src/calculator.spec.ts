import { describe } from "mocha";
import { divide, substract } from "./calculator";
import { expect } from "chai";

describe("Substraction tests", () => {
    it("should return 0 when substract 0 and 0", () => {
        const result = substract(0, 0);

        expect(result).to.equals(0)
    })

    it("should return 0 when substract 1 and 1", () => {
        const result = substract(1, 1);

        expect(result).to.equals(0)
    })

    it("should return 1 when substract 2 and 1", () => {
        const result = substract(2, 1);

        expect(result).to.equals(1)
    })

    it("should return -1 when substract 1 and 2", () => {
        const result = substract(1, 2);

        expect(result).to.equals(-1)
    })
})

describe("Division tests", () => {
    it("should return 1 when divide 1 by 1", () => {
        const result = divide(1, 1);

        expect(result).to.equals(1)
    })

    it("should return 2 when divide 2 by 1", () => {
        const result = divide(2, 1)

        expect(result).to.equals(2)
    })

    it("should return 0.5 when divide 1 by 2", () => {
        const result = divide(1, 2)

        expect(result).to.equals(0.5)
    })

    it("should return 1/3 when divide 1 by 3", () => {
        const result = divide(1, 3)

        expect(result).to.equals(1/3)
    })

    it("should return 4 when divide 16 by 4", () => {
        const result = divide(16, 4)

        expect(result).to.equals(4)
    })

    it("should throws when divide by 0", () => {

        expect(() => divide(1, 0)).to.throw("Divide by 0")
    })
})