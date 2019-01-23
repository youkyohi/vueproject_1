import {fillzero} from './fillzero'

export default {
    date(time){
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let date = d.getDate();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();

        return `${year}年${fillzero(month)}月${fillzero(date)}日${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`
    }
}