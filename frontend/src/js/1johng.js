var JohnG = class {
  constructor(start = 0, accuracy = 1, clock = false, clock24hour = false, clockDisplay = "", data = []) {
    this.count = start;
    this.accuracy = accuracy; // seconds
    this.clock = clock;
    this.clock24hour = clock24hour;
    this.data = data;
    this.clockDisplay = clockDisplay;

    this.playing = false;

    this.byID = function (id) {
      return document.getElementById(id);
    };

    this.byClass = function (id) {
      return document.querySelectorAll(`.${id}`);
    };

    this.pad = function (val) {
      return val > 9 ? val : `0${val}`;
    };

    this.tick = function () {
      if (this.count < 0 || this.count >= 86400) {
        this.count = 0;
      }
      this.count += this.accuracy;
      this.updateClock();
      this.tickFunction();
    };

    this.current = function () {
      return this.count;
    };

    this.setCurrent = function (seconds) {
      this.count = seconds;
    };

    this.tickFunction = function () {
      return true;
    };

    this.play = function () {
      const me = this;
      if (!this.interval) {
        this.interval = setInterval(() => {
          me.tick(me);
        }, this.accuracy * 1000);
        this.playing = true;
      }
    };

    this.reset = function () {
      this.count = null;
      clearInterval(this.interval);
      delete this.interval;
      this.clearClock();
    };

    this.toggle = function () {
      if (this.interval) {
        this.pause();
      } else {
        this.play();
      }
    };

    this.move = function (seconds) {
      const parsedSeconds = parseInt(seconds, 10);
      this.count += parsedSeconds;
      if (this.count < 0) {
        this.count = 0;
      }
      this.updateClock();
    };

    this.pause = function () {
      clearInterval(this.interval);
      delete this.interval;
      this.playing = false;
    };

    this.isPlaying = function () {
      return this.playing;
    };

    this.set = function (data) {
      if (Array.isArray(data)) {
        this.data = data;
      }
    };

    this.get = function () {
      return this.data.filter(
        (item) => item.start <= this.count && this.count <= item.end,
      );
    };

    this.between = function (breakStart, breakEnd) {
      return this.data.filter(
        (item) => parseInt(breakStart, 10) <= item.start
          && item.end <= parseInt(breakEnd, 10),
      );
    };

    this.all = function () {
      return this.data;
    };

    this.updateClock = function () {
      jQuery(this.clockDisplay).text(secondsToTimeFormatted(this.current()));
    };

    this.setClock = function (hour, min, sec) {
      jQuery(this.clockDisplay).text(secondsToTimeFormatted(0));
    };

    this.secondsToTimeFormatted = function(seconds) {
      const d = new Date(0);
      d.setSeconds(seconds);
      d.setHours(d.getHours() + timeZone.diff); // Eastern Time Zone adjustment
      return `${dateFormatter(d)} ${timeZone.pretty}`;
    }
    this.dateFormatter = function(d) {
      let hours = d.getHours();
      let minutes = d.getMinutes();
      let seconds = d.getSeconds();
      if(!this.clock24hour) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours || 12; // the hour '0' should be '12'
      }
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    };

    this.clearClock = function () {
      if (this.clock) {
        this.setClock(0, 0, 0);
      }
    };
  };
}