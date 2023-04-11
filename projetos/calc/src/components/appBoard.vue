<script setup>
import AppNumber from './appNumber.vue';
import AppOperator from './appOperator.vue';
</script>

<template>
    <div class="grid grid-cols-4 gap-4 w-full my-4">
        <AppOperator operator="AC" class="col-span-2"></AppOperator>
        <AppOperator operator="C"></AppOperator>
        <AppOperator operator="*"></AppOperator>

        <AppNumber number="7" />
        <AppNumber number="8" />
        <AppNumber number="9" />
        <AppOperator operator="/"></AppOperator>

        <AppNumber number="4" />
        <AppNumber number="5" />
        <AppNumber number="6" />
        <AppOperator operator="-"></AppOperator>

        <AppNumber number="1" />
        <AppNumber number="2" />
        <AppNumber number="3" />
        <AppOperator operator="+"></AppOperator>

        <AppNumber number="0" class="col-span-2" />
        <AppNumber number="," />
        <AppOperator operator="="></AppOperator>
    </div>
</template>
