const request = require("supertest");
const server = require("./server");

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

describe("server", function() {
  test("dummy test for server. does it run?", function() {
    expect(true).toBe(true);
  });
});

describe("get home /", () => {
  it("should return 200", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("should return a json object", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("application/json");
  });
});

describe("test 1 for POST /api/auth/register", function() {
  test("should return a fat 500", function() {
    return request(server)
      .post("/api/auth/register")
      .catch(res => {
        expect(res.status).toBe(500);
      });
  });

  test("should return a fat 500", function() {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "taz",
        password: "acme"
      })
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});

describe("test for POST /api/auth/login", function() {
  test("should return 200 OK", function() {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "chichi",
        password: "tacos"
      })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  test("should return 401 error", function() {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "chichi",
        password: "dummy1"
      })
      .then(res => {
        expect(res.status).toBe(401);
      });
  });
});
