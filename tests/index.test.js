const app = require("../app");
const request = require("supertest");

describe("Home route", () => {
  it("Should return 200 if home found", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "Welcome to my apis");
  });
});
