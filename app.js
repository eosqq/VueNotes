const App = {
    data: () => ({
        title: 'Заметки',
        myHolder: 'Введите заметку',
        inputValue: '',
        notes: ['Заметка 1', 'Заметка 2']
    }),

    methods: {
        addNewNote() {
            if (this.inputValue.trim()) {
                this.notes.push(this.inputValue)
                this.inputValue = ''    
            }
        }
    },

    computed: {
        doubleNotes() {
            return this.notes.length * 2
        }
    },

    watch: {
        inputValue(value) {
            if (value.length > 30) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')