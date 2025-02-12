import { describe } from "mocha";
import { substract } from "./calculator";
import { assert, expect } from "chai";

describe("Calculator tests", () => {
    it("should return 0 when substract 0 and 0", () => {
        const result = substract(0, 0);

        expect(result).to.equals(0)
    })

    it("should return 0 when substract 1 and 1", () => {
        const result = substract(1, 1);

        expect(result).to.equals(0)
    })
})