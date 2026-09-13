// ClientFlow CRM - Interactive Dashboard

document.addEventListener("DOMContentLoaded", () => {

    // Sidebar navigation
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", () => {

            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            const section = item.textContent.trim();

            if (section !== "📊 Dashboard") {
                alert(${section}\n\nThis module is coming soon in ClientFlow CRM.);
            }
        });
    });


    // Animate dashboard statistics
    const values = document.querySelectorAll(".card-value");

    values.forEach(value => {

        value.style.transition = "transform 0.2s ease";

        value.addEventListener("mouseenter", () => {
            value.style.transform = "scale(1.04)";
        });

        value.addEventListener("mouseleave", () => {
            value.style.transform = "scale(1)";
        });

    });


    // Deal cards
    const deals = document.querySelectorAll(".deal");

    deals.forEach(deal => {

        deal.addEventListener("click", () => {

            const customer =
                deal.querySelector("strong")?.textContent || "Unknown";

            const value =
                deal.querySelector("small")?.textContent || "";

            alert(
                Deal Details\n\nCustomer: ${customer}\nDeal Value: ${value}
            );

        });

    });


    console.log("ClientFlow CRM initialized successfully.");

});
  });

  console.log("ClientFlow CRM initialized successfully.");
});
