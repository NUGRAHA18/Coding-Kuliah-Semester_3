// mengedit elemen-elemen html melalui variabel tadi.
// Perhatikan kode ini:

// // const header1 = document.getElementById("h1") //element node
// // const p = document.getElementsByTagName("p") //html colection
// // const list = document.getElementsByClassName("list")

// Ketika kita perlu mengakses/mengubah
// elemen yang tidak memiliki id maupun class, kita dapat menggunakan kedua method ini. Perhatikan
// kode berikut:
// // const list2 = document.querySelector("li:nth-child(2)")
// // const anchor = document.querySelector("#a a")
// const list = document.querySelectorAll("li");

// list2.style.backgroundColor = "grey"
// anchor.style.backgroundColor = "salmon"

// header1.style.backgroundColor = "purple"
// p[0].style.color = "red"
// list[0].style.color = "blue"
// list[1].style.color = "yellow"
// list[2].style.color = "skyblue"


// const sebuahNode = document.getElementById('h1')
// sebuahNode.innerHTML = "<em>Javascript</em>"

// a mengganti paragraf satu yang ada pada section#a dengan ordered list berisi dua
// item. Simak kode berikut:
// const nodeSection = document.getElementById("a")
// const nodeP = nodeSection.querySelector("p")
// const list = "<ol><li>ayam goreng</li><li>mie goreng</li></ol>"
// nodeP.innerHTML = list

// memodifikasi style dari suatu elemen dengan memanfaatkan
// node.style.<CSSproperty>
// const nodeh1 = document.getElementById("h1")
// nodeh1.style.fontFamily = "Concolas"
// nodeh1.style.backgroundColor = "skyblue"
// nodeh1.style.textShadow = "10px 10px 10px"



// memanipulasi atribut dari suatu elemen. Gunakan getAttribute() untuk
// mendapatkan atribut dari suatu elemen, setAttribute() untuk menambahkan atribut ke suatu
// elemen, dan removeAttribute() untuk menghapus atribut dari suatu elemen


// const nodeH1 = document.getElementById("a")
// nodeH1.getAttribute("id")

// const nodeSection = document.getElementById("a")
// const nodeP1 = nodeSection.querySelector("p")
// nodeP1.setAttribute("id", "P1")

// const nodeDiv2 = document.getElementById("container")
// const nodeUl = nodeDiv2.querySelector("ul")
// nodeUl.removeAttribute("id")

const addBg = document.getElementById("container1")
addBg.style.backgroundColor = "skyblue"

const addBg2 = document.getElementById("container2")
addBg2.style.backgroundColor = "salmon"

const nodeSection = document.getElementById("container1")
const nodeA = nodeSection.querySelector("a")
const paragraf = "https://www.google.com/"
nodeA.innerHTML = paragraf


//mengubah text 1
const nodeSection2 = document.getElementById("container2")
const nodeP = nodeSection2.querySelector("li")
const paragraf2 = "List Baru 1"
nodeP.innerHTML = paragraf2


//mengubah list
// Ambil semua elemen <li> dengan class 'list-item'
const listItems = document.querySelectorAll('.list');

// Gunakan loop untuk mengubah konten, style, dan ukuran font
listItems.forEach((item, index) => {
  // Ubah teks dalam elemen
  item.textContent = `List Baru ${index + 1}`;

  // Ubah style
  item.style.backgroundColor = "purple";  // Ubah warna background
  item.style.color = "black";          // Ubah warna teks
  item.style.fontSize = "20px";        // Ubah ukuran font
  item.style.padding = "10px";         // Tambahkan padding
  item.style.margin = "10px 0";        // Tambahkan jarak antar elemen
  item.style.borderRadius = "5px";     // Berikan sudut melengkung
});


