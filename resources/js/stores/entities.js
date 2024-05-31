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
                    label: "I'm child of 1 and i'm 3",
                    handleId: "a",
                },
            },
            {
                id: "2",
                type: "entity",
                label: "i'm 2 node",
                position: { x: 0, y: 0 },
                data: {
                    label: "another txt",
                    handleId: "b",
                },
            },
        ],
    }),
});
