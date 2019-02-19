$(document).ready(
    function () {
        /* 1. 引用排序: 按照引用在 HTML 文档中出现顺序, 把引用的 data-ref 生成无重复值
              的数组 citesOrdered */
        let cites = $("[data-ct]");
        // citesOrdered 是由 data-ref 构成的无重复数组，按照在HTML文档中出现的顺序
        let citesOrdered = [];
        for (let i = 0; i < cites.length; i++) {
            let dataRef = cites[i].getAttribute('data-ct');
            // array push only if not exist
            citesOrdered.indexOf(dataRef) === -1 ? citesOrdered.push(dataRef) :
                console.log(dataRef + " already exists");
        }

        /* 2. 把 HTML 文档中的引用, 按照上一步生成的数组的顺序给标上号*/
        for (let i = 0; i < cites.length; i++) {
            let dataRef = cites[i].getAttribute('data-ct');
            // 给引用标上号（注意数组是从0开始下标，所以加1）
            let num = citesOrdered.indexOf(dataRef) + 1;
            cites[i].innerHTML = '<a>[' + num + ']</a>';
            // 引用设置锚点
            cites[i].firstChild.setAttribute('href', '#' + dataRef);
        }

        /* 3. 生成排好序的 Cite list */
        // 使用cite_list_outside风格, 当大于999时, 就会溢出边界。所以设定了不同的cite list风格。（可以通过设置citesOrdered.length < 11这样来测试看效果）
        // 还可以直接用js生成, 而不用css的list来实现
        if (citesOrdered.length < 999) {
            $(document.body).append("<div class='cite_list_outside'><h2>References</h2><ol id='cites'></ol></div>");
        } else {
            $(document.body).append("<div class='cite_list_inside'><h2>References</h2><ol id='cites'></ol></div>");
        }
        for (let i = 0; i < citesOrdered.length; i++) {
            let id = citesOrdered[i];
            let ttt = document.createElement('li');
            // todo: Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
            ttt.appendChild(document.getElementById(id));
            document.getElementById("cites").appendChild(ttt);
        }
    }
);
