/**
 * Created by adron on 7/26/15.
 * Description: An class around the coder in the system.
 */

class Coder {
  name:string;
  constructor(theName: string) { this.name = theName; }
  swapWith(teamGroup: number = 0) {
    alert(this.name + " swapping " + teamGroup + "m.");
  }
}

class SwappingCoder extends Coder {
  constructor(name: string) { super(name); }
  swapWith(meters = 5) {
    alert("Slithering...");
    super.swapWith(meters);
  }
}

class SwappeeCoder extends Coder {
  constructor(name: string) { super(name); }
  swapWith(meters = 45) {
    super.swapWith(meters);
  }
}
