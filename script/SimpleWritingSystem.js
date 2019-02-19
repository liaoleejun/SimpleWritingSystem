$(document).ready(
    function () {
        let cites = $("[data-ct]");
        for (let i = 0; i < cites.length; i++) {
            let dataRef = cites[i].getAttribute('data-ct');
            // Add the class name "tooltip", add the attr "data-ref", 因为
            // SimpleTooltip.js是以类名为tooltip, 属性data-ref来选择的
            cites[i].classList.add("tooltip");
            $(cites[i]).attr("data-ref", dataRef);
        }

        let descs = $("[data-dt]");
        for (let i = 0; i < descs.length; i++) {
            let dataRef = descs[i].getAttribute('data-dt');
            let concept = descs[i].innerHTML;
            // Add the class name "tooltip", add the attr "data-ref", 因为
            // SimpleTooltip.js是以类名为tooltip, 属性data-ref来选择的
            descs[i].classList.add("tooltip");
            $(descs[i]).attr("data-ref", dataRef);
        }
    }
);