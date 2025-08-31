const request = require('supertest');
const app = require('../app');
const mongoose = require("mongoose");

describe('GET /health', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "OK" });
  });
});

describe("GET /projects?skill=", () => {
  it("should return JSON projects array for CI tests", async () => {
    const res = await request(app)
      .get("/projects?skill=Python")
      .set("Accept", "application/json"); // important!
    expect(res.statusCode).toBe(200);
    expect(res.body.projects).toBeInstanceOf(Array);
  });
});

describe("GET /skills/top", () => {
  it("should return an array of top skills", async () => {
    const res = await request(app)
      .get("/skills/top")
      .set("Accept", "application/json"); // important!
    expect(res.statusCode).toBe(200);
    expect(res.body.topSkills).toBeInstanceOf(Array);
    expect(res.body.topSkills.length).toBeGreaterThan(0);
  });
});


afterAll(async () => {
  await mongoose.connection.close(); // close DB connection
});
