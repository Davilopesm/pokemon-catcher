
const ALLOWED_MOVEMENTS = {  N: "N", S: "S", E: "E", O: "O"} ;

const validateMovements = (playerMovements) => {
  if (!playerMovements.length) {
    console.log('Please enter one of the following values: N - E - S - O');
    return;
  }

  /* TODO */
  const hasInvalidMovement = playerMovements.some(movement => {
    if(!Object.values(ALLOWED_MOVEMENTS).includes(movement)) { 
      console.log(`Invalid argument ${movement}. Allowed values are N - E - S - O`);
      return true;
    }

  });
  if(hasInvalidMovement) return false;

  return true;
}

const calculateCaughtPokemons = (playerMovements) => {
  const caughtPokemonsPosition = new Set().add("0-0"); // Keeping track of found pokemons, first pokemon/place is added at start
  let maxPokemonsFound = playerMovements.length + 1;
  let ashePosition = [0, 0];

  for (const movement of playerMovements) {
    let [eastWestPosition, northSouthPosition] = ashePosition;
    switch (movement) {
      case ALLOWED_MOVEMENTS.N:
        northSouthPosition++;
        break;
      case ALLOWED_MOVEMENTS.S:
        northSouthPosition--;
        break;
      case ALLOWED_MOVEMENTS.O:
        eastWestPosition++;
        break;
      case ALLOWED_MOVEMENTS.E:
        eastWestPosition--;
        break;
    }

    const ashesPositionAsString = `${eastWestPosition}-${northSouthPosition}`;
    ashePosition = [eastWestPosition, northSouthPosition];

    if (caughtPokemonsPosition.has(ashesPositionAsString)) { //If Ashe current position was already seen we cant count that as a newly found pokemon
      maxPokemonsFound--;
      continue;
    };
    caughtPokemonsPosition.add(ashesPositionAsString);
  }
  return maxPokemonsFound;
}

export const execute = (processArguments) => {
  const nodeProcessFirstUserInputIndex = 2 // Process starts with 2 entries even if we did not add any
  const playerMovements = (processArguments[nodeProcessFirstUserInputIndex] || "").split("");

  if(!validateMovements(playerMovements)) return;

  console.log(calculateCaughtPokemons(playerMovements));
  return;
}


