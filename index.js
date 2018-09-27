function takeANumber (PeopleCount, FName){
  PeopleCount.push (FName);
  var ReturnLine = "Welcome, " + FName + ". You are number " + PeopleCount.length + " in line.";
  return (ReturnLine);
}
