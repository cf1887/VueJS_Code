export default {
    /**
     * Directive-Hook welcher zum entsprechenden Zeitpunkt ausgeführt wird (hier bei erfolgreichem Mounting der Component)
     * @param {*} element   (IMMER) das Html-Element, welches diese Directive beinhaltet.
     * @param {*} binding   Zusätzliche Argumente wie (OPTIONAL) manuell hinzugefügte Parameter.
     */
    mounted(element, binding) {
        // console.log(binding);
        if ('color' in binding.value) {
            element.addEventListener("focus", function() {
                this.style.borderColor = binding.value.color;
                this.style.borderWith = "4px";
            });
            element.addEventListener("focusout", function () {
                this.style.borderColor = "";
                this.style.borderWith = "1px";
            });
        }
        element.focus();
    }
}