const colorArrs = [
    {
        hexColor: "#F55A5A",
        name: "Carnation"
    }
]

const selectEl = document.getElementById('color-select')
const inputEl = document.getElementById("color-input")
const btnEl = document.getElementById("scheme-btn")

// 下拉菜单渲染
function renderSelect() {
    let html = ''
    colorArrs.forEach((item) => {
        html += `
            <option value="${item.hexColor}">${item.name}</option>
        `
    })
    document.getElementById('color-select').innerHTML = html
}
renderSelect()



function getColorName(hexColor) {
    const colorParam = hexColor.slice(1)
    fetch(`https://www.thecolorapi.com/id?hex=${colorParam}`)
        .then(res => res.json())
        .then(json => {
            colorArrs.push({
                hexColor: hexColor,
                name: json.name.value 
            })
            renderSelect()
            selectEl.value = hexColor
        })
}

// input 监听
inputEl.addEventListener("change", (event) => {
    const hexColor = event.target.value;
    console.log("changed: " + hexColor)
    getColorName(hexColor)
})

// select 监听
selectEl.addEventListener('change', (event) => {
    const hexColor = event.target.value;
    inputEl.value = hexColor;
})

function renderScheme(colors) {
    let html = ''
    colors.forEach(item => {
        html += `
            <div class="scheme-item">
                <div class="scheme-item-bg" style="background-color: ${item.hex.value}"></div>
                <p class="scheme-item-hex">${item.hex.value}</p>
            </div>
        `
    })
    document.getElementById('scheme').innerHTML = html
}

// button 监听
btnEl.addEventListener('click', (event) => {
    const hexColor = inputEl.value.slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&count=5`)
        .then(res => res.json())
        .then(json => {
            renderScheme(json.colors)
        })
})

// 复制颜色事件监听：点击整个 item（色块或 hex 文字）都能复制
document.getElementById('scheme').addEventListener('click', event => {
    const itemEl = event.target.closest('.scheme-item');
    if (!itemEl) return;
    const hexEl = itemEl.querySelector('.scheme-item-hex');
    if (!hexEl) return;
    const hexColor = hexEl.innerText.trim();
    copyText(hexColor);
})

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log(`复制成功: ${text}`);
            showToast(`已复制：${text}`);
        })
        .catch(err => {
            console.error('复制失败:', err);
            
        });
}

// 通用的 Toast 弹出函数
function showToast(message, type = 'success') {
    // 创建一个 div 元素
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerText = message;
    
    // 如果是错误提示，可以加个特殊的样式
    if(type === 'error') {
        toast.style.backgroundColor = '#ff4d4f';
    }

    // 将它添加到页面中
    document.body.appendChild(toast);

    // 2秒后淡出并移除该元素
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300); // 动画结束后彻底从 DOM 中删除
    }, 2000);
}
