import React, { useState} from "react";

export default function GraduationPoint() {
    const [point, setPoint] = useState({});
    const [finalPoint, setFinalPoint] = useState(0);

    const handleChange = event => {
        const subject = event.target.name;
        const point = parseFloat(event.target.value);
        setPoint(points => ({...points, [subject]: point}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        pointCalculate(point);
    }

    const pointCalculate = points => {
        const sciencePoint = (points.first + points.second + points.third) / 3;
        const examAverage = (points.math + points.literature + points.english + sciencePoint + points.encourage) / 4 * 7;
        const average = points.average * 3;
        console.log(points);
        setFinalPoint((examAverage + average) / 10 + points.priority);
    }

    return (
        <div>
            <p>Tính điểm</p>
            <form onSubmit = {handleSubmit}>
                <label>Điểm TB lớp 12</label>
                <input 
                    type = 'text'
                    name = 'average' 
                    onChange = {handleChange} 
                />
                <label>Toán</label>
                <input 
                    type = 'text'
                    name = 'math'  
                    onChange = {handleChange} 
                />
                <label>Văn</label>
                <input 
                    type = 'text'
                    name = 'literature'
                    onChange = {handleChange}   
                />
                <label>Ngoại ngữ</label>
                <input 
                    type = 'text'
                    name = 'english'  
                    onChange = {handleChange} 
                />
                <label>Môn tổ hợp 1</label>
                <input 
                    type = 'text'
                    name = 'first'  
                    onChange = {handleChange} 
                />
                <label>Môn tổ hợp 2</label>
                <input 
                    type = 'text'
                    name = 'second'  
                    onChange = {handleChange} 
                />
                <label>Môn tổ hợp 3</label>
                <input 
                    type = 'text'
                    name = 'third'
                    onChange = {handleChange}   
                />
                <label>Điểm khuyến khích (Nếu có)</label>
                <input 
                    type = 'text'
                    name = 'encourage'
                    onChange = {handleChange}   
                />
                <label>Điểm ưu tiến (Nếu có)</label>
                <input 
                    type = 'text'
                    name = 'priority'
                    onChange = {handleChange}   
                />
                <label>Nhớ nhập đúng nhá!</label>
                <input
                    type = 'submit'
                    value = 'Tính điểm'
                />
            </form>
            <p>{finalPoint}</p>
            <p>Bạn đã {(finalPoint >= 5 ? 'tốt nghiệp' : 'trượt')}</p>
        </div>
    );
}