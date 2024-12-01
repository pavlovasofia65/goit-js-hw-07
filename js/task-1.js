const categories = document.querySelectorAll(".item");
    for (const item of categories) {
        const name = item.querySelector("h2"); 
        const elements = item.querySelectorAll("ul li");

        console.log(`Category: ${name.textContent}`);
        console.log(`Elements: ${elements.length}`);
    }
