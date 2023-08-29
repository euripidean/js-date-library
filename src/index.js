// import constants from './constants';
const {
  MONTHS,
  SHORT_MONTHS,
  DAYS,
  SHORT_DAYS,
  FORMAT_MAP: formatMap,
  TIME_UNITS: timeUnits,
} = require("./Constants/constants");

class D {
  constructor(...args) {
    this._date = new Date(...args);
  }

  get year() {
    return this._date.getFullYear();
  }

  get yr() {
    return this._date.getFullYear() % 100;
  }

  get month() {
    return MONTHS[this._date.getMonth()];
  }

  get mon() {
    return SHORT_MONTHS[this._date.getMonth()];
  }

  get day() {
    return DAYS[this._date.getDay()];
  }

  get dy() {
    return SHORT_DAYS[this._date.getDay()];
  }

  get date() {
    return this._date.getDate();
  }

  get hours() {
    return this._date.getHours();
  }

  get mins() {
    return this._date.getMinutes();
  }

  get secs() {
    return this._date.getSeconds();
  }

  get ampm() {
    return this.hours >= 12 ? "PM" : "AM";
  }

  get suffix() {
    if (this.date % 10 === 1) {
      return "st";
    }
    if (this.date % 10 === 2) {
      return "nd";
    }
    if (this.date % 10 === 3) {
      return "rd";
    }
    return "th";
  }

  get defaultDate() {
    return `${this.year} ${this.month} ${this.date}`;
  }

  format(formatString) {
    if (!formatString) {
      return this.defaultDate;
    }

    let formattedDate = "";
    for (let i = 0; i < formatString.length; i++) {
      const char = formatString[i];
      formattedDate += formatMap[char] !== undefined ? formatMap[char] : char;
    }

    return formattedDate;
  }

  singularOrPlural(number, unit) {
    // slice off last character of unit to get singular form
    return number === 1 ? unit.slice(0, -1) : unit;
  }

  when() {
    const now = new Date();
    const diff = now - this._date;
    const text = diff < 0 ? "from now" : "ago";
    const absDiff = Math.abs(diff);

    for (const { unit, divisor } of timeUnits) {
      if (absDiff > divisor) {
        const value = Math.floor(absDiff / divisor);
        return `${value} ${this.singularOrPlural(value, unit)} ${text}`;
      }
    }
    return "Just now";
  }
}

const d = new D(2019, 0, 2, 3, 4, 5);
console.log(d.when()); // 6 months ago
const d1 = new D(2019, 9, 2, 3, 4, 5);
console.log(d1.when()); // 3 months from now
const d2 = new D(2024, 9, 2, 3, 4, 5);
console.log(d2.when()); // 5 years from now
const d3 = new D(2019, 6, 30, 3, 4, 5);
console.log(d3.when()); // 3 days from now
const d4 = new D();
console.log(d4.when()); // today
