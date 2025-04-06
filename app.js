const React = window.React;
const ReactDOM = window.ReactDOM;
const {
  HashRouter,
  Route,
  Switch
} = window.ReactRouterDOM;


import Sidebar from "./layout/Sidebar.js";
import Page from "./components/Page.js";

import ProductsPage from "./pages/ProductsPage.js";
import MembersPage from "./pages/MembersPage.js";
import PromotionsPage from "./pages/PromotionsPage.js";
//import ExportPage from "./pages/ExportPage.js";
import RevenuePage from "./pages/RevenuePage.js";
import CalendarPage from "./pages/CalendarPage.js";

// 銷售子頁面
import SalesOverviewPage from "./pages/sales/SalesOverviewPage.js";
import SalesRevenuePage from "./pages/sales/SalesRevenuePage.js";
import SalesProductPage from "./pages/sales/SalesProductPage.js";

// 訂單子頁面
import PendingOrders from "./pages/orders/PendingOrders.js";
import OrderHistory from "./pages/orders/OrderHistory.js";

function App() {
  const {
    HashRouter,
    Route,
    Switch
  } = window.ReactRouterDOM;

  return React.createElement(HashRouter, null,
    React.createElement("div", { className: "container" }, [
      React.createElement(Sidebar, null),
      React.createElement(Switch, null, [
        React.createElement(Route, { path: "/products", component: ProductsPage }),
        React.createElement(Route, { path: "/members", component: MembersPage }),
        React.createElement(Route, { path: "/promotions", component: PromotionsPage }),
        //React.createElement(Route, { path: "/export", component: ExportPage }),
        React.createElement(Route, { path: "/revenue", component: RevenuePage }),
        React.createElement(Route, { path: "/calendar", component: CalendarPage }),

        // 銷售子功能
        React.createElement(Route, { path: "/sales/overview", component: SalesOverviewPage }),
        React.createElement(Route, { path: "/sales/revenue", component: SalesRevenuePage }),
        React.createElement(Route, { path: "/sales/product", component: SalesProductPage }),

        // 訂單子功能
        React.createElement(Route, { path: "/orders/pending", component: PendingOrders }),
        React.createElement(Route, { path: "/orders/history", component: OrderHistory }),

        // 預設首頁
        React.createElement(Route, {
          path: "/", exact: true,
          component: () => React.createElement(Page, { title: "歡迎使用商家管理系統" },
            React.createElement("p", {}, "請使用左側選單切換功能"))
        })
      ])
    ])
  );
}

const root = document.getElementById("root");
ReactDOM.render(React.createElement(App), root);


// --- Combined Modules without export ---

// ===== MODULE: Page =====
(function() {
function Page({ title, children }) {
    return React.createElement("div", { className: "main" }, [
      React.createElement("h1", {}, title),
      ...(Array.isArray(children) ? children : [children])
    ]);
  }
  
  export default Page;
  
window.Page = Page;
})();

// ===== MODULE: Sidebar =====
(function() {
function Sidebar() {
  const { Link } = window.ReactRouterDOM;
  const [showSalesMenu, setShowSalesMenu] = React.useState(false);
  const [showOrdersMenu, setShowOrdersMenu] = React.useState(false);
  const [showMembersMenu, setShowMembersMenu] = React.useState(false);

  const toggleSalesMenu = () => setShowSalesMenu(prev => !prev);
  const toggleOrdersMenu = () => setShowOrdersMenu(prev => !prev);
  const toggleMembersMenu = () => setShowMembersMenu(prev => !prev);

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "10px 0",
    color: "white",
    fontSize: "20px",
    transition: "background 0.3s",
  };

  const linkStyle = {
    display: "block",
    padding: "10px 0",
    color: "white",
    textDecoration: "none",
    fontSize: "18px"
  };

  return React.createElement("div", {
    className: "sidebar",
    style: {
      overflowY: "auto",
      maxHeight: "100vh",
      paddingRight: "8px",
      scrollbarWidth: "thin",
      scrollbarColor: "#ccc transparent",
      fontSize: "20px"
    }
  }, [
    React.createElement("style", {}, `
      .sidebar::-webkit-scrollbar { width: 6px; }
      .sidebar::-webkit-scrollbar-thumb { background-color: #ccc; border-radius: 3px; }
      .sidebar::-webkit-scrollbar-track { background-color: transparent; }
    `),

    React.createElement("h2", { style: { fontSize: "28px", marginBottom: "20px", color: "#debd94" } }, "商家管理"),

    React.createElement("nav", {}, [
      React.createElement(Link, { to: "/calendar", style: linkStyle }, "🗓️ 行事曆"),
      React.createElement(Link, { to: "/revenue", style: linkStyle }, "💻 業績總攬"),

      React.createElement("div", {}, [
        React.createElement("div", { onClick: toggleSalesMenu, style: menuItemStyle }, [
          React.createElement("span", {}, "📈 銷售趨勢"),
          React.createElement("span", {
            style: {
              transition: "transform 0.2s",
              transform: showSalesMenu ? "rotate(180deg)" : "rotate(0deg)"
            }
          }, "▼")
        ]),
        showSalesMenu && React.createElement("div", {
          style: {
            paddingLeft: "20px",
            transition: "all 0.3s ease"
          }
        }, [
          React.createElement(Link, { to: "/sales/overview", style: linkStyle }, "📊 營收總匯"),
          React.createElement(Link, { to: "/sales/revenue", style: linkStyle }, "📑 營收統計"),
          React.createElement(Link, { to: "/sales/product", style: linkStyle }, "🏷️ 銷售統計")
        ])
      ]),

      React.createElement("div", {}, [
        React.createElement("div", { onClick: toggleOrdersMenu, style: menuItemStyle }, [
          React.createElement("span", {}, "🧾 訂單管理"),
          React.createElement("span", {
            style: {
              transition: "transform 0.2s",
              transform: showOrdersMenu ? "rotate(180deg)" : "rotate(0deg)"
            }
          }, "▼")
        ]),
        showOrdersMenu && React.createElement("div", {
          style: {
            paddingLeft: "20px",
            transition: "all 0.3s ease"
          }
        }, [
          React.createElement(Link, { to: "/orders/pending", style: linkStyle }, "📦 待出貨"),
          React.createElement(Link, { to: "/orders/history", style: linkStyle }, "📜 歷史訂單"),

        ])
      ]),

      React.createElement("div", {}, [
        React.createElement("div", { onClick: toggleMembersMenu, style: menuItemStyle }, [
          React.createElement("span", {}, "👥 會員管理"),
          React.createElement("span", {
            style: {
              transition: "transform 0.2s",
              transform: showMembersMenu ? "rotate(180deg)" : "rotate(0deg)"
            }
          }, "▼")
        ]),
        showMembersMenu && React.createElement("div", {
          style: {
            paddingLeft: "20px",
            transition: "all 0.3s ease"
          }
        }, [
          React.createElement(Link, { to: "/members", style: linkStyle }, "👤 會員列表")
        ])
      ]),

      React.createElement(Link, { to: "/products", style: linkStyle }, "🛒 商品管理"),
      React.createElement(Link, { to: "/promotions", style: linkStyle }, "🎁 促銷活動")
      //React.createElement(Link, { to: "/export", style: linkStyle }, "📤 報表匯出"),
    ])
  ]);
}

export default Sidebar;

window.Sidebar = Sidebar;
window.toggleSalesMenu = toggleSalesMenu;
window.toggleOrdersMenu = toggleOrdersMenu;
window.toggleMembersMenu = toggleMembersMenu;
window.menuItemStyle = menuItemStyle;
window.linkStyle = linkStyle;
})();

// ===== MODULE: CalendarPage =====
(function() {
import Page from "../../components/Page.js";

function CalendarPage() {
  const [activities, setActivities] = React.useState([]);
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [showModal, setShowModal] = React.useState(false);
  const [editingId, setEditingId] = React.useState(null);
  const [newActivity, setNewActivity] = React.useState({ title: "", start: "", end: "" });

  function getMonthDates(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];
    const startDayOfWeek = firstDay.getDay();
    const totalCells = Math.ceil((startDayOfWeek + lastDay.getDate()) / 7) * 7;
    for (let i = 0; i < totalCells; i++) {
      const date = new Date(year, month, i - startDayOfWeek + 1);
      dates.push(date);
    }
    return dates;
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; // ✅ 正確避免時區偏移
  }
  

  function openModal(date) {
    const todayStr = formatDate(date);
    setNewActivity({ title: "", start: todayStr, end: todayStr });
    setEditingId(null);
    setShowModal(true);
  }

  function closeModal() {
    setNewActivity({ title: "", start: "", end: "" });
    setEditingId(null);
    setShowModal(false);
  }

  function handleSave() {
    if (!newActivity.title || !newActivity.start || !newActivity.end) {
      alert("請填寫完整活動資訊");
      return;
    }

    const start = new Date(newActivity.start);
    const end = new Date(newActivity.end);
    if (start > end) {
      alert("結束日期不得早於開始日期");
      return;
    }

    if (editingId !== null) {
      setActivities(activities.map(a => a.id === editingId ? { ...newActivity, id: editingId } : a));
    } else {
      setActivities([...activities, { ...newActivity, id: Date.now() }]);
    }
    closeModal();
  }

  function getActivitiesByDate(date) {
    const d = formatDate(date);
    return activities.filter(a => d >= a.start && d <= a.end);
  }

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getMonthDates(year, month);

  return React.createElement(Page, { title: "📅 行事曆管理" }, [
    React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `
        .calendar {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
          margin-top: 20px;
        }
        .calendar-day {
          border: 1px solid #ccc;
          min-height: 80px;
          padding: 6px;
          background: #fff;
          border-radius: 6px;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .calendar-day.other-month {
          background: #f1f1f1;
          color: #aaa;
        }
        .day-number {
          font-weight: bold;
          margin-bottom: 4px;
        }
        .activity-tag {
          font-size: 12px;
          color: #fff;
          background: #f9c066;
          padding: 2px 4px;
          border-radius: 4px;
          margin-bottom: 2px;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .calendar-header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          background-color: #a9805b;
          color: white;
          text-align: center;
          font-weight: bold;
          padding: 10px 0;
          border-radius: 8px;
        }
        .calendar-nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .calendar-nav button {
          padding: 6px 10px;
          background: #9f5933;
          color: white;
          border: none;
          border-radius: 5px;
        }
      ` }
    }),

    React.createElement("div", { className: "calendar-nav" }, [
        React.createElement("button", {
          onClick: () => setCurrentDate(new Date(year, month - 1, 1))
        }, "◀ 上一月"),
      
        // 年份下拉選單
        React.createElement("select", {
          value: year,
          onChange: (e) => setCurrentDate(new Date(Number(e.target.value), month, 1)),
          style: { padding: "4px 8px", margin: "0 6px" }
        }, Array.from({ length: 11 }, (_, i) => {
          const y = 2020 + i;
          return React.createElement("option", { value: y, key: y }, `${y} 年`);
        })),
      
        // 月份下拉選單
        React.createElement("select", {
          value: month,
          onChange: (e) => setCurrentDate(new Date(year, Number(e.target.value), 1)),
          style: { padding: "4px 8px", margin: "0 6px" }
        }, Array.from({ length: 12 }, (_, i) =>
          React.createElement("option", { value: i, key: i }, `${i + 1} 月`)
        )),
      
        React.createElement("button", {
          onClick: () => setCurrentDate(new Date(year, month + 1, 1))
        }, "下一月 ▶")
      ]),

    React.createElement("div", { className: "calendar-header" },
      ["日", "一", "二", "三", "四", "五", "六"].map((d, i) =>
        React.createElement("div", { key: i }, d)
      )
    ),

    React.createElement("div", { className: "calendar" },
      days.map((date, idx) => {
        const isCurrentMonth = date.getMonth() === month;
        const list = getActivitiesByDate(date);
        return React.createElement("div", {
          className: "calendar-day" + (isCurrentMonth ? "" : " other-month"),
          key: idx,
          onClick: () => openModal(date)
        }, [
          React.createElement("div", { className: "day-number" }, date.getDate()),
          ...list.map((a, i) =>
            React.createElement("div", { key: a.id + '-' + i, className: "activity-tag" }, a.title)
          )
        ]);
      })
    ),

    showModal && React.createElement("div", {
      style: {
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)", display: "flex",
        alignItems: "center", justifyContent: "center", zIndex: 1000
      }
    }, React.createElement("div", {
      style: {
        background: "#fff", padding: "20px", borderRadius: "10px",
        width: "360px", maxWidth: "90%"
      }
    }, [
      React.createElement("h3", {}, editingId ? "編輯活動" : "新增活動"),
      React.createElement("label", {}, "活動名稱："),
      React.createElement("input", {
        type: "text",
        value: newActivity.title,
        onChange: e => setNewActivity({ ...newActivity, title: e.target.value }),
        style: { width: "100%", marginBottom: "10px" }
      }),
      React.createElement("label", {}, "開始日期："),
      React.createElement("input", {
        type: "date",
        value: newActivity.start,
        onChange: e => {
          const startVal = e.target.value;
          setNewActivity({
            ...newActivity,
            start: startVal,
            end: newActivity.end < startVal ? startVal : newActivity.end
          });
        },
        style: { width: "100%", marginBottom: "10px" }
      }),
      React.createElement("label", {}, "結束日期："),
      React.createElement("input", {
        type: "date",
        min: newActivity.start,
        value: newActivity.end,
        onChange: e => setNewActivity({ ...newActivity, end: e.target.value }),
        style: { width: "100%", marginBottom: "10px" }
      }),
      React.createElement("div", { style: { textAlign: "right" } }, [
        React.createElement("button", {
          onClick: handleSave,
          style: { marginRight: "10px", background: "#f58322", color: "#fff", padding: "6px 12px", border: "none", borderRadius: "5px" }
        }, editingId ? "儲存" : "新增"),
        React.createElement("button", {
          onClick: closeModal,
          style: { background: "#aaa", color: "#fff", padding: "6px 12px", border: "none", borderRadius: "5px" }
        }, "取消")
      ])
    ])),

    React.createElement("div", { style: { marginTop: "40px" } }, [
      React.createElement("h2", {}, "📝 活動清單"),
      activities.sort((a, b) => new Date(a.start) - new Date(b.start)).map((a, idx) =>
        React.createElement("div", { key: a.id }, [
          `• ${a.title}（${a.start} ~ ${a.end}）`,
          React.createElement("button", {
            style: { marginLeft: "8px", background: "#774b30", color: "#fff", border: "none", padding: "4px 8px", borderRadius: "4px" },
            onClick: () => {
              setNewActivity({ title: a.title, start: a.start, end: a.end });
              setEditingId(a.id);
              setShowModal(true);
            }
          }, "編輯"),
          React.createElement("button", {
            style: { marginLeft: "5px", background: "#aaa", color: "#fff", border: "none", padding: "4px 8px", borderRadius: "4px" },
            onClick: () => setActivities(activities.filter(e => e.id !== a.id))
          }, "刪除")
        ])
      )
    ])
  ]);
}

