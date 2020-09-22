const sequence = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  ', '\r/   ', '\r- ', '\r\\ ', '\r|  ', '\n']; 

const timer = function (output, time) {
  setTimeout(() => {
    process.stdout.write(output);
  }, time);
}; 

const write = function (sequence) {
  let time = 100; 
  for(const s of sequence) {
    timer(s, time);
    time += 200; 
  }
}; 

write(sequence); 
