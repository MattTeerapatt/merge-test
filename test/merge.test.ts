import { merge } from "../source/merge";

describe("Test merge sorted arrays function", () => {
  it("should return an array of size arr1.length + arr2.length", () => {
    const array1 = [1, 2, 4, 6, 9, 10, 20];
    const array2 = [2, 4, 6, 14, 15];
    const res = merge(array1, array2);
    expect(res.length).toBe(array1.length + array2.length);
  });
  it("handle arrays with equal elements", () => {
    const array1 = [2, 4, 6, 8];
    const array2 = [2, 4, 6, 8];
    const res = merge(array1, array2);
    expect(res).toEqual([2, 2, 4, 4, 6, 6, 8, 8]);
  });

  it("handle arrays with negative numbers", () => {
    const array1 = [-3, -1, 0, 4];
    const array2 = [-2, 1, 3, 5];
    const res = merge(array1, array2);
    expect(res).toEqual([-3, -2, -1, 0, 1, 3, 4, 5]);
  });

  it("handle empty array", () => {
    const array1: number[] = [];
    const array2: number[] = [];
    const res = merge(array1, array2);
    expect(res.length).toBe(0);
  });
  it("handle 1 empty array", () => {
    const array1 = [1, 3, 9, 10, 20];
    const array2: number[] = [];
    const res = merge(array1, array2);
    expect(res.length).toBe(array1.length);
  });
});
