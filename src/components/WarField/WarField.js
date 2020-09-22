import React, { useEffect, useState } from "react";
import FieldRectangle from "../FieldRectangle";
import WarFieldRowStyled from "./styled/WarFieldRowStyled";

const exampleWarFieldArray = [
  [
    { fieldPartId: 1, fieldPartLabel: "А1", hasShip: false, hasShooted: false },
    { fieldPartId: 2, fieldPartLabel: "А2", hasShip: false, hasShooted: false },
    { fieldPartId: 3, fieldPartLabel: "А3", hasShip: false, hasShooted: false },
    { fieldPartId: 4, fieldPartLabel: "А4", hasShip: false, hasShooted: false },
    { fieldPartId: 5, fieldPartLabel: "А5", hasShip: false, hasShooted: false },
    { fieldPartId: 6, fieldPartLabel: "А6", hasShip: false, hasShooted: false },
    { fieldPartId: 7, fieldPartLabel: "А7", hasShip: false, hasShooted: false },
    { fieldPartId: 8, fieldPartLabel: "А8", hasShip: false, hasShooted: false },
    { fieldPartId: 9, fieldPartLabel: "А9", hasShip: false, hasShooted: false },
    {
      fieldPartId: 10,
      fieldPartLabel: "А10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 11,
      fieldPartLabel: "Б1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 12,
      fieldPartLabel: "Б2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 13,
      fieldPartLabel: "Б3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 14,
      fieldPartLabel: "Б4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 15,
      fieldPartLabel: "Б5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 16,
      fieldPartLabel: "Б6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 17,
      fieldPartLabel: "Б7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 18,
      fieldPartLabel: "Б8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 19,
      fieldPartLabel: "Б9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 20,
      fieldPartLabel: "Б10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 21,
      fieldPartLabel: "В1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 22,
      fieldPartLabel: "В2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 23,
      fieldPartLabel: "В3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 24,
      fieldPartLabel: "В4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 25,
      fieldPartLabel: "В5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 26,
      fieldPartLabel: "В6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 27,
      fieldPartLabel: "В7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 28,
      fieldPartLabel: "В8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 29,
      fieldPartLabel: "В9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 30,
      fieldPartLabel: "В10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 31,
      fieldPartLabel: "Г1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 32,
      fieldPartLabel: "Г2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 33,
      fieldPartLabel: "Г3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 34,
      fieldPartLabel: "Г4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 35,
      fieldPartLabel: "Г5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 36,
      fieldPartLabel: "Г6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 37,
      fieldPartLabel: "Г7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 38,
      fieldPartLabel: "Г8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 39,
      fieldPartLabel: "Г9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 40,
      fieldPartLabel: "Г10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 41,
      fieldPartLabel: "Д1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 42,
      fieldPartLabel: "Д2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 43,
      fieldPartLabel: "Д3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 44,
      fieldPartLabel: "Д4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 45,
      fieldPartLabel: "Д5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 46,
      fieldPartLabel: "Д6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 47,
      fieldPartLabel: "Д7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 48,
      fieldPartLabel: "Д8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 49,
      fieldPartLabel: "Д9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 50,
      fieldPartLabel: "Д10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 51,
      fieldPartLabel: "Е1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 52,
      fieldPartLabel: "Е2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 53,
      fieldPartLabel: "Е3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 54,
      fieldPartLabel: "Е4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 55,
      fieldPartLabel: "Е5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 56,
      fieldPartLabel: "Е6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 57,
      fieldPartLabel: "Е7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 58,
      fieldPartLabel: "Е8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 59,
      fieldPartLabel: "Е9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 60,
      fieldPartLabel: "Е10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 61,
      fieldPartLabel: "Ж1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 62,
      fieldPartLabel: "Ж2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 63,
      fieldPartLabel: "Ж3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 64,
      fieldPartLabel: "Ж4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 65,
      fieldPartLabel: "Ж5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 66,
      fieldPartLabel: "Ж6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 67,
      fieldPartLabel: "Ж7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 68,
      fieldPartLabel: "Ж8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 69,
      fieldPartLabel: "Ж9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 70,
      fieldPartLabel: "Ж10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 71,
      fieldPartLabel: "З1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 72,
      fieldPartLabel: "З2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 73,
      fieldPartLabel: "З3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 74,
      fieldPartLabel: "З4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 75,
      fieldPartLabel: "З5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 76,
      fieldPartLabel: "З6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 77,
      fieldPartLabel: "З7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 78,
      fieldPartLabel: "З8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 79,
      fieldPartLabel: "З9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 80,
      fieldPartLabel: "З10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 81,
      fieldPartLabel: "И1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 82,
      fieldPartLabel: "И2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 83,
      fieldPartLabel: "И3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 84,
      fieldPartLabel: "И4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 85,
      fieldPartLabel: "И5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 86,
      fieldPartLabel: "И6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 87,
      fieldPartLabel: "И7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 88,
      fieldPartLabel: "И8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 89,
      fieldPartLabel: "И9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 90,
      fieldPartLabel: "И10",
      hasShip: false,
      hasShooted: false,
    },
  ],
  [
    {
      fieldPartId: 91,
      fieldPartLabel: "К1",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 92,
      fieldPartLabel: "К2",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 93,
      fieldPartLabel: "К3",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 94,
      fieldPartLabel: "К4",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 95,
      fieldPartLabel: "К5",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 96,
      fieldPartLabel: "К6",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 97,
      fieldPartLabel: "К7",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 98,
      fieldPartLabel: "К8",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 99,
      fieldPartLabel: "К9",
      hasShip: false,
      hasShooted: false,
    },
    {
      fieldPartId: 100,
      fieldPartLabel: "К10",
      hasShip: false,
      hasShooted: false,
    },
  ],
];

/**
 * Field, where game is held. On page exist two field players and opponents
 */
const WarField = () => {
  const [fields, setFields] = useState([]);
  // const [isMyField, setIsMyField] = useState(null);

  useEffect(() => {
    // TODO: Get data from redux store
    setFields(exampleWarFieldArray);
  }, []);

  const onShootHandler = (fieldId) => {
    console.log("clicked");
    // Copy state fields array
    const copyFields = [...fields];

    // Find object by it ID key:
    // In each nested array find index of element that have fieldId
    copyFields.forEach((row, index) => {
      const tempArray = [...row];
      // Element index in array:
      const elIndex = tempArray.findIndex((el) => el.fieldPartId === fieldId);
      // Object, that need to edit:
      const elObject = tempArray.find((el) => el.fieldPartId === fieldId);

      // If object in array found:
      if (elObject) {
        elObject.hasShooted = !elObject.hasShooted;
        // Replace element in copyFields array with new elObject element:
        tempArray.splice(elIndex, 1, { ...elObject });
        // Replace in parent array all child array:
        copyFields.splice(index, 1, tempArray);
        // Set edited array as new state:
        setFields(copyFields);
      }
    });
  };

  return (
    <div>
      {fields.length
        ? fields.map((rowArray, index) => {
            console.log(rowArray);
            return (
              <WarFieldRowStyled key={index}>
                {rowArray.map((field) => (
                  <FieldRectangle
                    key={field.fieldPartId}
                    hasShip={field.hasShip}
                    hasShooted={field.hasShooted}
                    onShootHandler={() => onShootHandler(field.fieldPartId)}
                  />
                ))}
              </WarFieldRowStyled>
            );
          })
        : null}
    </div>
  );
};

export default WarField;
