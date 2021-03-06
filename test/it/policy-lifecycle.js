const expect = require('chai').expect;
const okta = require('../../src');
const getMockGroup = require('./mocks/group');
const getMockOktaSignOnPolicy = require('./mocks/okta-sign-on-policy');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/policy-lifecycle`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
  requestExecutor: new okta.DefaultRequestExecutor()
});

describe('Policy Lifecycle API', () => {
  let group;
  let mockPolicy;
  let policy;
  beforeEach(async () => {
    group = await client.createGroup(getMockGroup());
    mockPolicy = getMockOktaSignOnPolicy();
    mockPolicy.conditions.people.groups.include.push(group.id);
    policy = await client.createPolicy(mockPolicy);
  });
  afterEach(async () => {
    await policy.delete();
    await group.delete();
  });

  it('should activate policy', async () => {
    const response = await policy.activate();
    expect(response.status).to.equal(204);
  });

  it('should deactive policy', async () => {
    const response = await policy.deactivate();
    expect(response.status).to.equal(204);
  });
});
