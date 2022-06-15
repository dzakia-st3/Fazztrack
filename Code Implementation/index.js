////////// SOAL 1 //////////

function cekPalindrome(string) {
    let newString= ''
    let result = ''
    
    if (string.length == 0) {
        return 'input yang dimasukkan salah!'
    } else {
        for (let i = string.length - 1 ; i >= 0; i--) {
            newString += string[i]; {
            }
            newString;
        } if (newString == string) {
            result = `${string} adalah palindrome`
        } else {
            result = `${string} bukan palindrome`
        }
        return result
    }
}

console.log(cekPalindrome("malam"))
console.log(cekPalindrome("bayam"))
console.log(cekPalindrome(""))

////////// SOAL 2 //////////

function reverseString(kata) {

    if (typeof (kata) !== 'string') {
        return 'input yang dimasukkan salah!'
    } else {
        const potongTeks = kata.split(' ');
        let newString = ""
        
        for (let i = potongTeks.length - 1 ; i >= 0; i--) {
            newString += potongTeks[i] + " "; 
        }
            return newString;
    }
    
}

console.log(reverseString('Saya Belajar Javascript'))


////////// SOAL 3 //////////

const Fazzfood = (voucher, harga, jarak, pajak) => {
    
    let potongan = ''
    
        if (harga >= 50000 && voucher == 'FAZZFOOD50') {
            
            let diskon = harga * 0.5
        
            if (diskon >= 50000) {
                potongan += `${diskon = 50000}`
            } else {
                potongan += diskon
            }

        } else if (harga >= 25000 && voucher == 'DITRAKTIR60') {
            
            let diskon = harga * 0.6

            if (diskon >= 30000) {
                potongan += `${diskon = 30000}`
            } else {
                potongan += diskon
            }
        } else {
            return 'harga minimal tidak tercapai!'
        } 

    let ongkir = 0
    
        if (jarak <= 2) {
            ongkir += 5000
        } else {
            ongkir += 5000 + ((jarak-2)*3000)
        }

    
    let tax = 0
    
    if (pajak == true) {
        tax = 0.05 * harga
    } else {
        tax = 0
    }

    let SubTotal = harga - potongan + ongkir + tax
   
    return (`Harga: ${harga} \nPotongan: ${potongan} \nBiaya Antar: ${ongkir} \nPajak: ${tax} \nSubTotal: ${SubTotal}`)
}

console.log(Fazzfood('FAZZFOOD50', 75000, 5, true))


////////// SOAL 4 //////////

const divideAndSort = (data) => {
    
   let result = ''
   
    if (typeof (data) !== 'number') {
        return 'masukkan angka!'
    } else {
        let data1 = data.toString().split('0').map((item) => {return item.split('').sort((i,j) => {return i-j}).join('')})
        let data2 = data1.join('')
        result = parseInt(data2)
    }
    return result
}

console.log(divideAndSort('123098'))
console.log(divideAndSort(5956560159466056))


