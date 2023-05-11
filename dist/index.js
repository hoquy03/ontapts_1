"use strict";
class Sinhvien {
    constructor(id, name, gioitinh, diemtoan, diemly) {
        this.id = id;
        this.name = name;
        this.gioitinh = gioitinh;
        this.diemtoan = diemtoan;
        this.diemly = diemly;
    }
}
;
class Sinhviensive {
    constructor(listsinhvien) {
        this.listsinhvien = listsinhvien;
    }
    show() {
        const tbody = document.getElementById('tbody');
        let hung = this.listsinhvien.map((item, index) => {
            let diemtb = (item.diemly + item.diemtoan) / 2;
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${(item.gioitinh) ? "nam" : "nu"}</td>
                <td>${item.diemtoan}</td>
                <td>${item.diemly}</td>
                <td>${diemtb}</td>
                <td> <button type="button" class="btn btn-danger"  onclick="halete(this)" id="delete">Xoa</button></td>
            </tr>`;
        }).join('');
        tbody.innerHTML = hung;
    }
    find() {
        const btnsearch = document.getElementById('btnsearch');
        btnsearch.onclick = () => {
            const valueinput = document.getElementById('valueinput').value;
            let elemeninput = this.listsinhvien.find((item) => {
                return valueinput === item.id;
            });
            if (elemeninput) {
                this.listsinhvien = [elemeninput];
                this.show();
            }
            else {
                alert('khong tim thay');
            }
        };
    }
    delete(eleme) {
        const index = Number(eleme.id);
        this.listsinhvien.splice(index, 1);
        this.show();
    }
}
let sinhvien1 = new Sinhvien('a', 'hồ quý', true, 10, 14);
let sinhvien2 = new Sinhvien('b', 'hồ minh', false, 10, 20);
let sinhvien3 = new Sinhvien('c', 'hồ chiến', true, 10, 30);
let arrsinhvien = [sinhvien1, sinhvien2, sinhvien3];
const listsinhvienadd = new Sinhviensive(arrsinhvien);
listsinhvienadd.show();
listsinhvienadd.find();
function halete(eleme) {
    listsinhvienadd.delete(eleme);
}
