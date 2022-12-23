import React, { Component } from 'react';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstClick: false,
            secondClick: false
        }

        this.onClick = this.onClick.bind(this);
        this.styleChange = this.styleChange.bind(this);
    }

    styleChange(el, num) {
        if (num === 1) {
            el.target.style.backgroundColor = '#74EAEB';
            el.target.style.color = '#5D30EB';
        } else {
            el.target.style.backgroundColor = '#F5E850';
            el.target.style.color = '##2E60EB';
        } 
    }

    onClick(el, id) {
        const { firstClick, secondClick } = this.state;
        let styleId;

        if (id === 1) {
            if (!firstClick) {
                styleId = 1;
            } else styleId = 2;
            this.setState({firstClick: !firstClick});
        } else {
            if (!secondClick) {
                styleId = 2;
            } else styleId = 1;
            this.setState({secondClick: !secondClick});
        }

        this.styleChange(el, styleId); 
    }

    render() {
        return (
            <div>
                <p>Дата і місце народження: 4 березня 2003 року, м. Київ</p>
                <p>Освіта:
                    <br/>Ліцей "ІДЕАЛ", м. Вишневе;
                    <br/>НТУУ "КПІ", м. Київ
                </p>

                <p>Хобі:</p>
                <ul>
                    <li>Перегляд фільмів</li>
                    <li>Астрологія</li>
                    <li onClick={this.onClick} id={1}>Спорт</li>
                    <li onClick={this.onClick} id={2}>Приготування їжі</li>
                </ul>

                <p>Улюблені фільми:</p>
                <ol>
                    <li>"Американський психопат", 2000</li>
                    <li>"Сутінки", 2008</li>
                    <li>"50 перших поцілунків", 2004</li>
                    <li>"Диявол носить "Прада", 2006</li>
                </ol>

                <p><b>Київ</b> — столиця України, одне з найбільших і найстаріших міст Європи. 
                    Його населення становить понад 2,8 млн чол.<br/><br/>Про Київ є багато цікавих фактів. 
                    Наприклад, найдовша протяжність вулиці в столиці належить Броварському проспекту. 
                    Його довжина просто <br/>феноменальна - цілих 14 кілометрів! Ну і на противагу 
                    попередньому факту - найкоротша вулиця має довжину всього лише якихось 50 метрів, 
                    <br/>і це - розташований поруч з Арсенальної площею Інженерний провулок. У складі 
                    цієї вулички - всього-лише три будинки. Найбільш давньою <br/>вулицею столиці є 
                    Володимирська, її вік уже перевалив за тисячоліття!
                </p>

                <a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2" target="_blank">
                    <img src="./img/kyiv.jpg" alt="Kyiv" width="500px" />
                </a>
            </div>
        );
    }
}
