class Stinger {
    constructor(string, iLength) {
        this.innerString = string;
        this.innerLength = iLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength <= 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return "...";
          }
          if (this.innerString.length > this.innerLength) {
            return (
              this.innerString.substring(
                0,
                this.innerString.length - this.innerLength
              ) + "..."
            );
          }
        return this.innerString;
    }
}