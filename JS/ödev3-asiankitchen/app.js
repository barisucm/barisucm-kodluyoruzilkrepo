const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Kebap",
    category: "Türk ",
    price: 5.99,
    img:
      "https://www.koskkebaprestoran.com/app/view/assets/site_images/14.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
//burdaki fat arrow  açıklaması şu şekildedir
//item paremetresi ile fonksiyon oluşturur item.categorilerini çekip array oluşturur.
let allCategories=menu.map((item)=>item.category)
//burda ...new yeni array kuracağını temsil eder Set ise allCategories içinde tekrarlayan  
//dizi elemanlarını siler ve yeni her elemanı birbirinden farklı bir array oluşturur
let categories=[... new Set(allCategories)]
//All categorisini ekledik
categories.unshift("All")
//kontrol ettik 
console.log(categories)

let btnDOM=document.querySelector(".btn-container")
console.log(btnDOM.innerHTML)
//burda deneme1 olarak adlandırmam isimlerin çok iç içe geçmesini önlemek 
//en altta onClick fonksiyonunu kullanırken deneme1 parametresi ile menu yada item.category'kıyaslayacağız
//Kıyaslama sonucu filtreleme işlemi gerçekleşecek yani onClick hangi butonuna 
//basarsan deneme1 yani (category[i]) ve menu.category eşit olanları aynı gruba yazacak .

for (let i=0;i<categories.length;i++){
deneme1=categories[i]
btnDOM.innerHTML+=`<button onclick='btnClick("${deneme1}")' class="btn btn-outline-dark btn-item" >${deneme1}</button>`}






göster(menu)

function göster(menu){


  sectionDom=document.querySelector(".section-center")
  sectionDom.innerHTML=""
  for (let i=0;i<menu.length;i++){
    let a=menu[i]
    
    sectionDom.innerHTML+=`
    <div  class="menu-items col-lg-6 col-sm-12">
              <img src=${a.img} 
              alt=${a.title} 
              class="photo">
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${a.title}</h4>
                  <h4 class="price">${a.price}</h4>
                </div>
                <div class="menu-text">${a.desc}              </div>
              </div>
            </div>`
  }
  
}

//onclick=btnClick(${deneme1})
//burda menu.filter((item)=>{return item.category= EŞİT OLANLARI FİLTRELER= deneme1 yani category[i, yani tıkladığın]})
//FİLTRELENENLER RESULT A EŞİTLENİYOR VE EŞİTLENEN TEKRAR GÖSTER(FONKSİYONUNDAKİ -MENU DEĞİŞİP RESULT OLUYOR)

function btnClick(deneme1) {
  let result = menu
  if (deneme1 !== "All") {
    result = menu.filter((item) =>{
      return item.category == deneme1
    })
  }
  return göster(result)
}



