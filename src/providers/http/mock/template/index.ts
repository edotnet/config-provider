import type {
  GetAllTemplatesResponse,
  GetTemplateResponse,
} from "@/providers/template/types";
import type { IMockRequest } from "../types";

const getAllRequest: IMockRequest<GetAllTemplatesResponse> = {
  type: "onGet",
  matcher: `/api/templates`,
  response: {
    status: 200,
    data: {
      templates: [
        {
          id: "1",
          name: "Default",

          attributes: [
            {
              type: "select",
              name: "Engine",
              extra: {
                options: ["V6 3.5L", "V6 5.5L", "V6 6.5L"],
              },
            },
            {
              type: "select",
              name: "Interior Materials",
              extra: {
                options: ["Leather", "Textile", "Other"],
              },
            },
            {
              type: "select",
              name: "Color",
              extra: {
                options: ["Black", "White", "Gray"],
              },
            },
            {
              type: "select",
              name: "Wheel Reems",
              extra: {
                options: ["17 inches", "19 inches", "21 inches"],
              },
            },
            {
              type: "select",
              name: "Type of Wheels",
              extra: {
                options: ["BBS", "ABS", "ESC"],
              },
            },
            {
              type: "checkbox",
              name: "Air Suspension",
            },
          ],
        },
      ],
    },
  },
};

export default [getAllRequest];
