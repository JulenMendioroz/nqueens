function* range(start = 0, stop = 1, step = 1){
  const steps = (stop - start) / step
  for(let i = 0; i < steps; i++){
    yield start + i * step
  }
}

export {range}