import { promisify } from "util";
import { exec as nodeExec } from "child_process";
const exec = promisify(nodeExec);

describe("Catch Pokemon - Integration Test", () => {
  beforeAll(async () => {
    await exec("npm link");
  })

  it("Should log error message when input is empty", async () => {
    const { stdout } = await exec("pokemon-catcher ");
    expect(stdout).toEqual(expect.stringContaining("Please enter one of the following values: N - E - S - O"));
  });

  it.each`
    input                  | invalidLetter
    ${"GNSEN"}             | ${"G"}
    ${"NSEOP"}             | ${"P"}
    ${"NSNSNSNSNSQNSNSNS"} | ${"Q"}
    ${"EOEOEOEOKEOENS"}    | ${"K"}
    ${"A"}                 | ${"A"}
    ${"OK"}                | ${"K"}
  `("Should log error message for invalid argument $invalidLetter when input is '$input'", async ({input, invalidLetter})=> {
    const { stdout } = await exec(`pokemon-catcher ${input}`);
    expect(stdout).toEqual(
      expect.stringContaining(`Invalid argument ${invalidLetter}. Allowed values are N - E - S - O`)
    );
  });

  it.each`
    input            | result
    ${"E"}           | ${"2"}
    ${"NESO"}        | ${"4"}
    ${"NSNSNSNSNS"}  | ${"2"}
  `("Should log correct result $result when input is $input", async ({input, result})=> {
    const { stdout } = await exec(`pokemon-catcher ${input}`);
    expect(stdout).toEqual(
      expect.stringContaining(result)
    );
  });

})

