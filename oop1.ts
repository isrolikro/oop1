// 1:
class Rectangle  {
    height:number
    width:number
    
    constructor(height:number, width:number) {
        this.height = height
        this.width = width
    }
    area():number{
        return this.height * this.width
    }
}
// 2:
class Square extends Rectangle {
    a: number

    constructor(a:number){
    super(a,a)
      this.a = a
    }
}

const 
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/isrolikro/oop1.git
// git push -u origin main