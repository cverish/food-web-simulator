import { SUN, ANIMAL, PLANT } from "../constants/organismTypes";

export const dataJsonSchema = {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "http://example.com/example.json",
  type: "array",
  title: "Root schema for food web relationships.",
  description:
    "The root schema comprises the entire JSON document for food web relationships.",
  default: [],
  examples: [
    [
      {
        name: "foxes",
        prey: ["rabbits", "mice", "insectivorousBirds"],
        value: "foxes",
        type: "animal",
      },
      {
        name: "plants",
        prey: [],
        value: "plants",
        type: "plant",
      },
    ],
  ],
  additionalItems: true,
  items: {
    $id: "#/organisms",
    anyOf: [
      {
        $id: "#/organisms/object",
        type: "object",
        title: "Organism object",
        description: "The object for a single organism in the food web.",
        default: {},
        examples: [
          {
            name: "foxes",
            prey: ["rabbits", "mice", "insectivorousBirds"],
            value: "foxes",
            type: "animal",
          },
        ],
        required: ["name", "prey", "value", "type"],
        properties: {
          name: {
            $id: "#/organisms/object/properties/name",
            type: "string",
            title: "The name schema",
            description: "The formatted name for the organism.",
            default: "",
            examples: ["foxes"],
          },
          prey: {
            $id: "#/organisms/object/properties/prey",
            type: "array",
            title: "The prey schema",
            description: "An array of this organism's prey.",
            default: [],
            examples: [["rabbits", "mice"]],
            additionalItems: true,
            items: {
              $id: "#/organisms/object/properties/prey/items",
              anyOf: [
                {
                  $id: "#/organisms/object/properties/prey/items/preyValue",
                  type: "string",
                  title: "A prey value.",
                  description: "A string representation of the prey value.",
                  default: "",
                  examples: ["rabbits", "mice"],
                },
              ],
            },
          },
          value: {
            $id: "#/organisms/object/properties/value",
            type: "string",
            title: "The value schema",
            description:
              "A single-word variable representation of the organism. Words can be separated by dashes (-) or written in camelCase.",
            default: "",
            examples: ["foxes"],
          },
          type: {
            $id: "#/organisms/object/properties/type",
            type: "string",
            title: "The type schema",
            description: "The type of organism. Animal, plant, or sun.",
            default: "",
            enum: [ANIMAL, PLANT, SUN],
            examples: [ANIMAL],
          },
        },
        additionalProperties: true,
      },
    ],
  },
};
