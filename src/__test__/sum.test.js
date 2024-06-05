import { sum } from "../components/sum"


test("sum testing", () => {
    const result = sum(3,5);

    expect(result).toBe(8)
})