$(document).ready(
    function () {
        let cites = $("[data-c]");
        for (let i = 0; i < cites.length; i++) {
            let dataRef = cites[i].getAttribute('data-c');
            // Add the class name "tooltip", add the attr "data-ref", 因为
            // SimpleTooltip.js是以类名为tooltip, 属性data-ref来选择的
            cites[i].classList.add("tooltip", "cite");
            $(cites[i]).attr("href", "#" + dataRef);
        }

        let descs = $("[data-d]");
        for (let i = 0; i < descs.length; i++) {
            let dataRef = descs[i].getAttribute('data-d');
            let concept = descs[i].innerHTML;
            // Add the class name "tooltip", add the attr "data-ref", 因为
            // SimpleTooltip.js是以类名为tooltip, 属性data-ref来选择的
            descs[i].classList.add("tooltip", "description");
            $(descs[i]).attr("href", "#" + dataRef);
        }
    }
);