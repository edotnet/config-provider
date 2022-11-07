import type {
  GetAllSpecificationsResponse,
  GetSpecificationResponse,
} from "@/providers/specification/types";
import type { IMockRequest } from "../types";

const getRequest: IMockRequest<GetSpecificationResponse> = {
  type: "onGet",
  matcher: `/api/specifications/1`,
  response: {
    status: 200,
    data: {
      id: "1",
      templateId: "1",
      name: "Sport",

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
  matcher: `/api/specifications`,
  response: {
    status: 200,
    data: {
      specifications: [
        {
          id: "1",
          templateId: "1",
          name: "Sport",

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

export default [getRequest, getAllRequest];
