# Pokemon Catcher - Documentacao em Portugues

Uma simples aplicacao CLI para "pegar pokemons"

Possiveis valores de entrada sao `N - S - E - O`  onde:
```
N = Norte; S=Sul, E=Este, O=Oeste
```
Dado uma entrada contendo X valores, dentro dos possiveis, nosso personagem se move em um grid 2D e em qualquer uma das direcoes. Em cada no/campo do grid temos um pokemon (inclusive no primeiro campo).
Quantos pokemons conseguimos pegar se nos movermos nas direcoes dadas como entrada para a CLI?
`Nota: Apenas a primeira vez que visitamos cada campo encontramos um pokemon`
## Instalando
Tenha certeza que tem instalado 
`Node.JS` version  `14.16.0`
`NPM` version  `6.14.11`

## Como rodar
Em qualquer terminal va ate a pasta `pokemon-code-challenge`

Instale as node dependencies usando o comando
`npm i`

Crie o link entre o modulo `pokemon-catcher` e nosso node modules global para que possamos usar o comando `pokemon-catcher` em nosso terminal
`npm link`

Agora ja devemos conseguir usar o comando `pokemon-catcher` no nosso terminal

## Como usar
Alguns exemplos de como usar em um terminal
`pokemon-catcher NESO` que vai resultar em uma nova linha no terminal com o resultado de pokemons capturados, neste caso = `4`
`pokemon-catcher NSNSNSNSNS` que vai resultar em uma nova linha no terminal com o resultado de pokemons capturados, neste caso = `2`
`pokemon-catcher SSSSSSS` que vai resultar em uma nova linha no terminal com o resultado de pokemons capturados, neste caso = `8`
`pokemon-catcher E` que vai resultar em uma nova linha no terminal com o resultado de pokemons capturados, neste caso = `2`
`pokemon-catcher SSSSSSSOOOOOOONNNNEEEEEEEENNNO` que vai resultar em uma nova linha no terminal com o resultado de pokemons capturados, neste caso = `29`

## Tests
Como esse e um projeto simples nos so contamos com integration tests. Estes testes realmente chamam a CLI que temos instalada em nosso computador
#### Rodando os tests
Va ate a pasta `pokemon-code-challenge` em qualquer terminal e rode:
`npm test`

# Pokemon Catcher - Documentation in English

Simple pokemon catcher CLI application.

Possible entry values are  `N - S - E - O`  where:
```
N = Norte; S=Sul, E=Este, O=Oeste
```
Given the entry values our character can move in a 2D grid in any of the directions. In every field/node of the grid there is a pokemon (first field included). How many pokemons can we catch if we move in the directions given as entry values.
`Note: Only the first time we visit a field/node we can find a pokemon`


## Instalation
Make sure you have installed

`Node.JS` version  `14.16.0`
`NPM` version  `6.14.11`

## How to run
Navigate to `pokemon-code-challenge` folder on any terminal

Install node dependencies
`npm i`

Create the link between `pokemon-catcher` module and global node modules so that we are able to use the `pokemon-catcher` command on our terminal
`npm link`

Now we should already be able to use the command `calculate` on our terminal

## How to use

Some examples on how to use it on a terminal
`pokemon-catcher NESO` which will result in a next line on the terminal with `4`
`pokemon-catcher NSNSNSNSNS` which will result in a next line on the terminal with `2`
`pokemon-catcher SSSSSSS` which will result in a next line on the terminal with `8`
`pokemon-catcher E` which will result in a next line on the terminal with `2`
`pokemon-catcher SSSSSSSOOOOOOONNNNEEEEEEEENNNO` which will result in a next line on the terminal with `29`


## Tests
Since this is a pretty straightforward service we only have integration tests. These tests actually call the installed CLI on the computer,

#### Running tests
Navigate to `pokemon-code-challenge` folder on any terminal and run
`npm test`