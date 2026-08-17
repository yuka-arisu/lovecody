import React, { useState, useEffect } from 'react';

const Clock = () => {
    // 1. 定义状态，初始值为当前时间
    const [now, setNow] = useState(new Date());

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
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const formattedDate = `${monthNames[now.getMonth()]}-${String(now.getDate()).padStart(2, '0')}, ${now.getFullYear()}`;
    const weekday = weekdayNames[now.getDay()];

    return (
        <div>
            <div id='clock'>
                {hours}:{minutes}:{seconds}
            </div>
            <div id='date'>
                {formattedDate} &nbsp;&nbsp; {weekday}
            </div>
        </div>
    );
};

export default Clock;