export default CalendarPage;

window.CalendarPage = CalendarPage;
window.getMonthDates = getMonthDates;
window.firstDay = firstDay;
window.lastDay = lastDay;
window.dates = dates;
window.startDayOfWeek = startDayOfWeek;
window.totalCells = totalCells;
window.i = i;
window.date = date;
window.formatDate = formatDate;
window.year = year;
window.month = month;
window.day = day;
window.openModal = openModal;
window.todayStr = todayStr;
window.closeModal = closeModal;
window.handleSave = handleSave;
window.start = start;
window.end = end;
window.getActivitiesByDate = getActivitiesByDate;
window.d = d;
window.days = days;
window.y = y;
window.isCurrentMonth = isCurrentMonth;
window.list = list;
window.startVal = startVal;
})();

// ===== MODULE: ExportPage =====
(function() {
import Page from "../../components/Page.js";

function ExportPage() {
    return React.createElement(Page, { title: "報表匯出" }, [
        React.createElement("p", {}, "模擬產生報表資料（CSV / Excel 格式）"),
        React.createElement("button", { className: "btn" }, "下載報表")
    ]);
}

export default ExportPage;
window.ExportPage = ExportPage;
})();

// ===== MODULE: MembersPage =====
(function() {
import Page from "../../components/Page.js";

function MembersPage() {
  const [members, setMembers] = React.useState(generateMembers());
  const [search, setSearch] = React.useState("");
  const [filterTag, setFilterTag] = React.useState("全部");
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [sortOrder, setSortOrder] = React.useState("default");
  const [newTag, setNewTag] = React.useState("");

  const allTags = ["全部", "VIP", "新客", "高回購", "生日月", "黃金", "一般"];

  function generateMembers() {
    const baseTags = ["VIP", "新客", "高回購", "生日月"];
    const names = ["王小明", "陳美麗", "張大偉", "林小花", "黃志強", "周玉婷"];
    return Array.from({ length: 10 }).map((_, i) => {
      const name = names[i % names.length];
      const phone = "09" + Math.floor(Math.random() * 100000000).toString().padStart(8, "0");
      const email = `user${i}@mail.com`;
      const totalSpent = Math.floor(Math.random() * 10000);
      const level = totalSpent > 8000 ? "VIP" : totalSpent > 4000 ? "黃金" : "一般";
      const recent = new Date(Date.now() - Math.floor(Math.random() * 90) * 86400000).toLocaleDateString();
      const orderCount = Math.floor(Math.random() * 10) + 1;
      const birthday = new Date(1980 + Math.floor(Math.random() * 30), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
      const birthdayStr = birthday.toISOString().split("T")[0].replace(/-/g, "/");
      const memberTags = Array.from(new Set([level, baseTags[Math.floor(Math.random() * baseTags.length)]]));
      const orders = Array.from({ length: orderCount }).map((_, j) => ({
        id: `ORD${i + 1}${j + 1}`,
        date: new Date(Date.now() - Math.floor(Math.random() * 90) * 86400000).toLocaleDateString(),
        amount: Math.floor(Math.random() * 1000) + 200
      }));
      return { id: i + 1, name, phone, email, birthday: birthdayStr, totalSpent, level, recent, orderCount, tags: memberTags, orders };
    });
  }

  const filteredMembers = members
    .filter(m => {
      const matchSearch =
        m.name.includes(search) ||
        m.phone.includes(search) ||
        m.tags.some(tag => tag.includes(search));
      const matchTag = filterTag === "全部" || m.tags.includes(filterTag);
      return matchSearch && matchTag;
    })
    .sort((a, b) => {
      if (sortOrder === "totalSpent") return b.totalSpent - a.totalSpent;
      if (sortOrder === "orderCount") return b.orderCount - a.orderCount;
      if (sortOrder === "recent") return new Date(b.recent) - new Date(a.recent);
      if (sortOrder === "birthday") return a.birthday.localeCompare(b.birthday);
      return 0;
    });

  const updateMember = (id, updatedData) => {
    setMembers(members.map(m => m.id === id ? { ...m, ...updatedData } : m));
    setSelectedMember(null);
  };

  const removeTag = (tag) => {
    if (!selectedMember) return;
    const updatedTags = selectedMember.tags.filter(t => t !== tag);
    updateMember(selectedMember.id, { tags: updatedTags });
  };

  const addTag = () => {
    if (!selectedMember || !newTag.trim()) return;
    const updatedTags = Array.from(new Set([...selectedMember.tags, newTag.trim()]));
    updateMember(selectedMember.id, { tags: updatedTags });
    setNewTag("");
  };

  return React.createElement(Page, { title: "👥 會員管理" }, [
    React.createElement("div", {
      style: {
        background: "#fff9eb",
        padding: "16px",
        borderRadius: "10px",
        marginBottom: "16px"
      }
    }, [
      React.createElement("input", {
        type: "text",
        placeholder: "搜尋姓名 / 電話 / 標籤",
        value: search,
        onChange: e => setSearch(e.target.value),
        style: { fontSize: "16px", padding: "6px", width: "40%", marginRight: "16px" }
      }),
      React.createElement("select", {
        value: filterTag,
        onChange: e => setFilterTag(e.target.value),
        style: { fontSize: "16px", padding: "6px", marginRight: "16px" }
      }, allTags.map((tag, i) =>
        React.createElement("option", { value: tag, key: `tag-${i}` }, tag)
      )),
      React.createElement("select", {
        value: sortOrder,
        onChange: e => setSortOrder(e.target.value),
        style: { fontSize: "16px", padding: "6px" }
      }, [
        { value: "default", label: "排序方式" },
        { value: "totalSpent", label: "依總消費金額" },
        { value: "orderCount", label: "依回購次數" },
        { value: "recent", label: "依最近消費" },
        { value: "birthday", label: "依生日" }
      ].map((opt, i) =>
        React.createElement("option", { value: opt.value, key: `sort-${i}` }, opt.label)
      ))
    ]),

    React.createElement("table", {
      style: {
        width: "100%",
        background: "#fdf3e7",
        borderCollapse: "collapse",
        borderRadius: "10px",
        overflow: "hidden"
      }
    }, [
      React.createElement("thead", {}, React.createElement("tr", {}, [
        "編號", "姓名", "電話", "Email", "生日", "標籤", "等級", "總消費", "回購次數", "最近消費", "操作"
      ].map((title, idx) =>
        React.createElement("th", {
          key: `head-${idx}`,
          style: { padding: "10px", backgroundColor: "#a9805b", color: "#fff" }
        }, title)
      ))),
      React.createElement("tbody", {}, filteredMembers.map(member =>
        React.createElement("tr", { key: member.id }, [
          React.createElement("td", { style: { padding: "10px" } }, member.id),
          React.createElement("td", { style: { padding: "10px" } }, member.name),
          React.createElement("td", { style: { padding: "10px" } }, member.phone),
          React.createElement("td", { style: { padding: "10px" } }, member.email),
          React.createElement("td", { style: { padding: "10px" } }, member.birthday),
          React.createElement("td", { style: { padding: "10px" } },
            member.tags.map((tag, i) =>
              React.createElement("span", {
                key: `tag-${i}`,
                style: {
                  backgroundColor: "#f9c066",
                  color: "#774b30",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  marginRight: "4px"
                }
              }, tag)
            )
          ),
          React.createElement("td", { style: { padding: "10px" } }, member.level),
          React.createElement("td", { style: { padding: "10px" } }, "$" + member.totalSpent),
          React.createElement("td", { style: { padding: "10px" } }, member.orderCount),
          React.createElement("td", { style: { padding: "10px" } }, member.recent),
          React.createElement("td", { style: { padding: "10px" } },
            React.createElement("button", {
              style: {
                background: "#f58322",
                color: "white",
                padding: "6px 10px",
                border: "none",
                borderRadius: "4px"
              },
              onClick: () => setSelectedMember(member)
            }, "查看 / 編輯")
          )
        ])
      ))
    ]),

    selectedMember && React.createElement("div", {
      style: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        zIndex: 999,
        width: "400px"
      }
    }, [
      React.createElement("h3", {}, `會員資料 - ${selectedMember.name}`),
      React.createElement("label", {}, "電話："),
      React.createElement("input", {
        type: "text",
        value: selectedMember.phone,
        onChange: e => updateMember(selectedMember.id, { phone: e.target.value }),
        style: { width: "100%", marginBottom: "8px" }
      }),
      React.createElement("label", {}, "Email："),
      React.createElement("input", {
        type: "text",
        value: selectedMember.email,
        onChange: e => updateMember(selectedMember.id, { email: e.target.value }),
        style: { width: "100%", marginBottom: "8px" }
      }),
      React.createElement("label", {}, "生日："),
      React.createElement("input", {
        type: "text",
        value: selectedMember.birthday,
        onChange: e => updateMember(selectedMember.id, { birthday: e.target.value }),
        style: { width: "100%", marginBottom: "8px" }
      }),
      React.createElement("div", { style: { marginBottom: "8px" } }, [
        React.createElement("strong", {}, "標籤："),
        selectedMember.tags.map((tag, i) =>
          React.createElement("span", {
            key: `tag-edit-${i}`,
            style: {
              backgroundColor: "#f9c066",
              color: "#774b30",
              padding: "2px 6px",
              borderRadius: "4px",
              margin: "4px",
              display: "inline-block",
              cursor: "pointer"
            },
            onClick: () => removeTag(tag)
          }, tag + " ❌")
        )
      ]),
      React.createElement("input", {
        type: "text",
        placeholder: "輸入標籤後按下新增",
        value: newTag,
        onChange: e => setNewTag(e.target.value),
        style: { width: "100%", marginBottom: "8px" }
      }),
      React.createElement("button", {
        onClick: addTag,
        style: {
          marginBottom: "10px",
          padding: "6px 12px",
          backgroundColor: "#9f5933",
          color: "#fff",
          border: "none",
          borderRadius: "5px"
        }
      }, "新增標籤"),
      React.createElement("button", {
        onClick: () => setSelectedMember(null),
        style: {
          marginTop: "10px",
          padding: "6px 12px",
          backgroundColor: "#774b30",
          color: "#fff",
          border: "none",
          borderRadius: "5px"
        }
      }, "關閉")
    ])
  ]);
}

export default MembersPage;

window.MembersPage = MembersPage;
window.allTags = allTags;
window.generateMembers = generateMembers;
window.baseTags = baseTags;
window.names = names;
window.name = name;
window.phone = phone;
window.email = email;
window.totalSpent = totalSpent;
window.level = level;
window.recent = recent;
window.orderCount = orderCount;
window.birthday = birthday;
window.birthdayStr = birthdayStr;
window.memberTags = memberTags;
window.orders = orders;
window.filteredMembers = filteredMembers;
window.matchSearch = matchSearch;
window.matchTag = matchTag;
window.updateMember = updateMember;
window.removeTag = removeTag;
window.updatedTags = updatedTags;
window.addTag = addTag;
})();

