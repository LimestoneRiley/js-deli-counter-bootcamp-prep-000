function takeANumber (PeopleCount, FName){
  PeopleCount.push (FName);
  var ReturnLine = "Welcome, " + FName + ". You are number " + PeopleCount.length + " in line.";
  return (ReturnLine);
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length > 1){
   BeingServed = katzDeliLine[0];
   katzDeliLine.shift;
   return (BeingServed);
  }
  return ("There is nobody waiting to be served!");
}
