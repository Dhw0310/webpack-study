import creatHeading from "./heading.js";
class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let a = new Test("webpack", 18);
console.log(a.name);
console.log(a.age);
// loader 转化器
// plugin 打包过程中做额外处理
const heading = creatHeading();
document.body.append(heading);
