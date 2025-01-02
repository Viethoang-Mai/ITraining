const query = {
    _page: 1,
    _limit: 10,
};
const API_URL = "http://localhost:3000/jfu-products";
let total = 0;

const jfuList = document.querySelector(".jfu-list");
const getProducts = async () => {
    try {
        const response = await fetch(
            `${API_URL}?${new URLSearchParams(query)}`
        );
        const data = await response.json();

        if (!total) {
            total = parseInt(response.headers.get("X-Total-Count"), 10);
        }

        const list = data?.map((item) => {
            const li = document.createElement("li");

            li.classList.add(
                "col-2",
                "col-lg-3",
                "col-md-4",
                "col-sm-6",
                "item-card_rated"
            );
            li.innerHTML = `
            <a href="#!" class="link-item">
                                        <img
                                            loading="lazy"
                                            src=${item.image}
                                            alt=${item.alt}
                                        />
                                        <div class="content">
                                            <div class="desc-gr">
                                                <p class="desc">
                                                    <img
                                                        loading="lazy"
                                                        class=""
                                                        src=${item.icon}
                                                        alt="lazadamall"
                                                    />
                                                    ${item.desc}
                                                </p>
                                            </div>
                                            <div class="price">
                                                <span class="price-current"
                                                    >đ${item.price}</span
                                                >
                                                <span class="percent-off"
                                                    >${item.discount}
                                                </span>
                                            </div>
                                            <div class="rating">
                                                <div class="stars">
                                                    <i
                                                        class="fa-solid fa-star"
                                                    ></i>
                                                    <i
                                                        class="fa-solid fa-star"
                                                    ></i>
                                                    <i
                                                        class="fa-solid fa-star"
                                                    ></i>
                                                    <i
                                                        class="fa-solid fa-star"
                                                    ></i>
                                                    <i
                                                        class="fa-solid fa-star"
                                                    ></i>
                                                </div>
                                                <span class="count">(${item.sold})</span>
                                            </div>
                                        </div>
                                    </a>
            `;
            return li;
        });
        jfuList.append(...list);

        if (query._page * query._limit >= total) {
            btnLoadMore.style.display = "none";
        }
    } catch (error) {
        console.log(error);
    }
};

getProducts();
const btnLoadMore = document.querySelector(".jfu-loadmore");

btnLoadMore.addEventListener("click", () => {
    query._page++;
    getProducts();
});
