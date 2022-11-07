import type {
  GetAllSpecificationsResponse,
  GetSpecificationResponse,
} from "@/providers/specification/types";
import { API_ENDPOINT } from "@/providers/specification";
import { registerMockRequests } from "..";
import type { IMockRequest } from "../types";

const getRequest: IMockRequest<GetSpecificationResponse> = {
  type: "onGet",
  matcher: `${API_ENDPOINT}/1`,
  response: {
    status: 200,
    data: {
      id: "1",
      templateId: "1",

      attributes: {
        Engine: "V6 3.5L",
        "Interior Materials": "Leather",
        Color: "Black",
        "Wheel Reems": "17 inches",
        "Type of Wheels": "BBS",
        "Air Suspension": "true",
      },
    },
  },
};

const getAllRequest: IMockRequest<GetAllSpecificationsResponse> = {
  type: "onGet",
  matcher: API_ENDPOINT,
  response: {
    status: 200,
    data: {
      specifications: [
        {
          id: "1",
          templateId: "1",

          attributes: {
            Engine: "V6 3.5L",
            "Interior Materials": "Leather",
            Color: "Black",
            "Wheel Reems": "17 inches",
            "Type of Wheels": "BBS",
            "Air Suspension": "true",
          },
        },
      ],
    },
  },
};

registerMockRequests("Specification", [getRequest, getAllRequest]);