// ===== MODULE: OrdersPage =====
(function() {
import Page from "../../components/Page.js";

function OrdersPage() {
    const [search, setSearch] = React.useState("");
    const [dateFrom, setDateFrom] = React.useState("");
    const [dateTo, setDateTo] = React.useState("");

    const [orders, setOrders] = React.useState([
        {
            id: 101,
            customer: "王小明",
            items: [
                { name: "奶油可頌", qty: 2, price: 40 },
                { name: "蜂蜜吐司", qty: 1, price: 35 }
            ],
            payment: "貨到付款",
            status: "待確認",
            orderDate: "2025-04-01",
            pickupDate: "2025-04-08"
        },
        {
            id: 102,
            customer: "李小花",
            items: [
                { name: "鹽可頌", qty: 3, price: 38 }
            ],
            payment: "Line Pay",
            status: "製作中",
            orderDate: "2025-04-02",
            pickupDate: "2025-04-09"
        }
    ]);

    const statusList = ["待確認", "製作中", "可取貨", "已取貨"];

    function updateStatus(id, newStatus) {
        setOrders(orders.map(o =>
            o.id === id ? { ...o, status: newStatus } : o
        ));
    }

    function getTotal(order) {
        return order.items.reduce((sum, item) => sum + item.qty * item.price, 0);
    }

    function exportCSV(customer) {
        const filtered = orders.filter(o => o.customer === customer);
        if (filtered.length === 0) return alert("找不到此顧客訂單！");
        let csv = "訂單編號,下單時間,取貨時間,商品明細,付款方式,狀態,總金額\\n";
        filtered.forEach(o => {
            const items = o.items.map(i => `${i.name}x${i.qty}`).join(" ");
            const total = getTotal(o);
            csv += `${o.id},${o.orderDate},${o.pickupDate},${items},${o.payment},${o.status},${total}\\n`;
        });
        const blob = new Blob([csv], { type: "text/csv" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = customer + "_訂單報表.csv";
        a.click();
    }

    const filteredOrders = orders.filter(o => {
        const matchSearch = o.customer.includes(search) || o.id.toString().includes(search);
        const matchDate =
            (!dateFrom || o.orderDate >= dateFrom) &&
            (!dateTo || o.orderDate <= dateTo);
        return matchSearch && matchDate;
    });

    return React.createElement(Page, { title: "訂單管理" }, [
        React.createElement("div", { className: "search-box" }, [
            React.createElement("input", {
                type: "text",
                placeholder: "搜尋顧客 / 訂單編號",
                value: search,
                onChange: e => setSearch(e.target.value)
            }),
            React.createElement("input", {
                type: "date",
                value: dateFrom,
                onChange: e => setDateFrom(e.target.value),
                style: { marginLeft: "10px" }
            }),
            React.createElement("input", {
                type: "date",
                value: dateTo,
                onChange: e => setDateTo(e.target.value),
                style: { marginLeft: "10px" }
            }),
            React.createElement("button", {
                className: "btn",
                style: { marginLeft: "10px" },
                onClick: () => exportCSV(search.trim())
            }, "匯出顧客訂單")
        ]),
        React.createElement("table", {}, [
            React.createElement("thead", {}, React.createElement("tr", {}, [
                React.createElement("th", {}, "訂單編號"),
                React.createElement("th", {}, "顧客"),
                React.createElement("th", {}, "下單時間"),
                React.createElement("th", {}, "取貨時間"),
                React.createElement("th", {}, "商品明細"),
                React.createElement("th", {}, "付款方式"),
                React.createElement("th", {}, "狀態"),
                React.createElement("th", {}, "總金額"),
                React.createElement("th", {}, "操作")
            ])),
            React.createElement("tbody", {}, filteredOrders.map(order =>
                React.createElement("tr", { key: order.id }, [
                    React.createElement("td", {}, order.id),
                    React.createElement("td", {}, order.customer),
                    React.createElement("td", {}, order.orderDate),
                    React.createElement("td", {}, order.pickupDate),
                    React.createElement("td", {}, order.items.map(i => `${i.name} x${i.qty}`).join(", ")),
                    React.createElement("td", {}, order.payment),
                    React.createElement("td", {}, order.status),
                    React.createElement("td", {}, "$" + getTotal(order)),
                    React.createElement("td", {}, [
                        React.createElement("select", {
                            value: order.status,
                            onChange: e => updateStatus(order.id, e.target.value)
                        }, statusList.map(s => React.createElement("option", { key: s, value: s }, s)))
                    ])
                ])
            ))
        ])
    ]);
}

export default OrdersPage;
window.OrdersPage = OrdersPage;
window.statusList = statusList;
window.updateStatus = updateStatus;
window.getTotal = getTotal;
window.exportCSV = exportCSV;
window.filtered = filtered;
window.csv = csv;
window.items = items;
window.total = total;
window.blob = blob;
window.a = a;
window.filteredOrders = filteredOrders;
window.matchSearch = matchSearch;
window.matchDate = matchDate;
})();

// ===== MODULE: ProductsPage =====
(function() {
import Page from "../../components/Page.js";

function ProductsPage() {
    const [products, setProducts] = React.useState([
        {
            id: 1,
            name: "牛軋餅原味",
            description: "經典原味牛軋餅，嚴選香濃牛軋糖與酥脆蘇打餅結合，甜鹹交融、口感層次豐富。每一口都能感受奶香與餅香交織，是不可錯過的美味點心。",
            category: "牛軋餅",
            price: 120,
            stock: 50,
            image: "images/nougat-original.jpg"
        },
        {
            id: 2,
            name: "牛軋餅蔓越莓口味",
            description: "在奶香牛軋糖中加入酸甜蔓越莓果乾，搭配鹹香餅乾，吃得到清新果香與綿密口感。酸甜適中，不膩口，是送禮與自食的雙重首選。",
            category: "牛軋餅",
            price: 130,
            stock: 40,
            image: "images/nougat-cranberry.jpg"
        },
        {
            id: 3,
            name: "牛軋餅抹茶味",
            description: "融合日本抹茶與牛軋糖，帶出淡雅茶香與濃郁奶香的絕妙平衡。夾在香酥餅乾中，呈現甜鹹層次，是抹茶控不能錯過的風味。",
            category: "牛軋餅",
            price: 130,
            stock: 35,
            image: "images/nougat-matcha.jpg"
        },
        {
            id: 4,
            name: "牛軋餅咖啡味",
            description: "濃郁咖啡風味牛軋糖，搭配微鹹蘇打餅，香氣四溢、甜中帶點成熟的苦韻。適合喜愛咖啡風味的大人系甜點，下午茶良伴首選。",
            category: "牛軋餅",
            price: 130,
            stock: 30,
            image: "images/nougat-coffee.jpg"
        },
        {
            id: 5,
            name: "方塊酥抹茶味",
            description: "酥鬆的方塊酥餅體中夾入香濃抹茶牛軋糖，融合茶香與奶香，吃起來細膩不膩。淡雅茶香與酥脆餅皮在口中完美交融，讓人一口接一口。",
            category: "方塊酥",
            price: 110,
            stock: 40,
            image: "images/square-matcha.jpg"
        },
        {
            id: 6,
            name: "方塊酥咖啡味",
            description: "咖啡風味牛軋糖夾於香酥方塊酥餅中，外酥內Q、口感豐富。香氣濃郁的咖啡與奶香交織，搭配茶飲更添風味，是精緻又耐吃的點心。",
            category: "方塊酥",
            price: 110,
            stock: 35,
            image: "images/square-coffee.jpg"
        },
        {
            id: 7,
            name: "夏威夷莓果Q糖",
            description: "結合Q彈牛軋糖與酸甜莓果，內含夏威夷豆，果香與堅果香完美融合。每一口都能感受自然果乾的清香與堅果的爽脆，健康又美味。",
            category: "牛軋糖",
            price: 150,
            stock: 25,
            image: "images/nougat-berry.jpg"
        },
        {
            id: 8,
            name: "可可夏威夷Q糖",
            description: "濃郁可可風味牛軋糖，搭配夏威夷果仁，甜而不膩，Q彈滑順中帶有香脆堅果口感。巧克力控與堅果控都會愛上的經典美味。",
            category: "牛軋糖",
            price: 150,
            stock: 20,
            image: "images/nougat-cocoa.jpg"
        },
        {
            id: 9,
            name: "港式芝麻糊Q糖",
            description: "延續傳統港式芝麻糊風味，將黑芝麻香濃融合在Q彈糖體中。口感綿密滑順，帶有迷人的芝麻香，是復古與創新兼具的特色甜點。",
            category: "牛軋糖",
            price: 140,
            stock: 20,
            image: "images/nougat-sesame.jpg"
        },
        {
            id: 10,
            name: "草莓牛軋糖",
            description: "選用天然草莓果乾與奶香牛軋糖製成，口感Q彈、果香撲鼻。酸甜交織不黏牙，是最受歡迎的夢幻口味之一，深受女孩們喜愛。",
            category: "牛軋糖",
            price: 140,
            stock: 22,
            image: "images/nougat-strawberry.jpg"
        },
        {
            id: 11,
            name: "棗泥蛋黃酥",
            description: "酥香外皮中包裹綿密香甜的棗泥與鹹蛋黃，鹹甜融合、層次細膩。棗泥香氣濃郁、口感滑順，與酥皮完美結合，是中式點心的經典之作。",
            category: "中式酥點",
            price: 180,
            stock: 18,
            image: "images/yolk-pastry.jpg"
        },
        {
            id: 12,
            name: "月娘酥",
            description: "外層金黃酥皮包裹細緻綠豆沙餡，甜而不膩、入口即化。綠豆沙香氣溫潤滑順，搭配酥鬆餅皮，呈現出樸實又迷人的傳統滋味。",
            category: "中式酥點",
            price: 160,
            stock: 20,
            image: "images/moon-pastry.jpg"
        },
        {
            id: 13,
            name: "台式馬卡龍",
            description: "外酥內Q的傳統口味，散發濃郁蛋香與糖香，口感樸實甜美。與法式馬卡龍相比，更有台灣在地風味，是許多人記憶中的童年零嘴。",
            category: "西式烘焙",
            price: 100,
            stock: 30,
            image: "images/taiwan-macaron.jpg"
        },
        {
            id: 14,
            name: "吐司",
            description: "使用高級小麥粉與天然酵母，製成柔軟蓬鬆的吐司，每一口都充滿自然奶香。適合搭配果醬、奶油或製作三明治，是日常不可或缺的基本款。",
            category: "吐司",
            price: 60,
            stock: 40,
            image: "images/bread.jpg"
        },
        {
            id: 15,
            name: "葡萄吐司",
            description: "在柔軟吐司中加入飽滿香甜葡萄乾，果香自然、口感豐富。輕咬即能感受果乾甜味與麵包柔軟的完美融合，是早餐與下午茶的好選擇。",
            category: "吐司",
            price: 70,
            stock: 35,
            image: "images/raisin-bread.jpg"
        },
        {
            id: 16,
            name: "肉桂捲",
            description: "金黃酥香的麵包體捲入香濃肉桂醬，撒上堅果或糖霜，濃郁香氣令人著迷。甜中帶辣、層層分明，是寒冷天氣裡最療癒的甜點之一。",
            category: "西式烘焙",
            price: 90,
            stock: 28,
            image: "images/cinnamon-roll.jpg"
        },
        {
            id: 17,
            name: "瑪德蓮",
            description: "經典法式甜點，以奶油與蛋香為基底，外殼微酥、內裡濕潤。淡淡檸檬香氣清爽提味，貝殼形狀精緻討喜，是下午茶桌上的亮點之一。",
            category: "西式烘焙",
            price: 85,
            stock: 26,
            image: "images/madeleine.jpg"
        }
    ]);


    const [categoryFilter, setCategoryFilter] = React.useState("全部");
    const [showForm, setShowForm] = React.useState(false);
    const [editing, setEditing] = React.useState(null);
    const [form, setForm] = React.useState({
        name: "",
        price: "",
        category: "",
        stock: "",
        image: "",
        description: ""
    });

    const categories = ["全部", ...new Set(products.map(p => p.category))];
    const filteredProducts = categoryFilter === "全部" ? products : products.filter(p => p.category === categoryFilter);

    function openForm(product) {
        if (product) {
            setEditing(product.id);
            setForm({ ...product });
        } else {
            setEditing(null);
            setForm({ name: "", price: "", category: categories[1] || "", stock: "", image: "", description: "" });
        }
        setShowForm(true);
    }

    function closeForm() {
        setShowForm(false);
    }

    function saveProduct() {
        if (!form.name || isNaN(form.price) || isNaN(form.stock)) {
            alert("請填寫正確的欄位！");
            return;
        }
        const product = {
            ...form,
            price: parseInt(form.price, 10),
            stock: parseInt(form.stock, 10),
            image: form.image || "https://via.placeholder.com/60"
        };
        if (editing) {
            setProducts(products.map(p => (p.id === editing ? { ...product, id: editing } : p)));
        } else {
            setProducts([...products, { ...product, id: Date.now() }]);
        }
        setShowForm(false);
    }

    function deleteProduct(id) {
        setProducts(products.filter(p => p.id !== id));
    }

    return React.createElement(Page, { title: "商品管理" }, [
        React.createElement("div", { style: { marginBottom: "16px" } }, [
            React.createElement("label", { style: { marginRight: "8px", fontWeight: "bold" } }, "篩選分類："),
            React.createElement("select", {
                value: categoryFilter,
                onChange: e => setCategoryFilter(e.target.value),
                style: { padding: "6px 12px", fontSize: "16px" }
            }, categories.map((cat, idx) =>
                React.createElement("option", { key: idx, value: cat }, cat)
            ))
        ]),

        React.createElement("button", { className: "btn", onClick: () => openForm(null), style: { marginBottom: "16px" } }, "新增商品"),

        showForm && React.createElement("div", {
            style: { backgroundColor: "#fff3e0", padding: "20px", margin: "20px 0", borderRadius: "8px" }
        }, [
            React.createElement("h2", {}, editing ? "編輯商品" : "新增商品"),
            React.createElement("div", {}, [
                React.createElement("label", {}, "名稱："),
                React.createElement("input", {
                    value: form.name,
                    onChange: e => setForm({ ...form, name: e.target.value })
                })
            ]),
            React.createElement("div", {}, [
                React.createElement("label", {}, "價格："),
                React.createElement("input", {
                    type: "number",
                    value: form.price,
                    onChange: e => setForm({ ...form, price: e.target.value })
                })
            ]),
            React.createElement("div", {}, [
                React.createElement("label", {}, "分類："),
                React.createElement("select", {
                    value: form.category,
                    onChange: e => setForm({ ...form, category: e.target.value })
                }, categories.filter(c => c !== "全部").map(c => React.createElement("option", { key: c, value: c }, c)))
            ]),
            React.createElement("div", {}, [
                React.createElement("label", {}, "庫存："),
                React.createElement("input", {
                    type: "number",
                    value: form.stock,
                    onChange: e => setForm({ ...form, stock: e.target.value })
                })
            ]),
            React.createElement("div", {}, [
                React.createElement("label", {}, "圖片網址："),
                React.createElement("input", {
                    value: form.image,
                    onChange: e => setForm({ ...form, image: e.target.value })
                })
            ]),
            React.createElement("div", {}, [
                React.createElement("label", {}, "介紹："),
                React.createElement("textarea", {
                    value: form.description,
                    rows: 3,
                    style: { width: "100%" },
                    onChange: e => setForm({ ...form, description: e.target.value })
                })
            ]),
            React.createElement("div", { style: { marginTop: "10px" } }, [
                React.createElement("button", { className: "btn", onClick: saveProduct }, "儲存"),
                React.createElement("button", { className: "btn", onClick: closeForm }, "取消")
            ])
        ]),

        React.createElement("table", {}, [
            React.createElement("thead", {}, React.createElement("tr", {}, [
                React.createElement("th", {}, "編號"),
                React.createElement("th", {}, "圖片"),
                React.createElement("th", {}, "名稱"),
                React.createElement("th", {}, "介紹"),
                React.createElement("th", {}, "分類"),
                React.createElement("th", {}, "價格"),
                React.createElement("th", {}, "庫存"),
                React.createElement("th", {}, "操作")
            ])),
            React.createElement("tbody", {}, filteredProducts.map((p, index) =>
                React.createElement("tr", { key: p.id }, [
                    React.createElement("td", {}, index + 1),
                    React.createElement("td", {}, React.createElement("img", {
                        src: p.image,
                        alt: p.name,
                        width: 60,
                        height: 60,
                        style: { objectFit: "cover", borderRadius: "6px" }
                    })),
                    React.createElement("td", {}, p.name),
                    React.createElement("td", {
                        style: {
                            width: "350px"
                        },
                        title: p.description
                    }, p.description),
                    React.createElement("td", {}, p.category),
                    React.createElement("td", {}, "$" + p.price),
                    React.createElement("td", {}, p.stock),
                    React.createElement("td", {}, [
                        React.createElement("button", {
                            className: "btn", onClick: () => openForm(p)
                        }, "編輯"),
                        React.createElement("button", {
                            className: "btn", onClick: () => deleteProduct(p.id)
                        }, "刪除")
                    ])
                ])
            ))
        ])
    ]);
}

export default ProductsPage;
window.ProductsPage = ProductsPage;
window.categories = categories;
window.filteredProducts = filteredProducts;
window.openForm = openForm;
window.closeForm = closeForm;
window.saveProduct = saveProduct;
window.product = product;
window.deleteProduct = deleteProduct;
})();

// ===== MODULE: PromotionsPage =====
(function() {
import Page from "../../components/Page.js";

function PromotionsPage() {
  const categories = ["牛軋餅", "方塊酥", "牛軋糖", "中式酥點", "西式烘焙", "吐司"];

  const [promoList, setPromoList] = React.useState(generateSamplePromos());
  const [form, setForm] = React.useState({
    code: "", discount: "", type: "percent", description: "", start: "", end: "",
    minSpend: "", products: [], repeatable: false, target: "ALL"
  });

  function generateSamplePromos() {
    return Array.from({ length: 5 }).map((_, i) => ({
      code: `CODE${i + 1}`,
      discount: Math.floor(Math.random() * 30) + 10,
      type: "percent",
      description: `範例優惠 ${i + 1}`,
      start: "2025-04-01",
      end: "2025-04-30",
      minSpend: 100 + i * 50,
      products: [categories[i % categories.length]],
      repeatable: false,
      target: i % 3 === 0 ? "VIP" : i % 3 === 1 ? "BIRTHDAY" : "ALL",
      owners: Math.floor(Math.random() * 100),
      used: Math.floor(Math.random() * 50)
    }));
  }

  function getStatus(promo) {
    const today = new Date();
    const start = new Date(promo.start);
    const end = new Date(promo.end);
    if (today < start) return "尚未開始";
    if (today > end) return "已過期";
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    return `進行中（剩 ${diff} 天）`;
  }

  function getUsagePercent(promo) {
    if (!promo.owners) return "0%";
    return Math.round((promo.used / promo.owners) * 100) + "%";
  }

  function handleCategoryChange(cat) {
    const exists = form.products.includes(cat);
    const updated = exists
      ? form.products.filter(c => c !== cat)
      : [...form.products, cat];
    setForm({ ...form, products: updated });
  }

  function addPromo() {
    if (!form.code || !form.discount || !form.start || !form.end) {
      alert("請填寫完整資訊！");
      return;
    }
    const newPromo = { ...form, owners: 0, used: 0 };
    setPromoList([...promoList, newPromo]);
    setForm({ code: "", discount: "", type: "percent", description: "", start: "", end: "", minSpend: "", products: [], repeatable: false, target: "ALL" });
    alert("成功新增優惠活動！");
  }

  function deletePromo(code) {
    if (confirm("確定要刪除此優惠活動嗎？")) {
      setPromoList(promoList.filter(p => p.code !== code));
    }
  }

  return React.createElement(Page, { title: "促銷活動管理" }, [
    React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `
        .promo-table th {
          background-color: #debd94;
        }
        .form-section h3 {
          color: #a9805b;
        }
        .category-checkbox {
          display: flex;
          align-items: center;
          margin-bottom: 6px;
          color: #774b30;
        }
        .category-checkbox input {
          margin-right: 6px;
        }
        .category-list {
          max-height: 150px;
          overflow-y: auto;
          border: 1px solid #ccc;
          border-radius: 6px;
          padding: 10px;
          background: #fff;
        }
      `
      }
    }),

    React.createElement("div", { style: { padding: "20px" } }, [

      React.createElement("table", { className: "promo-table", style: { width: "100%", marginBottom: "32px", borderCollapse: "collapse" } }, [
        React.createElement("thead", {}, React.createElement("tr", {}, [
          "代碼", "折扣", "說明", "條件", "對象", "期限", "狀態", "擁有人數", "使用次數", "使用 %", "操作"
        ].map((text, i) => React.createElement("th", { key: i, style: { padding: "10px", border: "1px solid #ccc" } }, text)))),

        React.createElement("tbody", {}, promoList.map((promo, i) =>
          React.createElement("tr", { key: i }, [
            React.createElement("td", {}, promo.code),
            React.createElement("td", {}, promo.type === "percent" ? `${promo.discount}%` : `$${promo.discount}`),
            React.createElement("td", {}, promo.description),
            React.createElement("td", {}, [
              React.createElement("div", {}, `最低 $${promo.minSpend}`),
              React.createElement("div", {}, "限定商品：" + (promo.products.join(", ") || "無")),
              React.createElement("div", {}, promo.repeatable ? "可重複使用" : "僅限一次")
            ]),
            React.createElement("td", {}, promo.target === "VIP" ? "VIP" : promo.target === "BIRTHDAY" ? "生日當月" : "所有人"),
            React.createElement("td", {}, `${promo.start} ~ ${promo.end}`),
            React.createElement("td", {}, getStatus(promo)),
            React.createElement("td", {}, promo.owners),
            React.createElement("td", {}, promo.used),
            React.createElement("td", {}, getUsagePercent(promo)),
            React.createElement("td", {}, React.createElement("button", {
              className: "btn", onClick: () => deletePromo(promo.code)
            }, "刪除"))
          ])
        ))
      ]),

      React.createElement("div", { className: "form-section" }, [
        React.createElement("h3", {}, "新增優惠活動"),
        React.createElement("div", { className: "form-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" } }, [

          React.createElement("div", {}, [
            React.createElement("label", {}, "優惠代碼"),
            React.createElement("input", {
              value: form.code,
              onChange: e => setForm({ ...form, code: e.target.value })
            })
          ]),

          React.createElement("div", {}, [
            React.createElement("label", {}, "折扣類型"),
            React.createElement("select", {
              value: form.type,
              onChange: e => setForm({ ...form, type: e.target.value })
            }, [
              React.createElement("option", { value: "percent" }, "折扣 (%)"),
              React.createElement("option", { value: "fixed" }, "折抵金額 (元)")
            ])
          ]),

          React.createElement("div", {}, [
            React.createElement("label", {}, "折扣數值"),
            React.createElement("input", {
              type: "number",
              value: form.discount,
              onChange: e => setForm({ ...form, discount: e.target.value })
            })
          ]),

          React.createElement("div", {}, [
            React.createElement("label", {}, "活動說明"),
            React.createElement("input", {
              value: form.description,
              onChange: e => setForm({ ...form, description: e.target.value })
            })
          ]),

          React.createElement("div", {}, [
            React.createElement("label", {}, "開始日期"),
            React.createElement("input", {
              type: "date",
              value: form.start,
              onChange: e => setForm({ ...form, start: e.target.value })
            })
          ]),

          React.createElement("div", {}, [
            React.createElement("label", {}, "結束日期"),
            React.createElement("input", {
              type: "date",
              min: form.start || undefined,
              value: form.end,
              onChange: e => setForm({ ...form, end: e.target.value })
            })
          ]),

          React.createElement("div", {}, [
            React.createElement("label", {}, "最低消費金額"),
            React.createElement("input", {
              type: "number",
              value: form.minSpend,
              onChange: e => setForm({ ...form, minSpend: e.target.value })
            })
          ]),

          React.createElement("div", {}, [
            React.createElement("label", {}, "發送對象"),
            React.createElement("select", {
              value: form.target,
              onChange: e => setForm({ ...form, target: e.target.value })
            }, [
              React.createElement("option", { value: "ALL" }, "所有人"),
              React.createElement("option", { value: "VIP" }, "VIP 專屬"),
              React.createElement("option", { value: "BIRTHDAY" }, "生日當月")
            ])
          ]),

          // 限定分類（多選 checkbox）
          React.createElement("div", { style: { gridColumn: "1 / span 2" } }, [
            React.createElement("label", {}, "限定分類（點選可複選）"),
            React.createElement("div", { className: "category-list" }, categories.map(cat =>
              React.createElement("label", { className: "category-checkbox", key: cat }, [
                React.createElement("input", {
                  type: "checkbox",
                  checked: form.products.includes(cat),
                  onChange: () => handleCategoryChange(cat)
                }),
                cat
              ])
            ))
          ])
        ]),
        React.createElement("button", { className: "btn", onClick: addPromo }, "新增活動")
      ])
    ])
  ]);
}

