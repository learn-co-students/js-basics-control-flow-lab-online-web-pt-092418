function scuberGreetingForFeet(ride){
  // Write your code here!
  let cost
  if (ride  >= 2500) {
    cost = "No can do."
    return cost
  }
  else if (ride < 400) {
    cost = "This one is on me!"
    return cost
  }
  else if (ride > 2000) {
    cost = "I will gladly take your thirty bucks."
    return cost
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let accept;
  city == "NYC" ? accept = 'Ok, sounds good.' : accept = "No go.";
  return accept
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let reply;

  switch (tip) {
    case "generous":
      reply = "Thank you so much."
      return reply
          break;
    case "not as generous":
      reply = "Thank you."
      return reply
          break;
    default:
      reply = "Bye."
      return reply
  }
}
