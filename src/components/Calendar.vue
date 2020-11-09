<template>
    <div>        
        <div class="text-center text-lg font-bold my-2">Vue Calendar</div>
        <div class="font-bold flex justify-between mx-16">
            <div>
                {{ currentMonthToString }}
            </div>
            <div>
                {{ currentYear }}
            </div>
        </div>
        <section class="flex my-2">
            <p class="m-2 text-center" style="width: 14.28%" v-for="day in days" :key="day">{{ day }}</p>
        </section>
        <section class="flex flex-wrap">
            <p class="text-center" style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
            <p class="text-center" :class="currentDate(num) ? 'text-red-600 font-semibold' : ''" style="width: 14.28%" v-for="num in daysInMonth(currentMonth, currentYear)" :key="num">{{ num }}</p>
        </section>
        <section class="flex justify-between my-4">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {            
            currentMonth: new Date().getMonth() + 1,            
            currentYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        }
    },
    computed: {
        currentMonthToString() {
            return new Date(this.currentYear, this.currentMonth-1).toLocaleString("default", { month: "long" });
        }
    },
    methods: {
        daysInMonth(month, year) {
            return new Date(year, month, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonth-1, 1).getDay();
        },
        prev() {
            if (this.currentMonth === 1) {
                this.currentMonth = 12;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
        },
        next() {
            if (this.currentMonth === 12) {
                this.currentMonth = 1;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
        },
        currentDate(num) {
            const calendarFullDate = new Date(this.currentYear, this.currentMonth-1, num).toDateString();
            const currentDate = new Date().toDateString();
            return calendarFullDate === currentDate;
        },
    }
}
</script>

<style>

</style>