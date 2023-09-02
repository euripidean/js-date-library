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
  describe("format", () => {
    test("should return the date in the format specified (Year, Month, Date)", () => {
      const d = new D("2023-01-01");
      expect(d.format("Y-M-D")).toBe("2023-January-01");
    });

    test("should return the date in the format specified (Short Year, Short Month, Short Date)", () => {
      const d = new D("2023-01-01");
      expect(d.format("y-m-d")).toBe("23-Jan-1");
    });

    test("should return the date in 12-hour format (Hour, Minute, Second)", () => {
      const d = new D("2023-01-01T15:30:45");
      expect(d.format("H:I:S A")).toBe("15:30:45 PM");
    });

    test("should return the date in 12-hour format with lowercase am/pm (Hour, Minute, Second)", () => {
      const d = new D("2023-01-01T09:15:05");
      expect(d.format("h:i:s a")).toBe("9:15:5 am");
    });

    test("should return the date with a suffix (Suffix)", () => {
      const d = new D("2023-01-01");
      expect(d.format("z")).toBe("st");
    });

    test("should return the date with the default format when no format string is provided", () => {
      const d = new D("2023-01-01");
      expect(d.format()).toBe(d.defaultDate);
    });
  });

  describe("when", () => {
    test("Should return how many years, months and days since a past event", () => {
      const firstDate = new Date("2023-09-02");
      const d = new D("2022-01-01");
      expect(d.when(firstDate)).toBe("1 year 8 months 4 days ago.");
    });
    test("Should return how many months and days until a future event", () => {
      const firstDate = new Date("2023-09-02");
      const d = new D("2024-01-01");
      expect(d.when(firstDate, true)).toBe("4 months 1 day from now.");
    });
    test("Should return 'just now' if the date is less than one second difference", () => {
      const firstDate = new Date("2023-09-02T10:00:00");
      const d = new D("2023-09-02T10:00:00");
      expect(d.when(firstDate)).toBe("Just now");
    });
    test("Should return number of seconds if the date is less than one minute difference", () => {
      const firstDate = new Date("2023-09-02T10:00:00");
      const d = new D("2023-09-02T10:00:05");
      expect(d.when(firstDate)).toBe("5 seconds from now.");
    });
  });
});
