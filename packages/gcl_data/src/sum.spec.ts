import { sum } from "./index";

describe("sum", () => {
    it("sums two numbers", () => {
        expect(sum(2, 3)).toEqual(5);
    });
});