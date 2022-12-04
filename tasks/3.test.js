import assert from "node:assert";
import test from "node:test";
import filterOutages from "./3.js";

const testSite = {
  id: "1",
  name: "testSiteName",
  devices: [
    {
      id: "a",
      name: "testDeviceName",
    },
  ],
};

test("a date before the given value is filtered out", () => {
  const testOutages = [
    {
      id: "a",
      begin: "2021-01-01T00:00:00.000Z",
    },
  ];
  const result = filterOutages(
    testOutages,
    testSite,
    "2022-01-01T00:00:00.000Z"
  );
  assert.equal(result.length, 0);
});

test("an id not included in the devices array is filtered out", () => {
  const testOutages = [
    {
      id: "incorrectID",
      begin: "2022-02-02T00:00:00.000Z",
    },
  ];
  const result = filterOutages(
    testOutages,
    testSite,
    "2022-01-01T00:00:00.000Z"
  );
  assert.equal(result.length, 0);
});
