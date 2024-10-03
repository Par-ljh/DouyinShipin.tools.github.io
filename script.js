function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 注册逻辑
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (regPassword!== confirmPassword) {
        alert('两次输入的密码不一致！');
    } else {
        // 假设注册成功后，将账号信息存储到本地存储（仅为示例，实际应用中可能需要服务器端存储和验证）
        localStorage.setItem(regUsername, regPassword);
        alert('注册成功！你可以切换到登录页面登录。');
    }
});

// 登录逻辑
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // 从本地存储中获取注册时存储的密码进行验证
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        // 显示工具页面
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.tool-page').style.display = 'block';
    } else {
        alert('用户名或密码错误！');
    }
});

// 假设的视频提取逻辑（实际中需要更复杂的实现）
document.querySelector('.extract-button').addEventListener('click', function () {
    const videoLink = document.querySelector('.input-container input').value;
    if (videoLink) {
        // 这里可以进行实际的视频提取操作，目前只是模拟提示
        alert('正在提取视频：' + videoLink);
    } else {
        alert('请输入抖音视频链接。');
    }
});