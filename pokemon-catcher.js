

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

  const caughtPokemonsPosition = new Set().add("0-0"); // Keeping track of found pokemons, first pokemon is always found and captured
  let maxPokemonsFound = playerMovements.length + 1;
  let ashesPosition = [0, 0];

  for(const movement of playerMovements) {
    let [eastWestPosition, northSouthPosition] = ashesPosition;
    switch(movement) {
      case 'N':
        northSouthPosition++;
        break;
      case 'S':
        northSouthPosition--;
        break;
      case 'O':
        eastWestPosition++;
        break;
      case 'E':
        eastWestPosition--;
        break;
    }

    const ashesNewPosition = `${eastWestPosition}-${northSouthPosition}`;
    ashesPosition = [ eastWestPosition, northSouthPosition ];

    if (caughtPokemonsPosition.has(ashesNewPosition)) { //If Ashe current position was already seen we cant count that as a newly found pokemon
      maxPokemonsFound--;
      continue;
    };
    caughtPokemonsPosition.add(ashesNewPosition);
  }

  console.log(maxPokemonsFound);
  return;
}

