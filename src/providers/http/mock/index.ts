import type { AxiosInstance } from "axios";
import type { IMockRequest } from "./types";
import templateRequests from "./template";
import specificationRequests from "./specification";
import MockAdapter from "axios-mock-adapter";

const mockedEntities = new Map<string, IMockRequest[]>();

export const registerMockRequests = (
  entity: string,
  mockRequests: IMockRequest[]
) => {
  console.log(1111);

  if (mockedEntities.has(entity)) {
    console.warn(`AXIOS MOCK ADAPTER: Duplice mock for entity - ${entity}.`);
    return;
  }

  mockedEntities.set(entity, mockRequests);
};

export const enableMock = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios);

  mockedEntities.forEach((mockRequests, entity) => {
    mockRequests.forEach((mRequest) => {
      mock[mRequest.type](
        mRequest.matcher,
        mRequest.body,
        mRequest.headers
      ).reply((config) => {
        console.log(
          `AXIOS MOCK ADAPTER: Returning mock response for ${mRequest.matcher}`
        );

        return [mRequest.response.status, mRequest.response];
      });
      console.log(`AXIOS MOCK ADAPTER: ${entity} api mocked!`);
    });
  });
};

registerMockRequests("Template", templateRequests);
registerMockRequests("Specification", specificationRequests);
