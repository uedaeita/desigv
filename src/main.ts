import { createApp } from 'vue'
import App from './App.vue'
import ColumnsResizable from './directives/columnsResizable';

const app = createApp(App)

app.directive('columns-resizable', ColumnsResizable)
app.mount('#app')
