
let mode = 0;



function bakery() {
    const theme = document.getElementById("welcome-text");
    const theme2 = document.getElementById("site-header");
    const border = document.getElementById("menu-box");
    const foot = document.getElementById("site-footer");
    const text = document.getElementById("page-title");
    const regular = document.getElementById("theme-toggle");
  
    if (mode === 0) {
        mode = 1;
        theme.style.color = "orange";
        theme2.style.backgroundColor = "green";
        border.style.border = "dashed";
        border.style.borderColor = "red";
        border.style.backgroundColor = "orange";
        foot.style.backgroundColor = "brown";
        theme.textContent = "Come on by this week for a buy 2 get 1 turkey deal! We also sell: pies, cookies and MORE!";
        text.textContent = "🦃🦃Sunny Side Bakery🦃🦃";
        regular.textContent = "Regular Mode";
    } else {
        mode = 0;
        theme.style.color = "";
        theme2.style.backgroundColor = "";
        border.style.border = "";
        border.style.borderColor = "";
        border.style.backgroundColor = "";
        foot.style.backgroundColor = "";
        theme.textContent = "Fresh bread, cookies, and pies baked every morning. Stop by and say hi!";
        text.textContent = "Sunny Side Bakery";
        regular.textContent = "Holiday Mode";
    }
}

