//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,number) => {
  let suffix;
  const lastTwoDigit = number%100;
  const lastDigit = number%10;
  if(lastTwoDigit>=11 && lastTwoDigit <=13)
  {
    suffix="th";
  }
  else
  {
    switch(lastDigit){
      case 1: suffix="st";
        break;
      case 2: suffix="nd";
        break;
      case 3: suffix="rd";
        break;
      default: suffix="th";
    }
      
  }
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`
  //throw new Error('Remove this line and implement the function');
};
