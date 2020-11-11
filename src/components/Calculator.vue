<template>
    <div class="flex w-full">
        <div class="m-auto">
            <div class="text-3xl text-right mt-10 mb-2 w-32 h-16 overflow-x-scroll" style="direction:rtl">
                {{ currentNumber }}
            </div>
            <div class="h-6">
                <small v-if="selectedOperation">{{ previousNumber }} {{ selectedOperation}} {{ currentNumber }}</small>
            </div>
            <div class="grid grid-cols-4 gap-1">
                <button @click="pressed(1)" class="p-2 w-10 h-10 border rounded shadow">1</button>
                <button @click="pressed(2)" class="p-2 w-10 h-10 border rounded shadow">2</button>
                <button @click="pressed(3)" class="p-2 w-10 h-10 border rounded shadow">3</button>
                <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded shadow">+</button>
                <button @click="pressed(4)" class="p-2 w-10 h-10 border rounded shadow">4</button>
                <button @click="pressed(5)" class="p-2 w-10 h-10 border rounded shadow">5</button>
                <button @click="pressed(6)" class="p-2 w-10 h-10 border rounded shadow">6</button>
                <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded shadow">-</button>
                <button @click="pressed(7)" class="p-2 w-10 h-10 border rounded shadow">7</button>
                <button @click="pressed(8)" class="p-2 w-10 h-10 border rounded shadow">8</button>
                <button @click="pressed(9)" class="p-2 w-10 h-10 border rounded shadow">9</button>
                <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded shadow">*</button>
                <button @click="pressed('AC')" class="p-2 w-10 h-10 border rounded shadow">AC</button>
                <button @click="pressed(0)" class="p-2 w-10 h-10 border rounded shadow">0</button>
                <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
                <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded shadow">/</button>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
export default {
    setup() {        
        const operations = ['+', '-', '*', '/'];        
        const currentNumber = ref('');
        const previousNumber = ref('');
        const selectedOperation = ref('');
        const equalsWasPressed = ref(false);

        function appendNumber(value) {
            if (equalsWasPressed.value) {
                equalsWasPressed.value = false;
                currentNumber.value = '';
            }            
            currentNumber.value = currentNumber.value + value;
        }

        function calculate() {
            equalsWasPressed.value = true;
            if (selectedOperation.value === '+')
                currentNumber.value = parseInt(previousNumber.value) + parseInt(currentNumber.value);
            if (selectedOperation.value === '*')
                currentNumber.value = previousNumber.value * currentNumber.value;
            if (selectedOperation.value === '-')
                currentNumber.value = previousNumber.value - currentNumber.value;
            if (selectedOperation.value === '/')
                currentNumber.value = previousNumber.value / currentNumber.value;
            
            selectedOperation.value = '';
        }
        
        function applyOperation(value) {
            calculate();
            equalsWasPressed.value = false;         
            previousNumber.value = currentNumber.value;
            clear();            
            selectedOperation.value = value;
        }

        function clear() {
            currentNumber.value = '';
            selectedOperation.value = '';            
        }

        function pressed(value) {            
            if (value === '=' || value === 'Enter') calculate();
            else if (value === 'AC' || value === 'Backspace') clear();
            else if (operations.includes(value)) applyOperation(value);            
            else if (!isNaN(parseInt(value)))
                appendNumber(value);                        
        }

        const handleKeyDown = (e) => pressed(e.key);

        onMounted(() => {
            window.addEventListener('keydown', (e) => handleKeyDown(e));
        });

        onUnmounted(() => {
            window.removeEventListener('keydown', (e) => handleKeyDown(e));
        });

        return { currentNumber, pressed, selectedOperation, previousNumber };
    }
}
</script>

<style>

</style>