export default PromotionsPage;

window.PromotionsPage = PromotionsPage;
window.categories = categories;
window.generateSamplePromos = generateSamplePromos;
window.getStatus = getStatus;
window.today = today;
window.start = start;
window.end = end;
window.diff = diff;
window.getUsagePercent = getUsagePercent;
window.handleCategoryChange = handleCategoryChange;
window.exists = exists;
window.updated = updated;
window.addPromo = addPromo;
window.newPromo = newPromo;
window.deletePromo = deletePromo;
})();

// ===== MODULE: RevenuePage =====
(function() {
import Page from "../../components/Page.js";

function RevenuePage() {
  const products = [
    { name: "牛軋餅原味", price: 120 },
    { name: "牛軋餅蔓越莓口味", price: 130 },
    { name: "牛軋餅抹茶味", price: 130 },
    { name: "牛軋餅咖啡味", price: 130 },
    { name: "方塊酥抹茶味", price: 110 },
    { name: "方塊酥咖啡味", price: 110 },
    { name: "夏威夷莓果Q糖", price: 150 },
    { name: "可可夏威夷Q糖", price: 150 },
    { name: "港式芝麻糊Q糖", price: 140 },
    { name: "草莓牛軋糖", price: 140 },
    { name: "棗泥蛋黃酥", price: 180 },
    { name: "月娘酥", price: 160 },
    { name: "台式馬卡龍", price: 100 },
    { name: "吐司", price: 60 },
    { name: "葡萄吐司", price: 70 },
    { name: "肉桂捲", price: 90 },
    { name: "瑪德蓮", price: 85 }
  ];

  const paymentMethods = ["信用卡", "LinePay", "貨到付款"];
  const todayStr = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = React.useState(todayStr);
  const [showDetails, setShowDetails] = React.useState(false);

  const generateOrdersForDate = (dateStr) => {
    const orders = [];
    for (let j = 0; j < 15; j++) {
      const items = [];
      const itemCount = Math.floor(Math.random() * 3) + 1;
      for (let k = 0; k < itemCount; k++) {
        const p = products[Math.floor(Math.random() * products.length)];
        items.push({ name: p.name, qty: Math.floor(Math.random() * 3) + 1, price: p.price });
      }
      orders.push({
        id: `${dateStr}-${j + 1}`,
        date: dateStr,
        method: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
        items
      });
    }
    return orders;
  };

  const [orders, setOrders] = React.useState(() => generateOrdersForDate(todayStr));

  React.useEffect(() => {
    setOrders(generateOrdersForDate(selectedDate));
  }, [selectedDate]);

  const filteredOrders = orders;
  const total = filteredOrders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.qty * i.price, 0), 0);
  const avgOrder = filteredOrders.length ? Math.round(total / filteredOrders.length) : 0;

  const paymentDist = {};
  paymentMethods.forEach(method => (paymentDist[method] = 0));
  filteredOrders.forEach(o => (paymentDist[o.method] += o.items.reduce((s, i) => s + i.qty * i.price, 0)));

  React.useEffect(() => {
    const ctx = document.getElementById("paymentChart");
    if (!ctx) return;

    if (window.paymentChartInstance) {
      window.paymentChartInstance.destroy();
    }

    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: paymentMethods,
        datasets: [{
          data: paymentMethods.map(m => paymentDist[m]),
          backgroundColor: ["#f9c066", "#f58322", "#debd94"]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { font: { size: 14 } }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label;
                const value = context.raw;
                const percentage = total ? ((value / total) * 100).toFixed(1) : 0;
                return `${label}：$${value}（${percentage}%）`;
              }
            }
          },
          datalabels: {
            color: "#333",
            font: { size: 16, weight: "bold" },
            formatter: (value) => {
              const percent = total ? ((value / total) * 100).toFixed(1) : 0;
              return percent + "%";
            }
          }
        }
      },
      plugins: [ChartDataLabels]
    });

    window.paymentChartInstance = chart;

    return () => chart.destroy();
  }, [orders]);

  return React.createElement(Page, { title: "業績總攬" }, [
    React.createElement("div", {
      style: { background: "#fffbe6", padding: "20px", borderRadius: "10px", marginBottom: "20px" }
    }, [
      React.createElement("h2", { style: { fontSize: "28px", marginBottom: "10px" } }, "📅 選擇日期"),
      React.createElement("input", {
        type: "date",
        value: selectedDate,
        onChange: e => setSelectedDate(e.target.value),
        style: { fontSize: "20px", padding: "6px", borderRadius: "5px", border: "1px solid #ccc" }
      })
    ]),

    React.createElement("div", {
      style: { display: "flex", gap: "20px", marginBottom: "20px" }
    }, [
      React.createElement("div", {
        style: {
          backgroundColor: "#fdf3e7",
          padding: "16px",
          borderRadius: "10px",
          flex: "0 0 30%"
        }
      }, [
        React.createElement("h3", { style: { fontSize: "28px" } }, `總營收：$${total}`),
        React.createElement("p", { style: { fontSize: "24px" } }, `訂單數：${filteredOrders.length} 筆`),
        React.createElement("p", { style: { fontSize: "24px" } }, `平均每筆：$${avgOrder}`)
      ]),

      React.createElement("div", {
        style: {
          backgroundColor: "#fdf3e7",
          padding: "16px",
          borderRadius: "10px",
          flex: "0 0 65%",
          position: "relative",
          minHeight: "340px"
        }
      }, [
        React.createElement("h3", {
          style: {
            fontSize: "28px",
            marginBottom: "16px",
            textAlign: "start"
          }
        }, "付款方式分布"),

        React.createElement("div", {
          style: {
            position: "absolute",
            top: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            width: "80%",
            height: "80%"
          }
        }, [
          React.createElement("canvas", {
            id: "paymentChart",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }
          })
        ]),

        React.createElement("ul", {
          style: {
            position: "absolute",
            bottom: "16px",
            left: "30px",
            zIndex: 0,
            borderRadius: "8px",
            padding: "8px 12px"
          }
        }, paymentMethods.map((m, i) =>
          React.createElement("li", {
            key: i,
            style: {
              fontSize: "20px",
              marginBottom: "6px",
              whiteSpace: "nowrap"
            }
          }, `${m}：$${paymentDist[m]}`)
        ))
      ])
    ]),

    React.createElement("button", {
      className: "btn",
      onClick: () => setShowDetails(!showDetails),
      style: { marginBottom: "16px", fontSize: "20px" }
    }, showDetails ? "隱藏訂單明細" : "顯示訂單明細"),

    showDetails && React.createElement("div", {
      style: { background: "#fff", borderRadius: "10px", padding: "16px", border: "1px solid #ccc" }
    }, filteredOrders.map((order, idx) =>
      React.createElement("div", { key: idx, style: { marginBottom: "12px", borderBottom: "1px solid #eee", paddingBottom: "10px" } }, [
        React.createElement("strong", {}, `訂單 ${order.id}`),
        React.createElement("p", {}, `付款方式：${order.method}`),
        React.createElement("ul", {}, order.items.map((item, i) =>
          React.createElement("li", { key: i }, `${item.name} x ${item.qty} ($${item.price})`)
        ))
      ])
    ))
  ]);
}

