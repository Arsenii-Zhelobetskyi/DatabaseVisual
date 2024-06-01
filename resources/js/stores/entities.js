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
                    labelHandles: [
                        { label: "I'm child of 1", handleId: "a" },
                        { label: "Another child", handleId: "b" },
                    ],
                },
            },
            {
                id: "2",
                type: "entity",
                label: "i'm 2 node",
                position: { x: 100, y: 100 },
                data: {
                    labelHandles: [
                        { label: "I'm child of 2", handleId: "c" },
                        { label: "Another second child", handleId: "d" },
                    ],
                },
            },
            {
                id: "3",
                type: "entity",
                label: "i'm 3 node",
                position: { x: 200, y: 250 },
                data: {
                    labelHandles: [
                        { label: "I'm child of 3", handleId: "e" },
                        { label: "Another third child", handleId: "f" },
                    ],
                },
            },
        ],
    }),
});
