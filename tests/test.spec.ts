import { Injectable } from "../src/main";

describe("Injectable service class", () => {
  class Demo extends Injectable {
    run() {
      return 'working';
    }
  }

  it("should be able to create instance without constructor", () => {
    expect(Demo.getInstance<Demo>(Demo)).toBeInstanceOf(Demo);
  });

  it("should be able to perform property injection", () => {
    class Check extends Injectable {
      private readonly demo = Demo.getInstance<Demo>(Demo);

      runTest() {
        expect(this.demo.run()).toBe('working');
      }
    }
    Check.getInstance<Check>(Check).runTest();
  });
});