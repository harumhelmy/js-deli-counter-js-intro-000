function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

let ourLine = []
takeANumber(ourLine) -> 1
let ourLine = [1]
takeANumber(ourLine) -> 2
[1,2]
nowServing(ourLine) -> 1
[2]
nowServing(ourLine) -> 2
[]
takeANumber(ourLine) -> 3
[3]

function takeANumber(ourLine) { 
  ourLine.push(1)
  return ourLine[ourLine.length-1]
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  var str = "The line is currently: ";
  for (var i = 0; i < line.length; i++) {
    if (i < line.length - 1) {
      str = str + (i + 1) + ". " + line[i] + ", ";
    } else {
      str = str + (i + 1) + ". " + line[i];
    }
  }
  return str
}
