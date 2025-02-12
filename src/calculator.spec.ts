import { describe } from "mocha";
import { divide, substract, multiply } from "./calculator";
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

    it("should throws when substract min number and 1", () => {
        
        expect(() => substract(Number.MIN_VALUE, 1)).to.throw("Infinity")
    })

    it("should return Number.MIN_VALUE when substract Number.MIN_VALUE and 0", () => {
        const result = substract(Number.MIN_VALUE, 0)

        expect(result).to.be.equals(Number.MIN_VALUE)
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

describe("Multiplication tests", () => {
    it("should return 0 when multiply 0 by any number", () => {
        expect(multiply(0, 0)).to.equals(0);
        expect(multiply(0, 1)).to.equals(0);
        expect(multiply(0, -1)).to.equals(0);
        expect(multiply(0, 1000)).to.equals(0);
    });

    it("should return the same number when multiply by 1", () => {
        expect(multiply(1, 1)).to.equals(1);
        expect(multiply(2, 1)).to.equals(2);
        expect(multiply(-5, 1)).to.equals(-5);
    });

    it("should return the negated number when multiply by -1", () => {
        expect(multiply(1, -1)).to.equals(-1);
        expect(multiply(-2, -1)).to.equals(2);
        expect(multiply(5, -1)).to.equals(-5);
    });

    it("should return 4 when multiply 2 by 2", () => {
        expect(multiply(2, 2)).to.equals(4);
    });

    it("should return 6 when multiply 2 by 3", () => {
        expect(multiply(2, 3)).to.equals(6);
    });

    it("should return -6 when multiply -2 by 3", () => {
        expect(multiply(-2, 3)).to.equals(-6);
    });

    it("should return 9 when multiply 3 by 3", () => {
        expect(multiply(3, 3)).to.equals(9);
    });

    it("should throw when multiply Number.MAX_VALUE by 2", () => {
        expect(() => multiply(Number.MAX_VALUE, 2)).to.throw("Infinity value");
    });

    it("should throw when multiply Number.MIN_VALUE by 0.5", () => {
        expect(() => multiply(Number.MIN_VALUE, 0.5)).to.throw("Infinity value");
    });

    it("should return Number.MAX_VALUE when multiply Number.MAX_VALUE by 1", () => {
        expect(multiply(Number.MAX_VALUE, 1)).to.equals(Number.MAX_VALUE);
    });

    it("should return Number.MIN_VALUE when multiply Number.MIN_VALUE by 1", () => {
        expect(multiply(Number.MIN_VALUE, 1)).to.equals(Number.MIN_VALUE);
    });
});
