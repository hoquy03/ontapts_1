class Sinhvien {
    id:string;
    name:string;
    gioitinh:boolean;
    diemtoan:number;
    diemly:number;
    constructor(id:string,name:string,gioitinh:boolean,diemtoan:number,diemly:number,){
        this.id = id;
        this.name = name;
        this.gioitinh = gioitinh;
        this.diemtoan = diemtoan;
        this.diemly = diemly;
    }
};
interface sinhvien{
    show():void;
    find():void;
    delete(elem:HTMLElement):void;
}
class Sinhviensive implements sinhvien{
    listsinhvien:Sinhvien[];
    constructor(listsinhvien:Sinhvien[]){
        this.listsinhvien = listsinhvien

    }
    show(): void {
        const tbody:HTMLElement = document.getElementById('tbody') as HTMLElement;
        let hung:any = this.listsinhvien.map((item:Sinhvien,index:number):string=>{
            let diemtb:number = (item.diemly + item.diemtoan)/2;
            return `
            <tr>
                <td>${index+1}</td>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${(item.gioitinh)?"nam":"nu"}</td>
                <td>${item.diemtoan}</td>
                <td>${item.diemly}</td>
                <td>${diemtb}</td>
                <td> <button type="button" class="btn btn-danger"  onclick="halete(this)" id="delete">Xoa</button></td>
            </tr>`
        }).join('');
            tbody.innerHTML = hung;
    }
    find(): void {
        const btnsearch:HTMLButtonElement = document.getElementById('btnsearch') as HTMLButtonElement;
        btnsearch.onclick = ():void =>{
            const valueinput = (document.getElementById('valueinput') as HTMLInputElement).value;
            let elemeninput:Sinhvien | undefined = this.listsinhvien.find((item:Sinhvien):boolean=>{
                return valueinput ===  item.id
            });
            if(elemeninput){
                this.listsinhvien = [elemeninput];
                this.show();
            }else{
                alert('khong tim thay');
            } 
        }
    }
    delete(eleme:HTMLElement): void {
        const index:number = Number(eleme.id);
                this.listsinhvien.splice(index,1);
                this.show();
    }
    
}

let sinhvien1 = new Sinhvien('a','hồ quý',true,10,14);
let sinhvien2 = new Sinhvien('b','hồ minh',false,10,20);
let sinhvien3 = new Sinhvien('c','hồ chiến',true,10,30);
let arrsinhvien:Sinhvien[] = [sinhvien1,sinhvien2,sinhvien3];
const listsinhvienadd = new Sinhviensive(arrsinhvien);
listsinhvienadd.show();
listsinhvienadd.find();
function halete(eleme:HTMLElement):void{
    listsinhvienadd.delete(eleme);
    
}


 