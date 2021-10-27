const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
var randomize = require('randomatic');
var random = require('random-name');
const cheerio = require('cheerio');
const readline = require("readline-sync");
const fs = require('fs-extra');
const delay = require('delay');


const functionGetLink = (nickname) => new Promise((resolve, reject) => {
    fetch(`https://generator.email/`, {
           method: "get",
           headers: {
               'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
               'accept-encoding': 'gzip, deflate, br',
               'accept-language': 'en-US,en;q=0.9',
               'cookie': `_ga=GA1.2.1434039633.1579610017; _gid=GA1.2.374838364.1579610017; _gat=1; surl=rampok.my.id%2F${nickname}`,
               'sec-fetch-mode': 'navigate',
               'sec-fetch-site': 'same-origin',
               'upgrade-insecure-requests': 1,
               'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
           }
       })
    .then(res => res.text())
    .then(text => {
        const $ = cheerio.load(text);
        const src = $("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > div > div > p:nth-child(9) > span").text()
        resolve(src);
    })
    .catch(err => reject(err));
});


(async () => {


for (var i = 10 ; i < 100; i++) {
  

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://lnr.app/s/Dlpwj8');

 const rand = randomize('0', 5)
 const name = random.first()
 const email = `${name}${rand}@rampok.my.id`.toLowerCase()

      var a = 9;
                do {
                    await page.waitForSelector('#animatedComponent > div > div.css-1dbjc4n.r-1udh08x > div > div:nth-child(2) > div > div:nth-child(7) > a', {visible: true, timeout: 9000}).then(async() =>{
                   console.log(`mencoba regis menggunakan email ${email} `)
 await page.waitForSelector("#animatedComponent > div > div.css-1dbjc4n.r-1udh08x > div > div:nth-child(2) > div > div:nth-child(7) > a",{visible:true ,timeout:60000})
 await page.click("#animatedComponent > div > div.css-1dbjc4n.r-1udh08x > div > div:nth-child(2) > div > div:nth-child(7) > a")
console.log(`Daftar menggunakan email ${email}`)
 await page.waitForSelector("#loginForm > div > div > div:nth-child(2) > div:nth-child(3) > form > div > div:nth-child(1) > div > div:nth-child(1) > div > input",{visible:true ,timeout:60000})
 await page.click("#loginForm > div > div > div:nth-child(2) > div:nth-child(3) > form > div > div:nth-child(1) > div > div:nth-child(1) > div > input")
 await page.type("#loginForm > div > div > div:nth-child(2) > div:nth-child(3) > form > div > div:nth-child(1) > div > div:nth-child(1) > div > input", email)

 await page.waitForSelector("#loginForm > div > div > div:nth-child(2) > div:nth-child(3) > form > div > div.css-1dbjc4n.r-1niwhzg.r-1loqt21.r-1otgn73.r-1i6wzkk.r-lrvibr.r-13qz1uu > div",{visible:true ,timeout:60000})
 await page.click("#loginForm > div > div > div:nth-child(2) > div:nth-child(3) > form > div > div.css-1dbjc4n.r-1niwhzg.r-1loqt21.r-1otgn73.r-1i6wzkk.r-lrvibr.r-13qz1uu > div")
 
                
                console.log(`OTP code berhasil dikirim `)
                console.log(`Mencoba mendapatkan OTP code`)
    
                do {
                    var getOtp = await functionGetLink(`${email.split('@')[0]}`);
                } while (!getOtp);
    
                const otpWhere = getOtp.split('\n')[1]
                const otp = otpWhere.split(' ')[12]
    
                console.log(`OTP berhasil didapatkan ${otp}`)


 await page.waitForSelector("#loginForm > div > div > div:nth-child(2) > div:nth-child(3) > div > form > div > div:nth-child(7) > div > div > div:nth-child(1) > div > input",{visible:true ,timeout:60000})
 await page.click("#loginForm > div > div > div:nth-child(2) > div:nth-child(3) > div > form > div > div:nth-child(7) > div > div > div:nth-child(1) > div > input")
 await page.type("#loginForm > div > div > div:nth-child(2) > div:nth-child(3) > div > form > div > div:nth-child(7) > div > div > div:nth-child(1) > div > input", otp)
 a = a + 100;
                    }).catch(async() => {
                        console.log(`Robot detected, web akan reload`)
                        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

                    })
                } while (a<10);

await browser.close();
console.log(`Reff Berhasil\n`)
}
  


})();