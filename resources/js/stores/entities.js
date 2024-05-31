import { defineStore } from "pinia";

export const useEntitiesStore = defineStore("entitiesStore", {
    state: () => ({
        entities: [
            {
                id: "1",
                type: "entity",
                label: "I'm 1",
                position: { x: 50, y: 50 },
                data: {
                    id: "3",
                    type: "child",
                    label: "I'm child of 1 and i'm 3",

                    draggable: false,
                },
            },
            {
                id: "3",
                type: "child",
                label: "I'm child of 1 and i'm 3",
                position: { x: 0, y: 0 },
                draggable: false,
                parentNode: "1",
                hidden: true,
            },
            {
                id: "2",
                type: "entity",
                label: "I'm 2",
                position: { x: 150, y: 150 },
            },

            { id: "e1-3", source: "3", target: "2" },
        ],
    }),
});
