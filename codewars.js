//forgot to copy over the solution to first problem
//but I took a picture of my completion screen

//second
function findOutlier(integers){
    let evens = []
    let odds = []
    for (number of integers){
      if (number%2 == 0){
        evens.push(number)
      }else{
        odds.push(number)
      }
    }
    if (evens.length > 1){
      return odds[0]
    }else{
      return evens[0]
    }
  }