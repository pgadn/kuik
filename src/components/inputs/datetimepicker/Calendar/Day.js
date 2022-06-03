export default class Day {
  constructor(date = null, lang = "default") {
    date = date ?? new Date();
    this.Date = date;
    this.date = date.getDate();
    this.day = date.toLocaleString(lang, { weekday: "long" });
    this.dayNumber = date.getDay() + 1;
    this.dayShort = date.toLocaleString(lang, { weekday: "short" });
    this.year = date.getFullYear();
    this.yearShort = date.toLocaleString(lang, { year: "2-digit" });
    this.month = date.toLocaleString(lang, { month: "long" });
    this.monthShort = date.toLocaleString(lang, { month: "short" });
    this.monthNumber = date.getMonth() + 1;
    this.timestamp = date.getTime();
    this.week = this.getWeekNumber(date);
  }

  getWeekNumber(date) {
    let firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
    let pastDaysOfYear = (date - firstDayOfTheYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) / 7)
  }

  get isToday() {
    return this.isEqualTo(new Date());
  }

  isEqualTo(date) {
    date = date instanceof Day ? date.Date : date;

    return (
      date.getDate() === this.date &&
      date.getMonth() === this.monthNumber - 1 &&
      date.getFullYear() === this.year
    );
  }  
}
