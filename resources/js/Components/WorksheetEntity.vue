<template>
    <div>
        <h2 class="text-xl font-bold mb-4">Список робочих аркушів</h2>
        <ul>
            <li v-for="worksheet in worksheets" :key="worksheet.id" class="mb-6 border border-gray-300 rounded-lg p-4 bg-white shadow-lg shadow hover:shadow-inner">
                <h3 class="text-xl font-semibold mb-2">{{ worksheet.worksheet_name }}</h3>
                <p class="mt-2">Дані таблиці:</p>
                <pre class="whitespace-pre-wrap">{{ worksheet.table_data }}</pre>
            </li>
        </ul>
        <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            worksheets: [],
            error: null
        };
    },
    mounted() {
        this.fetchWorksheets();
    },
    methods: {
        async fetchWorksheets() {
            try {
                const response = await fetch('/worksheets/all');
                if (!response.ok) {
                    throw new Error('Помилка при отриманні даних');
                }
                this.worksheets = await response.json();
            } catch (error) {
                this.error = 'Не вдалося отримати дані: ' + error.message;
            }
        }
    }
};
</script>