export default RevenuePage;

window.RevenuePage = RevenuePage;
window.products = products;
window.paymentMethods = paymentMethods;
window.todayStr = todayStr;
window.generateOrdersForDate = generateOrdersForDate;
window.orders = orders;
window.j = j;
window.items = items;
window.itemCount = itemCount;
window.k = k;
window.p = p;
window.filteredOrders = filteredOrders;
window.total = total;
window.avgOrder = avgOrder;
window.paymentDist = paymentDist;
window.ctx = ctx;
window.chart = chart;
window.label = label;
window.value = value;
window.percentage = percentage;
window.percent = percent;
})();

// ===== MODULE: OrderHistory =====
(function() {
import Page from "../../components/Page.js";
import { generateOrders } from "../../utils/orderUtils.js";

function OrderHistory() {
  const [orders] = React.useState(generateOrders("history"));
  const [sortOption, setSortOption] = React.useState("orderDesc");

  const sorted = [...orders].sort((a, b) => {
    if (sortOption === "orderAsc") return a.id.localeCompare(b.id);
    if (sortOption === "orderDesc") return b.id.localeCompare(a.id);
    if (sortOption === "pickupAsc") return new Date(a.pickupTime) - new Date(b.pickupTime);
    if (sortOption === "pickupDesc") return new Date(b.pickupTime) - new Date(a.pickupTime);
    return 0;
  });

  return React.createElement(Page, { title: "📜 歷史訂單" }, [
    React.createElement("div", { style: { marginBottom: "20px" } }, [
      React.createElement("label", {}, "排序："),
      React.createElement("select", {
        value: sortOption,
        onChange: e => setSortOption(e.target.value),
        style: { margin: "0 10px" }
      }, [
        { value: "orderDesc", label: "下單最新→最舊" },
        { value: "orderAsc", label: "下單最舊→最新" },
        { value: "pickupAsc", label: "取貨近期→遠期" },
        { value: "pickupDesc", label: "取貨遠期→近期" }
      ].map(opt =>
        React.createElement("option", { key: opt.value, value: opt.value }, opt.label)
      ))
    ]),
    ...sorted.map((o, i) =>
      React.createElement("div", {
        key: o.id,
        style: {
          backgroundColor: "#fdf3e7",
          marginBottom: "16px",
          padding: "16px",
          borderRadius: "10px",
          border: "1px solid #ddd"
        }
      }, [
        React.createElement("h3", {}, `訂單編號：${o.id}`),
        React.createElement("p", {}, `下單時間：${o.orderTime}`),
        React.createElement("p", {}, `取貨時間：${o.pickupTime}`),
        React.createElement("p", {}, `姓名：${o.name}`),
        React.createElement("p", {}, `信箱：${o.email}`),
        React.createElement("p", {}, `電話：${o.phone}`),
        React.createElement("p", {}, `付款方式：${o.method}`),
        React.createElement("ul", {}, o.items.map((item, idx) =>
          React.createElement("li", { key: idx }, `${item.name} x ${item.qty}`)
        )),
        React.createElement("strong", {}, `總金額：$${o.total}`)
      ])
    )
  ]);
}

export default OrderHistory;

window.OrderHistory = OrderHistory;
window.sorted = sorted;
})();

