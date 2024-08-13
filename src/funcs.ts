// Problem 3:

// TODO: add the definition of "r" here
type nmRec = {n: bigint; m: bigint};

/**
 * function r
 * @param {nmRec} record
 * @returns {bigint}
 */

export const r = ({n,m}: nmRec): bigint =>{
  if (n === 0n){
    return 1n;
  }
  else if (n> 0n && m === 0n){
    return -1n;
  }
  else{
    return 0n;
  }
};


// TODO: add the definition of "s" here
type nbTup = [bigint, boolean];
type Bool = boolean;
/**
 * function s
 * @param  {nbTup | B} input
 * @returns {bigint}
 */
export const s = (input: nbTup | Bool): bigint =>{
  if (typeof input === "boolean"){
    return 0n;
  }
  else{
    const [n,b] = input;
    if (b){
      return n;
    }
    else{
      return s([n + 1n, true]);
    }
  }
};

// TODO: add the definition of "t" here

type nmRecNum = {n: number; m: number};
type boolRecTup = [boolean, nmRecNum]

/**
 * function t
 * @params {boolRecTup} tuple
 * @returns {Rec}
 */
export const t = ([b, {n,m}]: boolRecTup): number =>{
  if (b){
    return n*m;
  }
  else{
    return (n)-(2*m);
  }
}




// Problem 6:

// TODO: translate your mathematical definition for "fact" to code
/**
 * 
 * @param {bigint} n
 * @returns {bigint}
 */

export const fact = (n: bigint): bigint => {
  if (n === 0n){
    return 1n;
  }
  else{
    return n*fact(n-1n)
  }
}

