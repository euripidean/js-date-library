// import constants from './constants';
const {
  MONTHS,
  SHORT_MONTHS,
  DAYS,
  SHORT_DAYS,
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

    const formatMap = {
      Y: this.year,
      y: this.yr,
      M: this.month,
      m: this.mon,
      W: this.day,
      w: this.dy,
      D: this.date,
      d: this.date.toString().replace(/^0+/, ""),
      H: this.hours,
      h: this.hours % 12,
      I: this.mins < 10 ? `0${this.mins}` : this.mins,
      i: this.mins.toString().replace(/^0+/, ""),
      S: this.secs < 10 ? `0${this.secs}` : this.secs,
      s: this.secs.toString().replace(/^0+/, ""),
      A: this.ampm,
      a: this.ampm.toLowerCase(),
      z: this.suffix,
    };

    let formattedDate = "";
    for (let i = 0; i < formatString.length; i++) {
      const char = formatString[i];
      formattedDate += formatMap[char] !== undefined ? formatMap[char] : char;
    }

    return formattedDate;
  }
}

const d = new D(2017, 0, 2, 3, 4, 5);
console.log(d.format()); // 2017 January 02
console.log(d.format("y/m/d")); // 17/Jan/2
console.log(d.format("H:I:S")); // 03:04:05
console.log(d.format("h:i:s")); // 3:4:5
console.log(d.format("Y-M-D h:I:S")); // 2017-January-02 3:04:05