// ===== MODULE: PendingOrders =====
(function() {
import Page from "../../components/Page.js";
import { generateOrders } from "../../utils/orderUtils.js";

function PendingOrders() {
  const [orders, setOrders] = React.useState(generateOrders("pending"));
  const [sortOption, setSortOption] = React.useState("orderDesc");
  const [statusFilter, setStatusFilter] = React.useState("全部");
  const [selectedOrders, setSelectedOrders] = React.useState([]);

  const statusList = ["全部", "待確認", "製作中", "可取貨"];

  const updateStatus = (id, newStatus) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const handleBatchUpdate = (newStatus) => {
    setOrders(prev =>
      prev.map(o =>
        selectedOrders.includes(o.id) ? { ...o, status: newStatus } : o
      )
    );
    setSelectedOrders([]);
  };

  const filtered = orders.filter(o =>
    statusFilter === "全部" || o.status === statusFilter
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "orderAsc") return a.id.localeCompare(b.id);
    if (sortOption === "orderDesc") return b.id.localeCompare(a.id);
    if (sortOption === "pickupAsc") return new Date(a.pickupTime) - new Date(b.pickupTime);
    if (sortOption === "pickupDesc") return new Date(b.pickupTime) - new Date(a.pickupTime);
    return 0;
  });

  return React.createElement(Page, { title: "📦 待出貨訂單" }, [
    React.createElement("div", { style: { marginBottom: "20px" } }, [
      React.createElement("label", {}, "狀態篩選："),
      React.createElement("select", {
        value: statusFilter,
        onChange: e => setStatusFilter(e.target.value),
        style: { margin: "0 10px" }
      }, statusList.map(s => React.createElement("option", { key: s }, s))),
      React.createElement("label", {}, "排序："),
      React.createElement("select", {
        value: sortOption,
        onChange: e => setSortOption(e.target.value),
        style: { margin: "0 10px" }
      }, [
        { value: "orderDesc", label: "下單最新→最舊" },
        { value: "orderAsc", label: "下單最舊→最新" },
        { value: "pickupAsc", label: "取貨近期→遠期" },
        { value: "pickupDesc", label: "取貨遠期→近期" }
      ].map(opt =>
        React.createElement("option", { key: opt.value, value: opt.value }, opt.label)
      )),
      selectedOrders.length > 0 && React.createElement("div", {
        style: { display: "inline-block", marginLeft: "20px" }
      }, [
        React.createElement("span", {}, "批次狀態變更："),
        ["待確認", "製作中", "可取貨", "已取貨"].map(s =>
          React.createElement("button", {
            key: s,
            onClick: () => handleBatchUpdate(s),
            style: {
              marginLeft: "5px",
              padding: "4px 8px",
              backgroundColor: "#fdf3e7",
              color: "#fff",
              border: "none",
              borderRadius: "4px"
            }
          }, s)
        )
      ])
    ]),

    ...sorted.map(o =>
      React.createElement("div", {
        key: o.id,
        style: {
          background: "#fdf3e7",
          padding: "16px",
          marginBottom: "16px",
          border: "1px solid #ccc",
          borderRadius: "10px"
        }
      }, [
        React.createElement("input", {
          type: "checkbox",
          checked: selectedOrders.includes(o.id),
          onChange: e => {
            const checked = e.target.checked;
            setSelectedOrders(prev =>
              checked ? [...prev, o.id] : prev.filter(id => id !== o.id)
            );
          },
          style: { marginRight: "10px" }
        }),
        React.createElement("h3", {}, `訂單編號：${o.id}`),
        React.createElement("p", {}, `下單時間：${o.orderTime}`),
        React.createElement("p", {}, `取貨時間：${o.pickupTime}`),
        React.createElement("p", {}, `姓名：${o.name}`),
        React.createElement("p", {}, `信箱：${o.email}`),
        React.createElement("p", {}, `電話：${o.phone}`),
        React.createElement("p", {}, `付款方式：${o.method}`),
        React.createElement("p", {}, "狀態："),
        React.createElement("select", {
          value: o.status,
          onChange: e => updateStatus(o.id, e.target.value)
        }, ["待確認", "製作中", "可取貨", "已取貨"].map(s =>
          React.createElement("option", { key: s, value: s }, s)
        )),
        React.createElement("ul", {}, o.items.map((item, idx) =>
          React.createElement("li", { key: idx }, `${item.name} x ${item.qty}`)
        )),
        React.createElement("strong", {}, `總金額：$${o.total}`)
      ])
    )
  ]);
}

export default PendingOrders;

window.PendingOrders = PendingOrders;
window.statusList = statusList;
window.updateStatus = updateStatus;
window.handleBatchUpdate = handleBatchUpdate;
window.filtered = filtered;
window.sorted = sorted;
window.checked = checked;
})();

