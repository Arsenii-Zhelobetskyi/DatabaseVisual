<template>
    <div>
        <button @click="showModal = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Додати запис</button>

        <transition enter-active-class="transition ease-out duration-300" leave-active-class="transition ease-in duration-200" enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" leave-class="opacity-100 translate-y-0 sm:scale-100">
            <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <transition enter-active-class="ease-out duration-300" leave-active-class="ease-in duration-200" enter-class="opacity-0" leave-class="opacity-100">
                        <div class="fixed inset-0 transition-opacity" aria-hidden="true" @click="showModal = false">
                            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                    </transition>

                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <transition enter-active-class="ease-out duration-300" leave-active-class="ease-in duration-200" enter-class="opacity-100 translate-y-0 sm:scale-100" leave-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h2 class="text-2xl font-bold mb-4">Додати новий запис</h2>
                                <form @submit.prevent="submitForm" class="max-w-md">
                                    <div class="mb-4">
                                        <label for="worksheet_name" class="block">Назва:</label>
                                        <input type="text" v-model="form.worksheet_name" required class="w-full px-3 py-2 border rounded-md">
                                    </div>
                                    <div class="mb-4">
                                        <label for="user_id" class="block">ID користувача:</label>
                                        <input type="number" v-model="form.user_id" required class="w-full px-3 py-2 border rounded-md">
                                    </div>
                                    <div class="mb-4">
                                        <label for="table_data" class="block">Дані таблиці (JSON):</label>
                                        <textarea v-model="form.table_data" class="w-full px-3 py-2 border rounded-md"></textarea>
                                    </div>
                                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Додати</button>
                                </form>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            form: {
                worksheet_name: '',
                user_id: '',
                table_data: ''
            },
            error: null,
            success: null
        };
    },
    methods: {
        async submitForm() {
            this.error = null;
            this.success = null;

            const requestData = {
                worksheet_name: this.form.worksheet_name,
                user_id: this.form.user_id,
                table_data: this.form.table_data ? JSON.parse(this.form.table_data) : null
            };

            try {
                const response = await fetch('/worksheets/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    body: JSON.stringify(requestData)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    this.error = errorData.message || 'Щось пішло не так';
                    return;
                }

                const responseData = await response.json();
                this.success = 'Запис успішно додано!';
                this.form.worksheet_name = '';
                this.form.user_id = '';
                this.form.table_data = '';
            } catch (error) {
                this.error = 'Не вдалося відправити дані: ' + error.message;
            }
        }
    }
};
</script>


