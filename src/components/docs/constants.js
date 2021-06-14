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
        value: { lat: 37.227868, lng: -115.837870 },
        description:
          // "read-this! This will return a Hard-Coded value defined in the 'value' Key. While we're working on Types like 'Date' 'Time' 'Location' etc, please use this if you can't find your required data type in the list of supported types ",
          "NOTE! This will return a HARD-CODED value provided in the 'value' key above.  ",
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
          "NOTE! This will return a HARD-CODED value provided in the 'value' key above.",
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
          "NOTE! This will return a HARD-CODED value provided in the 'value' key above.",
      },
    },
  },
  {
    heading: "Random",
    description:
      "You can pass in an array of values and let the API randomly return one of those elements", 
    code: {
      "random": {
        type: "RANDOM",
        value: ["Value 1","Value 2","Value 3","Value 4"],
        description:
          "Attention! You can pass in an array of values and let the API randomly return one of those",
      },
    },
  },
];

export const UNCHANGED_KEYS = ["length", "showTotalInMeta", "location", "date", "custom"];
