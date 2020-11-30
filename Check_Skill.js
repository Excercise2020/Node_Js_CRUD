console.log("------------------------------IF Else-------------------------------");
var x = 10;
var y = 5;

if(x>y)
{
    console.log("Hello");
}

else
{
    console.log("abc");
}


console.log("------------------------------Switch Case-------------------------------");

const expr = 'Mangoes';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log
      break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("------------------------------Date-------------------------------");

var a = new Date();
console.log(a.toString());


var b = new Date(2018, 11, 24);
console.log(b);


let current_datetime = new Date();
let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
console.log(formatted_date);

//const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const months = ["ม.ค", "ก.พ", "มี.ย","ม.ย", "พ.ค", "มิ.ย", "ก.ค", "ส.ค", "ก.ย", "ต.ค", "พ.ย", "ธ.ค"];
const days = ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];
let x1 = new Date();
let y1 = days[x1.getDay()]+ "-" +x1.getDate() + "-" + months[x1.getMonth()] + "-" + (x1.getFullYear()+543) + "  " +x1.getHours()+ ":" +x1.getMinutes()
console.log(y1);




console.log("------------------------------Try Catch-------------------------------");
function test()
  {
    let aaa = 10;
    let bbb = 20;
    let o;
    

    if(aaa < bbb)
    {
        o = bbb/aaa;
        console.log(o);
    }

    else 
    {
        throw new Error('err');
    }
  }

  try {
    test();
  } catch (e) 
  {
      console.log("error exception");
  }


  console.log("------------------------------Loop-------------------------------");

  var animal = ["Dog","Cat","Ant","Bird","Tiger","Loin","Elephant"];
  var Todo = "";

  for(var i = 0 ; i < animal.length ; i++)
  {
      Todo += animal[i] + " ";
      
  }

  console.log(Todo);


  const r = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
  let m = new Date();
  let l = m.getDate()+"-"+r[m.getMonth()]+"-"+(m.getFullYear()+543)
  console.log(l);








  


  















