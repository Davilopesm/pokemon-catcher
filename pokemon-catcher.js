

const ALLOWED_MOVEMENTS = ["N", "S", "E", "O"];

const validateMovements = (playerMovements) => {
  if (!playerMovements.length) {
    console.log('Please enter one of the following values: N - E - S - O');
    return;
  }

  const hasInvalidMovement = playerMovements.some(movement => {
    if(!ALLOWED_MOVEMENTS.includes(movement)) { 
      console.log(`Invalid argument ${movement}. Allowed values are N - E - S - O`);
      return true;
    }
  });
  if(hasInvalidMovement) return false;

  return true;
}


export const execute = (processArguments) => {
  const nodeProcessFirstUserInputIndex = 2 // Process starts with 2 entries even if we did not add any
  const playerMovements = (processArguments[nodeProcessFirstUserInputIndex] || "").split("");

  if(!validateMovements(playerMovements)) return;

  let maxPokemonsFound = playerMovements.length + 1;

  const AVAILABLE_PATHS = {
    "N": [0, -1],
    'S': [0, 1],
    'E': [1, 0],
    'O': [-1, 0],
  }
  
  const wasPokemonAlreadyCatch = new Map();
  const ashesPosition = [0, 0];
  wasPokemonAlreadyCatch.set(String(ashesPosition), 1);
  
  for (let i = 0; i < playerMovements.length; i++) {
    ashesPosition[0] += AVAILABLE_PATHS[playerMovements[i]][0];
    ashesPosition[1] += AVAILABLE_PATHS[playerMovements[i]][1];

    if (wasPokemonAlreadyCatch.has(String(ashesPosition))) {
      maxPokemonsFound--;
    };
    wasPokemonAlreadyCatch.set(String(ashesPosition), 1);
  }

  console.log(maxPokemonsFound);
  return;
}

