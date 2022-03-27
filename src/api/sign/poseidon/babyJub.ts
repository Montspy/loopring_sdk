import { BigNumber } from "ethers";
import { SignatureScheme, bytesToHexString } from "./eddsa";
import { field } from "./field";


export class babyJub {
  
  static packPoint(P0: BigNumber, P1: BigNumber) {
    let packed = SignatureScheme.to_bytes(P1).reverse()
    // console.log("packed", packed)
    if (babyJub.lt(P0, BigNumber.from("0"))) {
      packed[0] = packed[0] | 0x80
    }
    let hexStr = bytesToHexString(packed)
    // console.log("hexStr", hexStr)
    return hexStr
  }

  static lt(a: BigNumber, b: BigNumber) {
    let half = field.SNARK_SCALAR_FIELD.div(BigNumber.from("2"))
    let p = field.SNARK_SCALAR_FIELD
    let aa: BigNumber
    let bb: BigNumber
    if (a.gt(half)) {
      aa = a.sub(p)
      bb = b.sub(p)
    } else {
      aa = a
      bb = b
    }
    return aa.lt(bb)
  }

  static gt(a: BigNumber, b: BigNumber) {
    let half = field.SNARK_SCALAR_FIELD.div(BigNumber.from("2"))
    let p = field.SNARK_SCALAR_FIELD
    let aa: BigNumber
    let bb: BigNumber
    if (a.gt(half)) {
      aa = a.sub(p)
      bb = b.sub(p)
    } else {
      aa = a
      bb = b
    }
    return aa.gt(bb)
  }

}
