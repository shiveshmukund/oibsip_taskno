const res = document.getElementById("res");

function main(dat) {
    let current = res.innerText === "0" ? "" : res.innerText;

    if (dat === "erase") {
        res.innerText = "0";
    }
    else if (dat === "backspace") {
        current = current.slice(0, -1);
        res.innerText = current || "0";
    }
    else if (dat === "enter") {
        try {
            const result = Function("return " + current)();
            res.innerText = result;
        } catch (error) {
            res.innerText = "Error";
        }
    }
    else {
        res.innerText = current + dat;
    }
}

// Optional keyboard support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if ("0123456789+-*/.".includes(key)) {
        main(key);
    } else if (key === "Enter") {
        main("enter");
    } else if (key === "Backspace") {
        main("backspace");
    } else if (key === "Escape") {
        main("erase");
    }
});
