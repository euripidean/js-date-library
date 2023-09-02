const {
  MONTHS,
  SHORT_MONTHS,
  DAYS,
  SHORT_DAYS,
  TIME_UNITS: timeUnits,
} = require("./Constants/constants");

class D {
  constructor(...args) {
    this._date = new Date(...args);
  }

  /**
   * year
   * @returns {number} year eg 2019
   */
  get year() {
    return this._date.getFullYear();
  }

  /**
   * yr
   * @returns {number} year eg 19
   */

  get yr() {
    return this._date.getFullYear() % 100;
  }

  /**
   * month
   * @returns {string} month eg January
   */

  get month() {
    return MONTHS[this._date.getMonth()];
  }

  /**
   * mon
   * @returns {string} month eg Jan
   */

  get mon() {
    return SHORT_MONTHS[this._date.getMonth()];
  }

  /**
   * day
   * @returns {string} day eg Monday
   */

  get day() {
    return DAYS[this._date.getDay()];
  }

  /**
   * dy
   * @returns {string} day eg Mon
   */

  get dy() {
    return SHORT_DAYS[this._date.getDay()];
  }

  /**
   * date
   * @returns {number} date eg 1
   */

  get date() {
    return this._date.getDate();
  }

  /**
   * hours
   * @returns {number} hours eg 1
   */

  get hours() {
    return this._date.getHours();
  }

  /**
   * mins
   * @returns {number} mins eg 23
   * */

  get mins() {
    return this._date.getMinutes();
  }

  /**
   * secs
   * @returns {number} secs eg 58
   */

  get secs() {
    return this._date.getSeconds();
  }

  /**
   * ampm
   * @returns {string} AMP or PM according to time
   */

  get ampm() {
    return this.hours >= 12 ? "PM" : "AM";
  }

  /**
   * suffix
   * @returns {string} suffix for date eg 1st
   */

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

  /**
   * defaultDate
   * @returns {string} year month date
   */

  get defaultDate() {
    return `${this.year} ${this.month} ${this.date}`;
  }

  /**
   * format
   * @param {string} formatString
   * @returns {string} formatted date according to formatString eg 2019-01-01
   * */

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
      D: this.date < 10 ? `0${this.date}` : this.date,
      d: this.date,
      H: this.hours,
      h: this.hours % 12,
      I: this.mins < 10 ? `0${this.mins}` : this.mins,
      i: this.mins,
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

  /**
   * singularOrPlural
   * @param {number} number
   * @param {string} unit
   * @returns {string} plural or singular unit eg 1 year or 2 years
   */

  singularOrPlural(number, unit) {
    return number === 1 ? unit.slice(0, -1) : unit;
  }

  /**
   * when
   * @returns {string} time elapsed eg 1 year ago
   * */

  when(now = new Date()) {
    const diff = now - this._date;
    const text = diff < 0 ? "from now" : "ago";
    let absDiff = Math.abs(diff);
    let result = "";
    let timeUnitsUsed = 0;

    for (const { unit, divisor } of timeUnits) {
      if (absDiff >= divisor) {
        const value = Math.floor(absDiff / divisor);
        result += `${value} ${this.singularOrPlural(value, unit)} `;
        absDiff %= divisor;
        timeUnitsUsed += 1;

        if (timeUnitsUsed === 3) {
          break;
        }
      }
    }

    if (result) {
      return `${result.trim()} ${text}.`;
    }
    return "Just now";
  }
}

module.exports = D;
