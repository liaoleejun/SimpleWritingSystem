$(document).ready(
    function () {
        /* 1. 把引用进行排序 */
        let cites = $(".cite");
        // citesOrdered 是由class为cite的元素，的href值，构成的无重复数组（按照在HTML文档中出现的顺序）
        let citesRefOrdered = [];
        for (let i = 0; i < cites.length; i++) {
            let citeRef = cites[i].getAttribute('href');
            // array push only if not exist
            citesRefOrdered.indexOf(citeRef) === -1 ? citesRefOrdered.push(citeRef) : console.log(citeRef + " already exists");
        }

        /* 2. 把 HTML 文档中的引用, 按照上一步生成的数组的顺序给标上号 */
        for (let i = 0; i < cites.length; i++) {
            let citeRef = cites[i].getAttribute('href');
            // 给引用标上号（注意数组是从0开始下标，所以加1）
            let num = citesRefOrdered.indexOf(citeRef) + 1;
            cites[i].innerHTML = '[' + num + ']';
        }

        /* 3. 生成排好序的引用列表，附在最后 */
        // 使用cite_list_outside风格, 当大于999时, 就会溢出边界。所以设定了不同的cite list风格。（可以通过设置citesOrdered.length < 11这样来测试看效果）
        // 还可以直接用js生成, 而不用css的list来实现 TODO
        if (citesRefOrdered.length > 0) {
            if (citesRefOrdered.length < 999) {
                $(document.body).append("<div class='list_outside'><h2>References</h2><ol id='cites-append'></ol></div>");
            } else {
                $(document.body).append("<div class='list_inside'><h2>References</h2><ol id='cites-append'></ol></div>");
            }
            for (let i = 0; i < citesRefOrdered.length; i++) {
                let id = citesRefOrdered[i].substring(1);
                let item = document.createElement('li');
                // todo: Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
                item.appendChild(document.getElementById(id));
                document.getElementById("cites-append").appendChild(item);
            }
        }
    }
);