// ===== MODULE: SalesOverviewPage =====
(function() {
import Page from "../../components/Page.js";

function SalesOverviewPage() {
  const [dateRange, setDateRange] = React.useState("today");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [summary, setSummary] = React.useState(null);
  const [rangeDisplay, setRangeDisplay] = React.useState("");

  const formatDisplayDate = (dateStr) => {
    const date = new Date(dateStr);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd}`;
  };

  const getDateRangeDisplay = () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    switch (dateRange) {
      case "today":
        return formatDisplayDate(today.toISOString());
      case "yesterday":
        return formatDisplayDate(yesterday.toISOString());
      case "last7":
        const d7 = new Date();
        d7.setDate(today.getDate() - 6);
        return `${formatDisplayDate(d7.toISOString())} ~ ${formatDisplayDate(today.toISOString())}`;
      case "thisMonth":
        const start = new Date(today.getFullYear(), today.getMonth(), 1);
        return `${formatDisplayDate(start.toISOString())} ~ ${formatDisplayDate(today.toISOString())}`;
      case "lastMonth":
        const startLM = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const endLM = new Date(today.getFullYear(), today.getMonth(), 0);
        return `${formatDisplayDate(startLM.toISOString())} ~ ${formatDisplayDate(endLM.toISOString())}`;
      case "custom":
        if (!startDate || !endDate) return "";
        return `${formatDisplayDate(startDate)} ~ ${formatDisplayDate(endDate)}`;
      default:
        return "";
    }
  };

  const getDateCount = () => {
    const today = new Date();
    let start, end;

    switch (dateRange) {
      case "today":
      case "yesterday":
        return 1;
      case "last7":
        return 7;
      case "thisMonth":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = today;
        break;
      case "lastMonth":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      case "custom":
        if (!startDate || !endDate) return 0;
        start = new Date(startDate);
        end = new Date(endDate);
        break;
    }

    if (start && end) {
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      return Math.max(diff, 1);
    }
    return 1;
  };

  const generateFakeData = () => {
    const days = getDateCount();
    const orders = days * 10;
    const itemsSold = orders * (Math.floor(Math.random() * 2) + 1);
    const sales = Math.floor(Math.random() * 10000 + 5000) * days;
    const discount = Math.floor(sales * 0.15);
    const received = sales - discount;

    const paymentMethods = {
      "信用卡": Math.floor(received * 0.4),
      "Line Pay": Math.floor(received * 0.3),
      "貨到付款": Math.floor(received * 0.25),
      "禮券折讓": received - Math.floor(received * 0.4) - Math.floor(received * 0.3) - Math.floor(received * 0.25)
    };

    setSummary({
      sales,
      discount,
      received,
      orders,
      itemsSold,
      avgPerOrder: Math.round(received / orders),
      avgItemsPerOrder: Math.round(itemsSold / orders * 10) / 10,
      paymentMethods
    });

    setRangeDisplay(getDateRangeDisplay());
  };

  const handleQuery = () => {
    if (dateRange === "custom") {
      if (!startDate || !endDate) {
        alert("請選擇起始與結束日期");
        return;
      }
      if (new Date(endDate) < new Date(startDate)) {
        alert("結束日期不能早於起始日期");
        return;
      }
    }
    generateFakeData();
  };

  return React.createElement(Page, { title: "營收總匯" }, [
    React.createElement("div", {
      style: { background: "#fff9eb", padding: "20px", borderRadius: "10px", marginBottom: "20px" }
    }, [
      React.createElement("label", { style: { fontSize: "20px", marginRight: "10px" } }, "選擇區間："),
      React.createElement("select", {
        value: dateRange,
        onChange: e => setDateRange(e.target.value),
        style: { fontSize: "20px", padding: "6px", marginRight: "10px", borderRadius: "5px" }
      }, [
        React.createElement("option", { value: "today" }, "今日"),
        React.createElement("option", { value: "yesterday" }, "昨日"),
        React.createElement("option", { value: "last7" }, "近7日"),
        React.createElement("option", { value: "thisMonth" }, "當月"),
        React.createElement("option", { value: "lastMonth" }, "上個月"),
        React.createElement("option", { value: "custom" }, "自選")
      ]),
      dateRange === "custom" && React.createElement("div", {
        style: { marginTop: "10px", marginBottom: "10px" }
      }, [
        React.createElement("input", {
          type: "date",
          value: startDate,
          onChange: e => setStartDate(e.target.value),
          style: { marginRight: "10px", padding: "6px", fontSize: "20px" }
        }),
        React.createElement("input", {
          type: "date",
          value: endDate,
          onChange: e => setEndDate(e.target.value),
          style: { padding: "6px", fontSize: "20px" },
          min: startDate || undefined
        })
      ]),
      React.createElement("button", {
        className: "btn",
        onClick: handleQuery,
        style: {
          fontSize: "20px",
          padding: "6px 14px",
          backgroundColor: "#f58322",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }
      }, "查詢")
    ]),

    summary && React.createElement("div", {
      style: { background: "#fdf3e7", padding: "20px", borderRadius: "10px", fontSize: "24px" }
    }, [
      React.createElement("h3", { style: { marginBottom: "10px" } }, "📅 統計區間"),
      React.createElement("p", {}, rangeDisplay),

      React.createElement("h3", { style: { marginTop: "60px" } }, "💰 營收資訊"),
      React.createElement("p", {}, `銷售金額：$${summary.sales}`),
      React.createElement("p", {}, `折讓金額：$${summary.discount}`),
      React.createElement("p", {}, `實收金額：$${summary.received}`),

      React.createElement("h3", { style: { marginTop: "50px" } }, "📊 統計資訊"),
      React.createElement("p", {}, `訂單數：${summary.orders} 筆`),
      React.createElement("p", {}, `銷售商品數：${summary.itemsSold} 件`),
      React.createElement("p", {}, `平均每單金額：$${summary.avgPerOrder}`),
      React.createElement("p", {}, `平均每單商品數：${summary.avgItemsPerOrder} 件`),

      React.createElement("h3", { style: { marginTop: "50px" } }, "💳 付款方式統計"),
      ...Object.entries(summary.paymentMethods).map(([method, amount], i) =>
        React.createElement("p", { key: i }, `${method}：$${amount}`)
      )
    ])
  ]);
}

export default SalesOverviewPage;

window.SalesOverviewPage = SalesOverviewPage;
window.formatDisplayDate = formatDisplayDate;
window.date = date;
window.yyyy = yyyy;
window.mm = mm;
window.dd = dd;
window.getDateRangeDisplay = getDateRangeDisplay;
window.today = today;
window.yesterday = yesterday;
window.d7 = d7;
window.start = start;
window.startLM = startLM;
window.endLM = endLM;
window.getDateCount = getDateCount;
window.diff = diff;
window.generateFakeData = generateFakeData;
window.days = days;
window.orders = orders;
window.itemsSold = itemsSold;
window.sales = sales;
window.discount = discount;
window.received = received;
window.paymentMethods = paymentMethods;
window.handleQuery = handleQuery;
})();

// ===== MODULE: SalesPage =====
(function() {
import Page from "../../components/Page.js";

function SalesPage() {
  return React.createElement(Page, { title: "銷售趨勢" }, [
    React.createElement("p", {}, "請從左側選單選擇：營收總匯、營收統計或銷售統計。")
  ]);
}

export default SalesPage;

window.SalesPage = SalesPage;
})();

// ===== MODULE: SalesProductPage =====
(function() {
import Page from "../../components/Page.js";

function SalesProductPage() {
    const [dateRange, setDateRange] = React.useState("today");
    const [category, setCategory] = React.useState("all");
    const [results, setResults] = React.useState([]);
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [displayRange, setDisplayRange] = React.useState("");
    const [chartType, setChartType] = React.useState("bar");

    const products = [
        { id: 1, name: "牛軋餅原味", category: "牛軋餅", price: 120 },
        { id: 2, name: "牛軋餅蔓越莓口味", category: "牛軋餅", price: 130 },
        { id: 3, name: "牛軋餅抹茶味", category: "牛軋餅", price: 130 },
        { id: 4, name: "牛軋餅咖啡味", category: "牛軋餅", price: 130 },
        { id: 5, name: "方塊酥抹茶味", category: "方塊酥", price: 110 },
        { id: 6, name: "方塊酥咖啡味", category: "方塊酥", price: 110 },
        { id: 7, name: "夏威夷莓果Q糖", category: "牛軋糖", price: 150 },
        { id: 8, name: "可可夏威夷Q糖", category: "牛軋糖", price: 150 },
        { id: 9, name: "港式芝麻糊Q糖", category: "牛軋糖", price: 140 },
        { id: 10, name: "草莓牛軋糖", category: "牛軋糖", price: 140 },
        { id: 11, name: "棗泥蛋黃酥", category: "中式酥點", price: 180 },
        { id: 12, name: "月娘酥", category: "中式酥點", price: 160 },
        { id: 13, name: "台式馬卡龍", category: "西式烘焙", price: 100 },
        { id: 14, name: "吐司", category: "吐司", price: 60 },
        { id: 15, name: "葡萄吐司", category: "吐司", price: 70 },
        { id: 16, name: "肉桂捲", category: "西式烘焙", price: 90 },
        { id: 17, name: "瑪德蓮", category: "西式烘焙", price: 85 }
    ];

    const formatDate = d => new Date(d).toLocaleDateString();

    const handleSearch = () => {
        let from = "", to = "";
        const today = new Date();
        switch (dateRange) {
            case "today":
                from = to = formatDate(today); break;
            case "yesterday":
                const y = new Date(today); y.setDate(today.getDate() - 1);
                from = to = formatDate(y); break;
            case "last7":
                const l7 = new Date(today); l7.setDate(today.getDate() - 6);
                from = formatDate(l7); to = formatDate(today); break;
            case "thisMonth":
                from = formatDate(new Date(today.getFullYear(), today.getMonth(), 1));
                to = formatDate(today); break;
            case "lastMonth":
                const f = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                const l = new Date(today.getFullYear(), today.getMonth(), 0);
                from = formatDate(f); to = formatDate(l); break;
            case "custom":
                if (!startDate || !endDate) return alert("請選擇起訖日");
                if (new Date(endDate) < new Date(startDate)) return alert("結束時間不可早於起始");
                from = formatDate(startDate); to = formatDate(endDate); break;
        }
        setDisplayRange(`${from} ~ ${to}`);

        const filtered = products.filter(p => category === "all" || p.category === category);
        const result = filtered.map(p => {
            const qty = Math.floor(Math.random() * 20 + 5);
            return { ...p, quantity: qty, revenue: qty * p.price };
        }).sort((a, b) => b.revenue - a.revenue); // 自動排序
        setResults(result);
        setTimeout(() => drawChart(result), 100);
    };

    const drawChart = (data) => {
        const prettyColors = [
            "#a9805b",
            "#9f5933",
            "#774b30",
            "#debd94",
            "#f58322",
            "#f9c066",
            "#c96f3f",
            "#e8a86e",
            "#c4a07a",
            "#8c6648",
            "#b57246",
            "#f4a45c",
            "#d1a378",
            "#f6d7ac",
            "#e19c68",
            "#d38755",
            "#b58868"
        ];
        const canvas = document.getElementById("salesChart");
        if (!canvas) return;
        if (window.chartInstance) window.chartInstance.destroy();

        const ctx = canvas.getContext("2d");
        const labels = data.map(p => p.name);
        const values = data.map(p => p.revenue);

        const colors = prettyColors.slice(0, data.length);
        const bgColor = "#f58322";

        const config = {
            type: chartType === "line" ? "line"
                : chartType === "pie" ? "pie"
                    : "bar",
            data: {
                labels,
                datasets: [{
                    label: "銷售金額",
                    data: values,
                    backgroundColor: chartType === "pie" ? colors : bgColor,
                    borderColor: "#a9805b",
                    fill: false,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: chartType === "pie" },
                    tooltip: {
                        callbacks: {
                            label: ctx => `$${ctx.raw.toLocaleString()}`
                        }
                    }
                },
                scales: chartType === "pie" ? {} : {
                    x: { ticks: { font: { size: 14 } } },
                    y: { ticks: { font: { size: 14 } } }
                }
            }
        };

        window.chartInstance = new Chart(ctx, config);
    };

    React.useEffect(() => {
        if (results.length > 0) {
            drawChart(results);
        }
    }, [results, chartType]);


    const getTopProductName = () =>
        results.length ? results.reduce((a, b) => (a.revenue > b.revenue ? a : b)).name : "";

    const getCategorySubtotals = () => {
        const subtotals = {};
        results.forEach(p => {
            if (!subtotals[p.category]) subtotals[p.category] = { quantity: 0, revenue: 0 };
            subtotals[p.category].quantity += p.quantity;
            subtotals[p.category].revenue += p.revenue;
        });
        return subtotals;
    };

    return React.createElement(Page, { title: "銷售統計" }, [
        // 查詢區
        React.createElement("div", {
            style: { background: "#fff9eb", padding: "20px", borderRadius: "10px", marginBottom: "20px" }
          }, [
            React.createElement("label", { style: { marginRight: "10px", fontSize: "22px" } }, "時間區間："),
            React.createElement("select", {
              value: dateRange,
              onChange: e => setDateRange(e.target.value),
              style: { fontSize: "18px", padding: "6px", marginRight: "40px", borderRadius: "6px" }
            }, [
              React.createElement("option", { value: "today" }, "今日"),
              React.createElement("option", { value: "yesterday" }, "昨日"),
              React.createElement("option", { value: "last7" }, "近7日"),
              React.createElement("option", { value: "thisMonth" }, "當月"),
              React.createElement("option", { value: "lastMonth" }, "上個月"),
              React.createElement("option", { value: "custom" }, "自選")
            ]),
          
            ...(dateRange === "custom" ? [
              React.createElement("div", { style: { marginTop: "10px", marginBottom: "10px" } }, [
                React.createElement("input", {
                  type: "date",
                  value: startDate,
                  onChange: e => setStartDate(e.target.value),
                  style: {
                    marginRight: "10px",
                    fontSize: "18px",
                    padding: "6px",
                    borderRadius: "5px"
                  }
                }),
                React.createElement("input", {
                  type: "date",
                  value: endDate,
                  min: startDate || undefined,
                  onChange: e => setEndDate(e.target.value),
                  style: {
                    fontSize: "18px",
                    padding: "6px",
                    borderRadius: "5px"
                  }
                })
              ])
            ] : []),
          
            React.createElement("label", { style: { marginRight: "10px", fontSize: "22px" } }, "種類："),
            React.createElement("select", {
              value: category,
              onChange: e => setCategory(e.target.value),
              style: {
                fontSize: "18px",
                padding: "6px",
                marginRight: "40px",
                borderRadius: "6px"
              }
            }, [
              React.createElement("option", { value: "all" }, "全部"),
              React.createElement("option", { value: "牛軋餅" }, "牛軋餅"),
              React.createElement("option", { value: "方塊酥" }, "方塊酥"),
              React.createElement("option", { value: "牛軋糖" }, "牛軋糖"),
              React.createElement("option", { value: "中式酥點" }, "中式酥點"),
              React.createElement("option", { value: "西式烘焙" }, "西式烘焙"),
              React.createElement("option", { value: "吐司" }, "吐司")
            ]),
          
            React.createElement("button", {
              onClick: handleSearch,
              style: {
                fontSize: "18px",
                padding: "6px 14px",
                backgroundColor: "#f58322",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }
            }, "查詢"),
          
            displayRange && React.createElement("p", {
              style: { marginTop: "16px", fontSize: "22px", color: "#555" }
            }, `📅 統計區間：${displayRange}`)
          ])
          ,

        // 圖表類型切換與圖表區塊
        results.length > 0 && React.createElement("div", {
            style: { marginBottom: "20px", background: "#fdf3e7", padding: "20px", borderRadius: "10px" }
        }, [
            React.createElement("div", { style: { marginBottom: "10px" } }, [
                React.createElement("strong", {}, "圖表類型："),
                ["bar", "line", "pie"].map(type =>
                    React.createElement("button", {
                        onClick: () => setChartType(type),
                        style: {
                            marginRight: "10px",
                            padding: "6px 10px",
                            backgroundColor: chartType === type ? "#f58322" : "#ccc",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px"
                        }
                    }, {
                        bar: "柱狀圖", line: "折線圖", pie: "圓餅圖"
                    }[type])
                )
            ]),
            React.createElement("div", {
                style: { width: "100%", height: "300px" }
            }, [
                React.createElement("canvas", { id: "salesChart" })
            ])
        ]),

        // 銷售表格
        results.length > 0 && React.createElement("div", {
            style: { background: "#fff", padding: "20px", borderRadius: "10px" }
        }, [
            React.createElement("h2", {}, `🔥 銷售冠軍：${getTopProductName()}`),
            React.createElement("table", { style: { width: "100%", borderCollapse: "collapse" } }, [
                React.createElement("thead", {}, React.createElement("tr", {}, [
                    "編號", "品名", "分類", "銷售數量", "銷售金額"
                ].map(t => React.createElement("th", { style: { padding: "8px", textAlign: "left" } }, t)))),
                React.createElement("tbody", {}, results.map((p, i) =>
                    React.createElement("tr", { key: i }, [
                        React.createElement("td", { style: { padding: "8px" } }, p.id),
                        React.createElement("td", { style: { padding: "8px" } }, p.name),
                        React.createElement("td", { style: { padding: "8px" } }, p.category),
                        React.createElement("td", { style: { padding: "8px" } }, p.quantity),
                        React.createElement("td", { style: { padding: "8px" } }, `$${p.revenue.toLocaleString()}`)
                    ])
                ))
            ]),

            // 類別小計
            React.createElement("div", {
                style: { marginTop: "20px", fontSize: "20px" }
            }, [
                React.createElement("h4", {}, "📦 類別小計"),
                ...Object.entries(getCategorySubtotals()).map(([cat, val]) =>
                    React.createElement("p", {}, `${cat}：共 ${val.quantity} 件，金額 $${val.revenue.toLocaleString()}`)
                )
            ])
        ])
    ]);
}

export default SalesProductPage;

window.SalesProductPage = SalesProductPage;
window.products = products;
window.formatDate = formatDate;
window.handleSearch = handleSearch;
window.from = from;
window.today = today;
window.y = y;
window.l7 = l7;
window.f = f;
window.l = l;
window.filtered = filtered;
window.result = result;
window.qty = qty;
window.drawChart = drawChart;
window.prettyColors = prettyColors;
window.canvas = canvas;
window.ctx = ctx;
window.labels = labels;
window.values = values;
window.colors = colors;
window.bgColor = bgColor;
window.config = config;
window.getTopProductName = getTopProductName;
window.getCategorySubtotals = getCategorySubtotals;
window.subtotals = subtotals;
})();

// ===== MODULE: SalesRevenuePage =====
(function() {
import Page from "../../components/Page.js";

function SalesRevenuePage() {
  const [mode, setMode] = React.useState("month");
  const [chartData, setChartData] = React.useState({ total: 0, data: [] });
  const [selectedMonth, setSelectedMonth] = React.useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
  });
  const [chartType, setChartType] = React.useState("line");

  React.useEffect(() => {
    generateChartData();
  }, [mode, selectedMonth]);

  React.useEffect(() => {
    if (chartData && chartData.data.length > 0) drawChart(chartData);
  }, [chartData, chartType]);

  const generateChartData = () => {
    const data = [];
    let total = 0;

    if (mode === "month") {
      const [year, month] = selectedMonth.split("-").map(Number);
      const daysInMonth = new Date(year, month, 0).getDate();
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month - 1, i);
        const weekday = date.toLocaleDateString("zh-TW", { weekday: "short" });
        const amount = Math.floor(Math.random() * 5000 + 3000);
        total += amount;
        data.push({ day: String(i).padStart(2, "0"), weekday, amount });
      }
    } else if (mode === "quarter") {
      const quarters = ["01~03", "04~06", "07~09", "10~12"];
      for (let i = 0; i < 4; i++) {
        const current = Math.floor(Math.random() * 100000 + 80000);
        const previous = Math.random() > 0.2 ? Math.floor(current * (Math.random() * 0.4 + 0.7)) : null;
        total += current;
        data.push({ label: quarters[i], current, previous });
      }
    } else if (mode === "year") {
      for (let i = 0; i < 12; i++) {
        const current = Math.floor(Math.random() * 80000 + 60000);
        const previous = Math.random() > 0.2 ? Math.floor(current * (Math.random() * 0.4 + 0.7)) : null;
        total += current;
        data.push({ label: `${i + 1}月`, current, previous });
      }
    }

    setChartData({ total, data });
  };

  const drawChart = ({ data }) => {
    const canvas = document.getElementById("chartCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (window.chartInstance) window.chartInstance.destroy();

    const labels = mode === "month" ? data.map(d => d.day) : data.map(d => d.label);
    const currentData = mode === "month" ? data.map(d => d.amount) : data.map(d => d.current);
    const previousData = mode !== "month" ? data.map(d => d.previous ?? null) : null;

    window.chartInstance = new Chart(ctx, {
      type: chartType,
      data: {
        labels,
        datasets: [
          {
            label: "本期營收",
            data: currentData,
            backgroundColor: "#f58322",
            borderColor: "#f58322",
            fill: false,
            tension: 0.4
          },
          ...(previousData ? [{
            label: "同期營收",
            data: previousData,
            backgroundColor: "#a9805b",
            borderColor: "#a9805b",
            fill: false,
            tension: 0.4
          }] : [])
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { font: { size: 14 } }
          }
        }
      }
    });
  };

  const renderDetailTable = () => {
    if (mode === "month") return renderMonthTable();
    return renderComparisonTable();
  };

  const renderMonthTable = () => (
    React.createElement("div", {
      style: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "18px",
        marginBottom: "20px"
      }
    }, [
      React.createElement("h3", { style: { marginBottom: "10px" } }, "📅 營收明細"),
      React.createElement("table", { style: { width: "100%", borderCollapse: "collapse" } }, [
        React.createElement("thead", {}, React.createElement("tr", {}, [
          React.createElement("th", { style: { textAlign: "left", padding: "8px" } }, "日期"),
          React.createElement("th", { style: { textAlign: "left", padding: "8px" } }, "星期"),
          React.createElement("th", { style: { textAlign: "left", padding: "8px" } }, "金額")
        ])),
        React.createElement("tbody", {}, chartData.data.map((row, i) =>
          React.createElement("tr", { key: i }, [
            React.createElement("td", { style: { padding: "8px" } }, row.day),
            React.createElement("td", { style: { padding: "8px" } }, row.weekday),
            React.createElement("td", { style: { padding: "8px" } }, `$${row.amount.toLocaleString()}`)
          ])
        ))
      ])
    ])
  );

  const renderComparisonTable = () => (
    React.createElement("div", {
      style: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "18px",
        marginBottom: "20px"
      }
    }, [
      React.createElement("h3", { style: { marginBottom: "10px" } }, "📅 營收明細"),
      React.createElement("table", { style: { width: "100%", borderCollapse: "collapse" } }, [
        React.createElement("thead", {}, React.createElement("tr", {}, [
          React.createElement("th", { style: { textAlign: "left", padding: "8px" } }, "月份"),
          React.createElement("th", { style: { textAlign: "left", padding: "8px" } }, "金額"),
          React.createElement("th", { style: { textAlign: "left", padding: "8px" } }, "前一年同期")
        ])),
        React.createElement("tbody", {}, chartData.data.map((item, idx) => {
          const increase = item.previous != null && item.current > item.previous;
          const decrease = item.previous != null && item.current < item.previous;
          const color = item.previous == null ? "black" : increase ? "green" : decrease ? "red" : "black";
          const arrow = increase ? " ▲" : decrease ? " ▼" : "";
          return React.createElement("tr", { key: idx }, [
            React.createElement("td", { style: { padding: "8px" } }, item.label),
            React.createElement("td", { style: { padding: "8px", color } }, item.previous == null ? "-" : `$${item.current.toLocaleString()}${arrow}`),
            React.createElement("td", { style: { padding: "8px", color: "black" } }, item.previous == null ? "-" : `$${item.previous.toLocaleString()}`)
          ]);
        }))
      ])
    ])
  );

  return React.createElement(Page, { title: "營收統計" }, [
    React.createElement("div", {
      style: {
        background: "#fff9eb",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }
    }, [
      React.createElement("label", {
        style: { fontSize: "20px", marginRight: "10px" }
      }, "選擇統計方式："),

      React.createElement("select", {
        value: mode,
        onChange: e => setMode(e.target.value),
        style: {
          fontSize: "18px",
          padding: "6px",
          borderRadius: "6px",
          marginRight: "10px"
        }
      }, [
        React.createElement("option", { value: "month" }, "月營收"),
        React.createElement("option", { value: "quarter" }, "季營收"),
        React.createElement("option", { value: "year" }, "年營收")
      ]),

      mode === "month" && React.createElement("input", {
        type: "month",
        value: selectedMonth,
        onChange: e => setSelectedMonth(e.target.value),
        style: { fontSize: "18px", padding: "6px", borderRadius: "6px" }
      })
    ]),

    React.createElement("div", {
      style: {
        background: "#fdf3e7",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "24px",
        marginBottom: "20px"
      }
    }, [
      React.createElement("h3", { style: { marginBottom: "10px" } }, "💰 總營收"),
      React.createElement("p", {}, `$${chartData.total.toLocaleString()}`),

      React.createElement("div", {
        style: { marginTop: "20px", display: "flex", alignItems: "center", gap: "10px" }
      }, [
        React.createElement("strong", {}, "圖表類型："),
        React.createElement("button", {
          onClick: () => setChartType("line"),
          style: {
            fontSize: "16px",
            padding: "6px 10px",
            backgroundColor: chartType === "line" ? "#f58322" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }
        }, "折線圖"),
        React.createElement("button", {
          onClick: () => setChartType("bar"),
          style: {
            fontSize: "16px",
            padding: "6px 10px",
            backgroundColor: chartType === "bar" ? "#f58322" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }
        }, "柱狀圖")
      ]),

      React.createElement("div", {
        style: {
          marginTop: "20px",
          height: "300px",
          position: "relative"
        }
      }, [
        React.createElement("canvas", { id: "chartCanvas" })
      ])
    ]),

    renderDetailTable()
  ]);
}

export default SalesRevenuePage;

window.SalesRevenuePage = SalesRevenuePage;
window.today = today;
window.generateChartData = generateChartData;
window.data = data;
window.total = total;
window.daysInMonth = daysInMonth;
window.i = i;
window.date = date;
window.weekday = weekday;
window.amount = amount;
window.quarters = quarters;
window.current = current;
window.previous = previous;
window.drawChart = drawChart;
window.canvas = canvas;
window.ctx = ctx;
window.labels = labels;
window.currentData = currentData;
window.previousData = previousData;
window.renderDetailTable = renderDetailTable;
window.renderMonthTable = renderMonthTable;
window.renderComparisonTable = renderComparisonTable;
window.increase = increase;
window.decrease = decrease;
window.color = color;
window.arrow = arrow;
})();

// --- Main Mount Point ---
const root = document.getElementById("root");
if (root) {
  ReactDOM.render(
    React.createElement(Sidebar), // 或改為其他預設元件
    root
  );
}
