const app = require("../../app");
const request = require("supertest");
const mongoose = require("mongoose");

describe("CRUD for posts", () => {
  let connection;
  beforeAll(async () => {
    connection = await mongoose.connect(
      "mongodb+srv://janvier:testing123@cluster0.pnymtzl.mongodb.net/?retryWrites=true&w=majority",
      () => console.log("Connected to mongodb")
    );
  });
  describe("Creating a post", () => {
    it("Should return 201 if post created successfully", async () => {
      const post = {
        title: "Title for testing",
        description: "Description of the post in testing",
      };
      const res = await request(app).post("/posts").send(post);
      expect(res.status).toBe(201);
    });
  });
});
