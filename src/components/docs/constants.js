export const CODE_SAMPLES = [
  {
    heading: "String",
    description: "THIS IS HOW A SAMPLE STRING DEFINITION WOULD LOOK LIKE",
    code: {
      my_string: { type: "STRING" },
    },
  },
  {
    heading: "Integer",
    description: "THIS IS HOW A SAMPLE INTEGER DEFINITION WOULD LOOK LIKE",
    code: {
      my_integer: { type: "INTEGER" },
    },
  },
  {
    heading: "Decimal",
    description: "THIS IS HOW A SAMPLE INTEGER DEFINITION WOULD LOOK LIKE",
    code: {
      my_dec: { type: "DECIMAL" },
    },
  },
  {
    heading: "Paragraph",
    description: "THIS IS HOW A SAMPLE INTEGER DEFINITION WOULD LOOK LIKE",
    code: {
      my_dec: {
        type: "Text",
        min: 20,
        max: 40,
      },
    },
  },
  {
    heading: "Object",
    description: "THIS IS HOW A SAMPLE INTEGER DEFINITION WOULD LOOK LIKE",
    code: {
      my_obj: {
        type: "Object",
        properties: {
          g: {
            type: "Text",
          },
        },
      },
    },
  },
  {
    heading: "Array",
    description: "THIS IS HOW A SAMPLE INTEGER DEFINITION WOULD LOOK LIKE",
    code: {
      my_arr: {
        type: "Array",
        of: "integer",
        length: 5,
      },
    },
  },
  {
    heading: "Object Array",
    description: "THIS IS HOW A SAMPLE INTEGER DEFINITION WOULD LOOK LIKE",
    code: {
      aoo: {
        type: "Object",
        properties: {
          g: {
            type: "Text",
          },
          length: 5,
        },
      },
    },
  },
];

export const UNCHANGED_JSON = [
  {
    heading: "Payload Length",
    description:
      "You can define how many data objects you need your API to Return by defining a -length- attribute ",
    code: {
      length: 10,
    },
  },
  {
    heading: "Total In Meta?",
    description:
      "You can define how many data objects you need your API to Return by defining a -length- attribute ",
    code: {
      showTotalInMeta: 20,
    },
  },
  {
    heading: "Custom [Location]",
    description:
      "You can define how many data objects you need your API to Return by defining a -length- attribute ",
    code: {
      location: {
        type: "CUSTOM",
        value: { lat: 67.944444, lng: 34.66666666 },
        description:
          "read-this! This will return a Hard-Coded value defined in the 'value' Key. While we're working on Types like 'Date' 'Time' 'Location' etc, please use this if you can't find your required data type in the list of supported types ",
      },
    },
  },
  {
    heading: "Custom [Date/Time]",
    description:
      "You can define how many data objects you need your API to Return by defining a -length- attribute ",
    code: {
      date: {
        type: "CUSTOM",
        value: "Sunday, 30 June 2021",
        description:
          "read-this!! This will return a Hard-Coded value defined in the 'value' Key. While we're working on Types like 'Date' 'Time' 'Location' etc, please use this if you can't find your required data type in the list of supported types ",
      },
    },
  },
  {
    heading: "Custom [Any]",
    description:
      "You can define how many data objects you need your API to Return by defining a -length- attribute ",
    code: {
      "custom": {
        type: "CUSTOM",
        value: "My Custom Value",
        description:
          "read-this!! This will return a Hard-Coded value defined in the 'value' Key. While we're working on Types like 'Date' 'Time' 'Location' etc, please use this if you can't find your required data type in the list of supported types ",
      },
    },
  },
];

export const UNCHANGED_KEYS = ["length", "showTotalInMeta", "location", "date", "custom"];
