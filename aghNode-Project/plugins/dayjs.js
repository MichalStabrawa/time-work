import dayjs from 'dayjs';

export default function (ctx, inject) {
    ctx.$dayjs = dayjs;
    inject('dayjs', dayjs);
}