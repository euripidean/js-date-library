// Tests for D class

const D = require("../src/index");

describe("D class", () => {
  describe("year", () => {
    test("should return the year with four digits", () => {
      const d = new D("2023-01-01");
      expect(d.year).toBe(2023);
    });
    describe("yr", () => {
      test("should return the year with two digits", () => {
        const d = new D("2023-01-01");
        expect(d.yr).toBe(23);
      });
    });
    describe("month", () => {
      test("should return the month with full name", () => {
        const d = new D("2023-01-01");
        expect(d.month).toBe("January");
      });
    });
    describe("mon", () => {
      test("should return the month with short name", () => {
        const d = new D("2023-01-01");
        expect(d.mon).toBe("Jan");
      });
    });
    describe("day", () => {
      test("should return the day with full name", () => {
        const d = new D("2023-01-01");
        expect(d.day).toBe("Sunday");
      });
    });
    describe("dy", () => {
      test("should return the day with short name", () => {
        const d = new D("2023-01-01");
        expect(d.dy).toBe("Sun");
      });
    });
    describe("date", () => {
      test("should return the day as the number of the month", () => {
        const d = new D("2023-01-01");
        expect(d.date).toBe(1);
      });
    });
    describe("hours", () => {
      test("should return the hours", () => {
        const d = new D("2023-01-01T10:00:00");
        expect(d.hours).toBe(10);
      });
    });
    describe("mins", () => {
      test("should return the minutes", () => {
        const d = new D("2023-01-01T10:27:00");
        expect(d.mins).toBe(27);
      });
    });
    describe("secs", () => {
      test("should return the seconds", () => {
        const d = new D("2023-01-01T10:27:54");
        expect(d.secs).toBe(54);
      });
    });
    describe("ampm", () => {
      test("should return the am when time is before 1200", () => {
        const d = new D("2023-01-01T10:27:54");
        expect(d.ampm).toBe("AM");
      });
      test("should return the pm when time is after 1200", () => {
        const d = new D("2023-01-01T13:27:54");
        expect(d.ampm).toBe("PM");
      });
    });
    describe("suffix", () => {
      test("should return the st if date ends with a 1", () => {
        const d = new D("2023-01-01");
        const d1 = new D("2023-11-21");
        const d2 = new D("2023-12-31");
        expect(d.suffix).toBe("st");
        expect(d1.suffix).toBe("st");
        expect(d2.suffix).toBe("st");
      });
    });
    test("should return the nd if date ends with a 2", () => {
      const d = new D("2023-02-02");
      const d1 = new D("2023-12-22");
      expect(d.suffix).toBe("nd");
      expect(d1.suffix).toBe("nd");
    });
    test("should return the rd if date ends with a 3", () => {
      const d = new D("2023-03-03");
      const d1 = new D("2023-12-23");
      expect(d.suffix).toBe("rd");
      expect(d1.suffix).toBe("rd");
    });
    test("should return the th if date ends with any other number", () => {
      const d = new D("2023-04-04");
      const d1 = new D("2023-12-24");
      const d2 = new D("2023-12-17");
      expect(d.suffix).toBe("th");
      expect(d1.suffix).toBe("th");
      expect(d2.suffix).toBe("th");
    });
  });
});
