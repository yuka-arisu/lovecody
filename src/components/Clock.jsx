import React, { useState, useEffect } from 'react';

const Clock = () => {
    // 1. 定义状态，初始值为当前时间
    const [now, setNow] = useState(new Date());

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const city = timeZone.split("/").pop();


    // 2. 使用 useEffect 处理副作用（定时器）
    useEffect(() => {
        // 组件挂载时设置定时器
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        // 关键：组件卸载时清理定时器，防止内存泄漏
        return () => clearInterval(timer);
    }, []); // 空数组表示仅在挂载时运行一次

    // 3. 处理显示逻辑（格式化）
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdayNames = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

    const formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}-${String(now.getDate()).padStart(2, '0')}`;
    const weekday = weekdayNames[now.getDay()];

    return (
        <div>
            <div id='clock'>
                {hours}:{minutes}:{seconds}
            </div>
            <div id='date'>
                {formattedDate} &nbsp; {weekday} &nbsp; {city}
            </div>
        </div>
    );
};

export default Clock;