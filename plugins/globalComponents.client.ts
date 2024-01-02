export const $historyBack = function () {
    eventBus.emit('@historyBack');
};

export default defineNuxtPlugin(() => {})